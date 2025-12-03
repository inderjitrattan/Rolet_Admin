"use client";
import FaqForm from "@/components/faq/FaqForm";
import { FaqAPI } from "@/utils/axiosUtils/API";
import FormWrapper from "@/utils/hoc/FormWrapper";
import UseCreate from "@/utils/hooks/UseCreate";

const CreateFaq = () => {
  const { mutate, isLoading } = UseCreate(FaqAPI, false, FaqAPI, "FAQ Created Successfully");
  return (
    <FormWrapper title="add_faq">
      <FaqForm loading={isLoading} mutate={mutate} buttonName="save" />
    </FormWrapper>
  );
};

export default CreateFaq;
