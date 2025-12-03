import MultiSelectField from "@/components/inputFields/MultiSelectField";
import SimpleInputField from "@/components/inputFields/SimpleInputField";
import { useTranslation } from "react-i18next";
import CheckBoxField from "@/components/inputFields/CheckBoxField";

const CategoriesTab = ({ setSearch, categoryData, values, setFieldValue }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <SimpleInputField
        nameList={[
          {
            name: `[content][categories][title]`,
            placeholder: t("enter_title"),
            title: "title",
          },
        ]}
      />
      <MultiSelectField
        values={values}
        setFieldValue={setFieldValue}
        name={"categories"}
        title="categories"
        data={categoryData}
      />
      <CheckBoxField name={`[content][categories][status]`} title="status" />
    </>
  );
};
export default CategoriesTab;
