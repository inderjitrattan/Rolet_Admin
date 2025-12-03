import CheckBoxField from "@/components/inputFields/CheckBoxField";
import MultiSelectField from "@/components/inputFields/MultiSelectField";
import SearchableSelectInput from "@/components/inputFields/SearchableSelectInput";
import SimpleInputField from "@/components/inputFields/SimpleInputField";
import TabTitle from "@/components/widgets/TabTitle";
import { FashionFourProductListTitle } from "@/data/TabTitleList";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";

const ProductListTab = ({
  values,
  setFieldValue,
  productData,
  categoryData,
  setSearch,
}) => {
  const [activeTab, setActiveTab] = useState("1");

  const { t } = useTranslation("common");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][products_list][status]`} title="status" />
      <TabTitle
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        titleList={FashionFourProductListTitle}
      />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <MultiSelectField
            values={values}
            setFieldValue={setFieldValue}
            name={"productListCategories"}
            title="categories"
            data={categoryData}
          />
        </TabPane>
        <TabPane tabId="2">
          <SimpleInputField
            nameList={[
              {
                name: `[content][products_list][products][tag]`,
                placeholder: t("enter_title"),
                title: "title",
              },
              {
                name: `[content][products_list][products][title]`,
                placeholder: t("enter_sub_title"),
                title: "sub_title",
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
          <CheckBoxField
            name={`[content][products_list][products][status]`}
            title="status"
          />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProductListTab;
