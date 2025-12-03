import CheckBoxField from "@/components/inputFields/CheckBoxField";
import SearchableSelectInput from "@/components/inputFields/SearchableSelectInput";
import SimpleInputField from "@/components/inputFields/SimpleInputField";
import TabTitle from "@/components/widgets/TabTitle";
import { JewelleryTwoProductBannerTitle } from "@/data/TabTitleList";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";

const ProductBannerTab = ({ productData, setSearch }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField
        name={`[content][product_banner][status]`}
        title="status"
      />
      <TabTitle
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        titleList={JewelleryTwoProductBannerTitle}
      />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <SimpleInputField
            nameList={[
              {
                name: `[content][product_banner][left_content][title]`,
                placeholder: t("enter_title"),
                title: "title",
              },
            ]}
          />
          <SearchableSelectInput
            nameList={[
              {
                name: "productBannerLeftPanelProduct",
                title: "products",
                inputprops: {
                  name: "productBannerLeftPanelProduct",
                  id: "productBannerLeftPanelProduct",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
          <CheckBoxField
            name={`[content][product_banner][left_content][status]`}
            title="status"
          />
        </TabPane>
        <TabPane tabId="2">
          <SimpleInputField
            nameList={[
              {
                name: `[content][product_banner][center_content][tag]`,
                placeholder: t("enter_tag"),
                title: "tags",
              },
              {
                name: `[content][product_banner][center_content][title]`,
                placeholder: t("enter_title"),
                title: "title",
              },
            ]}
          />
          <SearchableSelectInput
            nameList={[
              {
                name: "productBannerCenterPanelProduct",
                title: "products",
                inputprops: {
                  name: "productBannerCenterPanelProduct",
                  id: "productBannerCenterPanelProduct",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
          <CheckBoxField
            name={`[content][product_banner][center_content][status]`}
            title="status"
          />
        </TabPane>
        <TabPane tabId="3">
          <SimpleInputField
            nameList={[
              {
                name: `[content][product_banner][right_content][title]`,
                placeholder: t("enter_title"),
                title: "title",
              },
            ]}
          />
          <SearchableSelectInput
            nameList={[
              {
                name: "productBannerRightPanelProduct",
                title: "products",
                inputprops: {
                  name: "productBannerRightPanelProduct",
                  id: "productBannerRightPanelProduct",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
          <CheckBoxField
            name={`[content][product_banner][right_content][status]`}
            title="status"
          />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProductBannerTab;
