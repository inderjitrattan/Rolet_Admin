"use client";
import Loader from "@/components/commonComponent/Loader";
import LanguageForm from "@/components/language/LanguageForm";
import LanguageContext from "@/helper/languageContext";
import { AllLanguageApi, store } from "@/utils/axiosUtils/API";
import FormWrapper from "@/utils/hoc/FormWrapper";
import UseCreate from "@/utils/hooks/UseCreate";
import { useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";

const LanguageCreate = () => {
  const { mutate, isLoading } = UseCreate(AllLanguageApi, false, "/language", "Language Created Successfully");
  const { refetchLanguages } = useContext(LanguageContext); // Optional
  const queryClient = useQueryClient();

  const extraFunc = () => {
    queryClient.invalidateQueries(["newLang"]); //force header language list to refetch
    refetchLanguages?.(); // if you also use context (optional)
  };
  
  if (isLoading) return <Loader />;
  
  return (
    <FormWrapper title="add_language">
      <LanguageForm mutate={mutate} loading={isLoading} buttonName="save" extraFunc={extraFunc} />
    </FormWrapper>
  );
};

export default LanguageCreate;
