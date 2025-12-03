import FileUploadField from "@/components/inputFields/FileUploadField";
import { getHelperText } from "@/utils/customFunctions/getHelperText";
import { useTranslation } from "react-i18next";
import CheckBoxField from "@/components/inputFields/CheckBoxField";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/data/MediaConfig";

const OfferBanner3Tab = ({
  values,
  setFieldValue,
  productData,
  categoryData,
  setSearch,
}) => {
  const { t } = useTranslation("common");

  return (
    <>
      <FileUploadField
        paramsProps={{ mime_type: mediaConfig.image.join(",") }}
        name="offerBanner3Image"
        title="image"
        id="offerBanner3Image"
        showImage={values["offerBanner3Image"]}
        type="file"
        values={values}
        setFieldValue={setFieldValue}
        helpertext={getHelperText("806x670px")}
      />
      <CommonRedirect
        values={values}
        setFieldValue={setFieldValue}
        productData={productData}
        categoryData={categoryData}
        nameList={{
          selectNameKey: "offerBanner3LinkType",
          multipleNameKey: "offerBanner3Link",
        }}
        setSearch={setSearch}
      />
      <CheckBoxField
        name={`[content][offer_banner_3]][status]`}
        title="status"
      />
    </>
  );
};

export default OfferBanner3Tab;
