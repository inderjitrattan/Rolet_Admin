"use client";
import BlogForm from "@/components/blog/BlogForm";
import { blog } from "@/utils/axiosUtils/API";
import FormWrapper from "@/utils/hoc/FormWrapper";
import UseCreate from "@/utils/hooks/UseCreate";

const AddBlog = () => {
  const { mutate, isLoading } = UseCreate(blog, false, "/blog", "Blog Created Successfully");
  return (
    <FormWrapper title="add_blog">
      <BlogForm mutate={mutate} loading={isLoading} buttonName="save" />
    </FormWrapper>
  );
};

export default AddBlog;
