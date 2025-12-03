"use client";
import AttributeForm from "@/components/attribute/AttributeForm";
import { attribute } from "@/utils/axiosUtils/API";
import FormWrapper from "@/utils/hoc/FormWrapper";
import UseCreate from "@/utils/hooks/UseCreate";

const AttributeCreate = () => {
  const { mutate, isLoading } = UseCreate(attribute, false, `/attribute`, "Attribute Created Successfully");
  return (
    <FormWrapper title="add_attribute">
      <AttributeForm mutate={mutate} loading={isLoading} buttonName="save" />
    </FormWrapper>
  );
};

export default AttributeCreate;
