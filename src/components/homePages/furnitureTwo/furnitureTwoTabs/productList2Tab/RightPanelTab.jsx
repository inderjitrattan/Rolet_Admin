import CheckBoxField from "@/components/inputFields/CheckBoxField";
import SearchableSelectInput from "@/components/inputFields/SearchableSelectInput";
import SimpleInputField from "@/components/inputFields/SimpleInputField";
import { useTranslation } from "react-i18next";
import { RiArrowDownLine } from "react-icons/ri";

const RightPanelTab = ({ values, productData, setSearch }) => {
  const { t } = useTranslation("common");

  return (
    <div className="shipping-accordion-custom">
      <div className="p-3 rule-dropdown d-flex justify-content-between">
        {values["content"]?.["product_list_2"]?.["right_panel"]?.["title"] ||
          "Text Here"}
        <RiArrowDownLine />
      </div>
      <div className="rule-edit-form">
        <SimpleInputField
          nameList={[
            {
              name: "[content][product_list_2][right_panel][title]",
              placeholder: t("enter_title"),
              title: "title",
            },
          ]}
        />
        <SearchableSelectInput
          nameList={[
            {
              name: "rightPanelProduct",
              title: "products",
              inputprops: {
                name: "rightPanelProduct",
                id: "rightPanelProduct",
                options: productData || [],
                setsearch: setSearch,
              },
            },
          ]}
        />
        <CheckBoxField
          name="[content][product_list_2][right_panel][status]"
          title="status"
        />
      </div>
    </div>
  );
};

export default RightPanelTab;
