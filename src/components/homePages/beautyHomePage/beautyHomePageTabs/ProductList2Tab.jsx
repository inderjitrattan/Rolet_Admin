import { useTranslation } from "react-i18next";
import CheckBoxField from "@/components/inputFields/CheckBoxField";
import SearchableSelectInput from "@/components/inputFields/SearchableSelectInput";
import SimpleInputField from "@/components/inputFields/SimpleInputField";

const ProductList2Tab = ({ productData, setSearch }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          {
            name: `[content][products_list_2][tag]`,
            placeholder: t("enter_tag"),
            title: "tags",
          },
          {
            name: `[content][products_list_2][title]`,
            placeholder: t("enter_title"),
            title: "title",
          },
        ]}
      />
      <SearchableSelectInput
        nameList={[
          {
            name: "productList2Product",
            title: "products",
            inputprops: {
              name: "productList2Product",
              id: "productList2Product",
              options: productData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
      <CheckBoxField
        name={`[content][products_list_2][status]`}
        title="status"
      />
    </>
  );
};
export default ProductList2Tab;
