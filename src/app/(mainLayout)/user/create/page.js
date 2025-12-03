"use client";

import UserForm from "@/components/user/UserForm";
import { user } from "@/utils/axiosUtils/API";
import FormWrapper from "@/utils/hoc/FormWrapper";
import UseCreate from "@/utils/hooks/UseCreate";

const AddNewUser = () => {
  const { mutate, isLoading } = UseCreate(user, false, `/user`, "User Created Successfully");
  return (
    <FormWrapper title="add_user">
      <UserForm mutate={mutate} loading={isLoading} buttonName="save_user" />
    </FormWrapper>
  );
};

export default AddNewUser;
