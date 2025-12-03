import Loader from "@/components/commonComponent/Loader";
import CheckBoxField from "@/components/inputFields/CheckBoxField";
import MultiSelectField from "@/components/inputFields/MultiSelectField";

const BrandTab = ({ values, setFieldValue, brandData, brandLoader }) => {
  if (brandLoader) return <Loader />;
  
  return (
    <>
      <MultiSelectField
        values={values}
        setFieldValue={setFieldValue}
        name="brandItems"
        title="brand"
        data={brandData}
      />
      <CheckBoxField name={`[content][brand][status]`} title="status" />
    </>
  );
};
export default BrandTab;
