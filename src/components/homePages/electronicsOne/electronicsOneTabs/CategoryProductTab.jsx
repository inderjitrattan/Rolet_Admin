import MultiSelectField from "@/components/inputFields/MultiSelectField";
import { useTranslation } from "react-i18next";
import CheckBoxField from "@/components/inputFields/CheckBoxField";
import SimpleInputField from "@/components/inputFields/SimpleInputField";

const CategoryProductTab = ({
  values,
  setFieldValue,
  setSearch,
  categoryData,
}) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          {
            name: `[content][category_product][tag]`,
            placeholder: t("enter_title"),
            title: "tags",
          },
          {
            name: `[content][category_product][title]`,
            placeholder: t("enter_sub_title"),
            title: "title",
          },
        ]}
      />
      <MultiSelectField
        values={values}
        setFieldValue={setFieldValue}
        name={"categoryProductList"}
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
