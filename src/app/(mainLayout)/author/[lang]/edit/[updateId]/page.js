"use client";
import AuthorForm from "@/components/author/AuthorForm";
import LanguageContext from "@/helper/languageContext";
import { AuthorApi } from "@/utils/axiosUtils/API";
import FormWrapper from "@/utils/hoc/FormWrapper";
import UseUpdate from "@/utils/hooks/UseUpdate";
import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";

const UpdateAuthor = () => {
  const params = useParams();
  const { lang, updateId } = params;
  const { setFormLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const { mutate, isLoading } = UseUpdate(AuthorApi, updateId, `/author`, "Author Updated Successfully");
  return (
    updateId && (
      <FormWrapper title="edit_author" lang={lang}>
        <AuthorForm
          mutate={mutate}
          updateId={updateId}
          loading={isLoading}
          buttonName="update"
          language={lang}
        />
      </FormWrapper>
    )
  );
};

export default UpdateAuthor;
