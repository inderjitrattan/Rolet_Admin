import { getHelperText } from "@/utils/customFunctions/getHelperText";
import CheckBoxField from "@/components/inputFields/CheckBoxField";
import FileUploadField from "@/components/inputFields/FileUploadField";
import CommonRedirect from "../../CommonRedirect";
import { mediaConfig } from "@/data/MediaConfig";

const OfferBanner1Tab = ({
  values,
  setFieldValue,
  productData,
  categoryData,
  setSearch,
}) => {
  return (
    <>
      <FileUploadField
        paramsProps={{ mime_type: mediaConfig.image.join(",") }}
        name="offerBanner1Image"
        title="image"
        id="offerBanner1Image"
        showImage={values["offerBanner1Image"]}
        type="file"
        values={values}
        setFieldValue={setFieldValue}
        helpertext={getHelperText("1859x550px")}
      />
      <CommonRedirect
        values={values}
        setFieldValue={setFieldValue}
        productData={productData}
        categoryData={categoryData}
        nameList={{
          selectNameKey: "offerBanner1LinkType",
          multipleNameKey: "offerBanner1Link",
        }}
        setSearch={setSearch}
      />
      <CheckBoxField
        name={`[content][offer_banner_1][status]`}
        title="status"
      />
    </>
  );
};

export default OfferBanner1Tab;
