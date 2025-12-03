import CheckBoxField from "@/components/inputFields/CheckBoxField";
import FileUploadField from "@/components/inputFields/FileUploadField";
import SimpleInputField from "@/components/inputFields/SimpleInputField";
import { mediaConfig } from "@/data/MediaConfig";
import { getHelperText } from "@/utils/customFunctions/getHelperText";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const HomeBannerTab = ({
  values,
  setFieldValue,
  productData,
  categoryData,
  setSearch,
}) => {
  const { t } = useTranslation("common");
  const [active, setActive] = useState();
  const removeBanners = (index) => {
    if (values["content"]["home_banner"]["banners"].length > 1) {
      let filterValue = values["content"]["home_banner"]["banners"].filter(
        (item, i) => i !== index
      );
      setFieldValue("[content][home_banner][banners]", filterValue);
      filterValue?.forEach((elem, i) => {
        elem?.image_url &&
          setFieldValue(`homeBannerImage${i}`, {
            original_url: elem?.image_url,
          });
        elem?.redirect_link?.link_type &&
          setFieldValue(
            `homeRedirectLinkType${i}`,
            elem?.redirect_link?.link_type
          );
        elem?.redirect_link?.link &&
          setFieldValue(`homeRedirectLink${i}`, elem?.redirect_link?.link);
      });
    }
  };

  return (
    <>
      <FileUploadField
        paramsProps={{ mime_type: mediaConfig.image.join(",") }}
        name="homeBannerBackgroundImage"
        title="image"
        id="homeBannerBackgroundImage"
        showImage={values["homeBannerBackgroundImage"]}
        type="file"
        values={values}
        setFieldValue={setFieldValue}
        helpertext={getHelperText("375x586px")}
      />
      <FileUploadField
        paramsProps={{ mime_type: mediaConfig.image.join(",") }}
        name="homeBannerSubImage1"
        title="image"
        id="homeBannerSubImage1"
        showImage={values["homeBannerSubImage1"]}
        type="file"
        values={values}
        setFieldValue={setFieldValue}
        helpertext={getHelperText("375x586px")}
      />
      <FileUploadField
        paramsProps={{ mime_type: mediaConfig.image.join(",") }}
        name="homeBannerSubImage2"
        title="image"
        id="homeBannerSubImage2"
        showImage={values["homeBannerSubImage2"]}
        type="file"
        values={values}
        setFieldValue={setFieldValue}
        helpertext={getHelperText("375x586px")}
      />
      <SimpleInputField
        nameList={[
          {
            name: `[content][home_banner][title]`,
            placeholder: t("enter_title"),
            title: "title",
          },
          {
            name: `[content][home_banner][description]`,
            placeholder: t("enter_description"),
            title: "description",
            type: "textarea",
          },
        ]}
      />
      <CheckBoxField name={`[content][home_banner][status]`} title="status" />
    </>
  );
};

export default HomeBannerTab;
