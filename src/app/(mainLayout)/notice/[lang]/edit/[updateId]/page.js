"use client";

import NoticeForm from "@/components/notice/NoticeForm";
import LanguageContext from "@/helper/languageContext";
import { Notice } from "@/utils/axiosUtils/API";
import FormWrapper from "@/utils/hoc/FormWrapper";
import UseUpdate from "@/utils/hooks/UseUpdate";
import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";

const NoticeUpdate = () => {
  const params = useParams();
  const { lang, updateId } = params;
  const { setFormLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const { mutate, isLoading } = UseUpdate(Notice, updateId, `/notice`, "Notice Updated Successfully");
  return (
    updateId && (
      <FormWrapper title="update_notice" lang={lang}>
        <NoticeForm
          mutate={mutate}
          updateId={updateId}
          loading={isLoading}
          buttonName="Update"
          language={lang}
        />
      </FormWrapper>
    )
  );
};

export default NoticeUpdate;
