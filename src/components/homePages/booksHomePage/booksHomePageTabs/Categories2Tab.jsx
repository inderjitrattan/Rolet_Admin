import { useTranslation } from "react-i18next";
import CheckBoxField from "@/components/inputFields/CheckBoxField";
import MultiSelectField from "@/components/inputFields/MultiSelectField";

const Categories2Tab = ({
  values,
  setFieldValue,
  categoryData,
  productData,
}) => {
  const { t } = useTranslation("common");

  return (
    <>
      <MultiSelectField
        values={values}
        setFieldValue={setFieldValue}
        name="categories2"
        title="categories"
        data={categoryData}
      />
      <CheckBoxField name={`[content][categories_2][status]`} title="status" />
    </>
  );
};
export default Categories2Tab;
