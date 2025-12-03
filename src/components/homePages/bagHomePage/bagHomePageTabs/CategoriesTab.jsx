import CheckBoxField from "@/components/inputFields/CheckBoxField";
import MultiSelectField from "@/components/inputFields/MultiSelectField";
import { useTranslation } from "react-i18next";

const CategoriesTab = ({ setSearch, categoryData, values, setFieldValue }) => {
  const { t } = useTranslation("common");

  return (
    <>
      <MultiSelectField
        values={values}
        setFieldValue={setFieldValue}
        name={"categories"}
        title="categories"
        data={categoryData}
      />
      <CheckBoxField name={`[content][category][status]`} title="status" />
    </>
  );
};
export default CategoriesTab;
