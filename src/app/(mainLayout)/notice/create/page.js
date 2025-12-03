"use client";
import NoticeForm from "@/components/notice/NoticeForm";
import { Notice } from "@/utils/axiosUtils/API";
import FormWrapper from "@/utils/hoc/FormWrapper";
import UseCreate from "@/utils/hooks/UseCreate";

const NoticeCreate = () => {
  const { mutate, isLoading } = UseCreate(Notice, false, `/notice`, "Notice Created Successfully");
  return (
    <FormWrapper title="add_notice">
      <NoticeForm loading={isLoading} mutate={mutate} buttonName="save" />
    </FormWrapper>
  );
};

export default NoticeCreate;
