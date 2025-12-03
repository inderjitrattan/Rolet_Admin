import CheckBoxField from "@/components/inputFields/CheckBoxField";
import FileUploadField from "@/components/inputFields/FileUploadField";
import SearchableSelectInput from "@/components/inputFields/SearchableSelectInput";
import { mediaConfig } from "@/data/MediaConfig";
import { getHelperText } from "@/utils/customFunctions/getHelperText";

const ProductList2Tab = ({ productData, setSearch, values, setFieldValue }) => {
  return (
    <>
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
      <FileUploadField
        paramsProps={{ mime_type: mediaConfig.image.join(",") }}
        name="productList2Image"
        title="image"
        id="productList2Image"
        type="file"
        values={values}
        setFieldValue={setFieldValue}
        showImage={values["productList2Image"]}
        helpertext={getHelperText("1920x637px")}
      />
      =
      <CheckBoxField
        name={`[content][products_list_2][status]`}
        title="status"
      />
    </>
  );
};
export default ProductList2Tab;
