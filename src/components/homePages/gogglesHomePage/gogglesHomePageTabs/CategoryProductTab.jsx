import CheckBoxField from "@/components/inputFields/CheckBoxField";
import MultiSelectField from "@/components/inputFields/MultiSelectField";
import { useTranslation } from "react-i18next";

const CategoryProductTab = ({ categoryData, values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <MultiSelectField
        values={values}
        setFieldValue={setFieldValue}
        name={"productCategories"}
        title="categories"
        data={categoryData}
      />
      <CheckBoxField
        name={`[content][category_product][status]`}
        title="status"
      />
    </>
  );
};
export default CategoryProductTab;
