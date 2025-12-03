"use client";
import { PagesAPI } from "@/utils/axiosUtils/API";
import UseUpdate from "@/utils/hooks/UseUpdate";
import PageForm from "@/components/pages/PageForm";
import FormWrapper from "@/utils/hoc/FormWrapper";
import { useContext, useEffect } from "react";
import LanguageContext from "@/helper/languageContext";
import { useParams } from "next/navigation";

const UpdatePage = () => {
  const params = useParams();
  const { lang, updateId } = params;
  const { setFormLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const { mutate, isLoading } = UseUpdate(PagesAPI, updateId, PagesAPI, "Pages Updated Successfully");
  return (
    updateId && (
      <FormWrapper title="update_page" lang={lang}>
        <PageForm
          mutate={mutate}
          loading={isLoading}
          updateId={updateId}
          buttonName="Update"
          language={lang}
        />
      </FormWrapper>
    )
  );
};

export default UpdatePage;
