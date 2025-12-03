"use client";
import UserForm from "@/components/user/UserForm";
import { user } from "@/utils/axiosUtils/API";
import FormWrapper from "@/utils/hoc/FormWrapper";
import UseUpdate from "@/utils/hooks/UseUpdate";
import { useParams } from "next/navigation";

const UserUpdate = () => {
  const params = useParams();
  const { mutate, isLoading } = UseUpdate(
    user,
    params?.updateId,
    `/user`,
    "User Updated Successfully"
  );
  return (
    params?.updateId && (
      <FormWrapper title="edit_user">
        <UserForm
          mutate={mutate}
          updateId={params?.updateId}
          loading={isLoading}
          buttonName="Update"
        />
      </FormWrapper>
    )
  );
};

export default UserUpdate;
