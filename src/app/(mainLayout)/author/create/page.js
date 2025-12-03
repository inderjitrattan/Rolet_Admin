"use client";
import AuthorForm from "@/components/author/AuthorForm";
import { AuthorApi } from "@/utils/axiosUtils/API";
import FormWrapper from "@/utils/hoc/FormWrapper";
import UseCreate from "@/utils/hooks/UseCreate";

const CreateAuthor = () => {
  const { mutate, isLoading } = UseCreate(AuthorApi, false, "/author", "Author Created Successfully");
  return (
    <FormWrapper title="create_author">
      <AuthorForm loading={isLoading} mutate={mutate} buttonName="save" />
    </FormWrapper>
  );
};

export default CreateAuthor;
