"use client";
import FaqForm from "@/components/faq/FaqForm";
import LanguageContext from "@/helper/languageContext";
import { FaqAPI } from "@/utils/axiosUtils/API";
import FormWrapper from "@/utils/hoc/FormWrapper";
import UseUpdate from "@/utils/hooks/UseUpdate";
import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";

const UpdateFaq = () => {
  const params = useParams();
  const { lang, updateId } = params;
  const { setFormLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);
  const { mutate, isLoading } = UseUpdate(FaqAPI, updateId, FaqAPI, "FAQ Updated Successfully");
  
  return (
    updateId && (
      <FormWrapper title="edit_faq" lang={lang}>
        <FaqForm
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

export default UpdateFaq;
