"use client";
import TaxForm from "@/components/tax/TaxForm";
import { tax } from "@/utils/axiosUtils/API";
import FormWrapper from "@/utils/hoc/FormWrapper";
import UseCreate from "@/utils/hooks/UseCreate";

const TaxCreate = () => {
  const { mutate, isLoading } = UseCreate(tax, false, "/tax", "Tax Created Successfully");
  return (
    <FormWrapper title="add_tax">
      <TaxForm loading={isLoading} mutate={mutate} buttonName="save" />
    </FormWrapper>
  );
};

export default TaxCreate;
