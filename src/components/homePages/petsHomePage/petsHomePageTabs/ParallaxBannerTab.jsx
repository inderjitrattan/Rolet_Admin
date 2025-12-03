import CheckBoxField from "@/components/inputFields/CheckBoxField";
import FileUploadField from "@/components/inputFields/FileUploadField";
import SimpleInputField from "@/components/inputFields/SimpleInputField";
import { mediaConfig } from "@/data/MediaConfig";
import { getHelperText } from "@/utils/customFunctions/getHelperText";
import { useTranslation } from "react-i18next";

const ParallaxBannerTab = ({ values, setFieldValue }) => {
  const { t } = useTranslation("common");
  return (
    <div className="inside-horizontal-tabs">
          <SimpleInputField
            nameList={[
              {
                name: `[content][parallax_banner][main_title]`,
                placeholder: t("enter_main_title"),
                title: "main_title",
              },
              {
                name: `[content][parallax_banner][title]`,
                placeholder: t("enter_title"),
                title: "title",
              },
              {
                name: `[content][parallax_banner][description]`,
                placeholder: t("enter_description"),
                title: "description",
              },
            ]}
          />
          <FileUploadField
            paramsProps={{ mime_type: mediaConfig.image.join(",") }}
            name="parallaxBannerImage"
            title="image"
            id="parallaxBannerImage"
            showImage={values["parallaxBannerImage"]}
            type="file"
            values={values}
            setFieldValue={setFieldValue}
            helpertext={getHelperText("375x586px")}
          />
          <CheckBoxField
            name={`[content][parallax_banner][status]`}
            title="status"
          />
    </div>
  );
};

export default ParallaxBannerTab;