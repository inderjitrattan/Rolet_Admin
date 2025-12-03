"use client";
import FormWrapper from "@/utils/hoc/FormWrapper";
import PageForm from "@/components/pages/PageForm";
import UseCreate from "@/utils/hooks/UseCreate";
import { PagesAPI } from "@/utils/axiosUtils/API";

const CreatePage = () => {
  const { mutate, isLoading } = UseCreate(PagesAPI, false, "/page", "Page Created Successfully");
  return (
    <FormWrapper title="create_page">
      <PageForm mutate={mutate} loading={isLoading} buttonName="save" />
    </FormWrapper>
  );
};

export default CreatePage;
