import CheckBoxField from "@/components/inputFields/CheckBoxField";
import SearchableSelectInput from "@/components/inputFields/SearchableSelectInput";
import SimpleInputField from "@/components/inputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const ProductList1Tab = ({
  values,
  setFieldValue,
  helpertext,
  productData,
  setSearch,
}) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          {
            name: `[content][products_list][title]`,
            placeholder: t("enter_title"),
            title: "title",
          },
        ]}
      />
      <SearchableSelectInput
        nameList={[
          {
            name: "productLists",
            title: "products",
            inputprops: {
              name: "productLists",
              id: "productLists",
              options: productData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
      <CheckBoxField name={`[content][products_list][status]`} title="status" />
    </>
  );
};
export default ProductList1Tab;
