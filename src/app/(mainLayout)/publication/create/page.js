"use client";
import PublicationForm from "@/components/publication/PublicationForm";
import { PublicationApi } from "@/utils/axiosUtils/API";
import FormWrapper from "@/utils/hoc/FormWrapper";
import UseCreate from "@/utils/hooks/UseCreate";

const CreatePublication = () => {
  const { mutate, isLoading } = UseCreate(
    PublicationApi,
    false,
    "/publication",
    "Publication Created Successfully"
  );
  return (
    <FormWrapper title="create_publication">
      <PublicationForm loading={isLoading} mutate={mutate} buttonName="save" />
    </FormWrapper>
  );
};

export default CreatePublication;
