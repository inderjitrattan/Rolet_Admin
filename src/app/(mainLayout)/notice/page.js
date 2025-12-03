"use client";
import React, { useContext, useState } from "react";
import { Col } from "reactstrap";
import { Notice } from "@/utils/axiosUtils/API";
import AllNoticeTable from "@/components/notice";
import AccountContext from "@/helper/accountContext";
import FormWrapper from "@/utils/hoc/FormWrapper";
import { CheckPermission } from "@/components/common/CheckPermissionList";
import ShowNotice from "@/components/notice/ShowNotice";

const NoticeRead = () => {
  const [isCheck, setIsCheck] = useState([]);
  const { accountData } = useContext(AccountContext);
  const role = accountData?.role?.name;

  return (
    <>
      {role === "admin" ? (
        <Col sm="12">
          <AllNoticeTable
            url={Notice}
            moduleName="Notice"
            isCheck={isCheck}
            setIsCheck={setIsCheck}
          />
        </Col>
      ) : (
        !CheckPermission(["notice.create", "notice.destroy"]) && (
          <FormWrapper title="Notice">
            <ShowNotice />
          </FormWrapper>
        )
      )}
    </>
  );
};

export default NoticeRead;
