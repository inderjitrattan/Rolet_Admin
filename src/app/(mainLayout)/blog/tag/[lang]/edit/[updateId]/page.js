"use client";
import UseUpdate from "@/utils/hooks/UseUpdate";
import { blog, tag } from "@/utils/axiosUtils/API";
import TagForm from "@/components/tag/TagForm";
import FormWrapper from "@/utils/hoc/FormWrapper";
import { useParams } from "next/navigation";
import LanguageContext from "@/helper/languageContext";
import { useContext, useEffect } from "react";

const BlogTagUpdate = () => {
  const params = useParams();
  const { setFormLanguage } = useContext(LanguageContext);

  const { lang, updateId } = params;

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const { mutate, isLoading } = UseUpdate(tag, updateId, `${blog}${tag}`, "Blog Tag Updated Successfully");
  return (
    params?.updateId && (
      <FormWrapper title="edit_tag">
        <TagForm
          mutate={mutate}
          updateId={params?.updateId}
          loading={isLoading}
          type={"post"}
          buttonName="Update"
          language={lang}
        />
      </FormWrapper>
    )
  );
};

export default BlogTagUpdate;
