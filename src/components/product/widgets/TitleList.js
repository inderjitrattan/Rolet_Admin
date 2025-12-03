import { ProductTabTitleListData } from "@/data/TabTitleList";

export const GenerateTitleList = (values) => {
  return ProductTabTitleListData.filter((tab) => {
    const isPhysical = values.product_type === "physical";
    const isDigital = values.product_type === "digital";
    const isExternal = values.product_type === "external";
    const isVariable = values.type !== "simple";

    if (tab.title === "variants") {
      return isVariable && !isExternal; // show only for variable (not external)
    }

    if (tab.title === "digital_product") {
      return isDigital;
    }

    if (tab.title === "shipping") {
      return isPhysical;
    }

    return true; // include all others
  });
};
