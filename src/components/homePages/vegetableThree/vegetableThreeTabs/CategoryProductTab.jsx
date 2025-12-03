import MultiSelectField from "@/components/inputFields/MultiSelectField";
import { useTranslation } from "react-i18next";
import CheckBoxField from "@/components/inputFields/CheckBoxField";
import SimpleInputField from "@/components/inputFields/SimpleInputField";

const CategoryProductTab = ({ categoryData, values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          {
            name: `[content][category_product][tag]`,
            placeholder: t("enter_tag"),
            title: "tags",
          },
          {
            name: `[content][category_product][title]`,
            placeholder: t("enter_title"),
            title: "title",
          },
        ]}
      />
      <MultiSelectField
        values={values}
        setFieldValue={setFieldValue}
        name={"productCategory"}
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
