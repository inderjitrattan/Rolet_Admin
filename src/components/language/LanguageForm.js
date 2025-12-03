import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Row } from "reactstrap";
import FormBtn from "../../elements/buttons/FormBtn";
import request from "../../utils/axiosUtils";
import { AllLanguageApi } from "../../utils/axiosUtils/API";
import { YupObject } from "../../utils/validation/ValidationSchemas";
import Loader from "../commonComponent/Loader";
import CheckBoxField from "../inputFields/CheckBoxField";
import SearchableSelectInput from "../inputFields/SearchableSelectInput";
import SimpleInputField from "../inputFields/SimpleInputField";
import { LanguageInitialValue } from "./widgets/LanguageInitialValue";
import { LanguageValidationSchema } from "./widgets/LanguageValidationSchema";

const LanguageForm = ({ mutate, updateId, loading, buttonName, extraFunc }) => {
  const Select2Data = [
    { name: "English (En)", id: "en" },
    { name: "Arabic (Ar)", id: "ar" },
    { name: "Spanish (Es)", id: "es" },
    { name: "French (Fr)", id: "fr" },
    { name: "German (De)", id: "de" },
    { name: "Chinese Simplified (Zh-CN)", id: "zh-CN" },
    { name: "Chinese Traditional (Zh-TW)", id: "zh-TW" },
    { name: "Japanese (Ja)", id: "ja" },
    { name: "Korean (Ko)", id: "ko" },
    { name: "Russian (Ru)", id: "ru" },
    { name: "Portuguese (Pt)", id: "pt" },
    { name: "Italian (It)", id: "it" },
    { name: "Dutch (Nl)", id: "nl" },
    { name: "Swedish (Sv)", id: "sv" },
    { name: "Norwegian (No)", id: "no" },
    { name: "Danish (Da)", id: "da" },
    { name: "Finnish (Fi)", id: "fi" },
    { name: "Turkish (Tr)", id: "tr" },
    { name: "Greek (El)", id: "el" },
    { name: "Hebrew (He)", id: "he" },
    { name: "Hindi (Hi)", id: "hi" },
    { name: "Thai (Th)", id: "th" },
    { name: "Polish (Pl)", id: "pl" },
  ];

  // { id: '971', name: '+971', data: { class: 'ae', code: '+971' } },

  const { t } = useTranslation("common");
  const router = useRouter();
  const {
    data: oldData,
    isLoading,
    refetch,
  } = useQuery(
    { queryKey: ["language/id"],
      queryFn: () => request({ url: AllLanguageApi + "/" + updateId }, router),
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        enabled: false,
        select: (data) => data?.data,
    }
  );
  useEffect(() => {
    updateId && refetch();
  }, [updateId]);
  if (updateId && isLoading) return <Loader />;
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ ...LanguageInitialValue(updateId, oldData) }}
        validationSchema={YupObject({
          ...LanguageValidationSchema,
        })}
        onSubmit={(values) => {
          values["status"] = Number(values["status"]);
          mutate(values, {
            onSuccess: () => {
              extraFunc?.(); // ✅ trigger update (like header dropdown reload)
              setSubmitting(false);
            },
            onError: () => setSubmitting(false),
          });
        }}
      >
        {({ values }) => (
          <Form className="theme-form theme-form-2 mega-form">
            <Row>
              <div>
                <SimpleInputField
                  nameList={[
                    {
                      name: "name",
                      title: "name",
                      placeholder: t("enter_language_name"),
                      require: "true",
                      type: "text",
                    },
                  ]}
                />
              </div>
              <SearchableSelectInput
                nameList={[
                  {
                    name: "locale",
                    require: "true",
                    title: "Locale",
                    inputprops: {
                      name: "locale",
                      id: "locale",
                      options: Select2Data,
                      close: values["locale"] !== "" ? true : false,
                    },
                  },
                ]}
              />
              <CheckBoxField name="is_rtl" title="rtl" />
              <CheckBoxField name="status" />
              <FormBtn loading={loading} buttonName={buttonName} />
            </Row>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LanguageForm;
