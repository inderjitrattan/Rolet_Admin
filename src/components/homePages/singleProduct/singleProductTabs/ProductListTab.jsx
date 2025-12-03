import { useTranslation } from "react-i18next";
import CheckBoxField from "@/components/inputFields/CheckBoxField";
import SearchableSelectInput from "@/components/inputFields/SearchableSelectInput";
import SimpleInputField from "@/components/inputFields/SimpleInputField";

const ProductListTab = ({ productData, setSearch }) => {
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
            name: "productListProduct",
            title: "products",
            inputprops: {
              name: "productListProduct",
              id: "productListProduct",
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
export default ProductListTab;
