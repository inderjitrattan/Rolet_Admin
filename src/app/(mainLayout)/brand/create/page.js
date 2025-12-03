"use client";
import BrandForm from "@/components/brand/BrandForm";
import { BrandAPI } from "@/utils/axiosUtils/API";
import FormWrapper from "@/utils/hoc/FormWrapper";
import UseCreate from "@/utils/hooks/UseCreate";

const CreateBrand = () => {
  const { mutate, isLoading } = UseCreate(BrandAPI, false, "/brand", "Brand Created Successfully");
  return (
    <FormWrapper title="create_brand">
      <BrandForm loading={isLoading} mutate={mutate} buttonName="save" />
    </FormWrapper>
  );
};

export default CreateBrand;
