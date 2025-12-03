"use client";
import TagForm from "@/components/tag/TagForm";
import { tag } from "@/utils/axiosUtils/API";
import FormWrapper from "@/utils/hoc/FormWrapper";
import UseCreate from "@/utils/hooks/UseCreate";

const TagsCreate = () => {
  const { mutate, isLoading } = UseCreate(tag, false, "/blog/tag", "Blog Tag Created Successfully");
  return (
    <FormWrapper title="add_tag">
      <TagForm
        loading={isLoading}
        mutate={mutate}
        type={"post"}
        buttonName="save"
      />
    </FormWrapper>
  );
};

export default TagsCreate;
