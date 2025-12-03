import { useEffect } from "react";
import SimpleInputField from "../inputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const MenuPath = ({ values, setFieldValue }) => {
  const { t } = useTranslation("common");

  useEffect(() => {
    if (values?.set_page_link && typeof values.set_page_link === "string") {
      setFieldValue("path", `page/${values?.set_page_link}`);
    }
  }, [values?.set_page_link]);

  return (
    <>
      {values["link_type"] === "link" && (
        <SimpleInputField
          nameList={[
            {
              name: "path",
              title: "path",
              placeholder: t("enter_path"),
              helpertext: `*Ensure that the path creates a route in the frontend: "${values?.path}"`,
            },
          ]}
        />
      )}
    </>
  );
};

export default MenuPath;
