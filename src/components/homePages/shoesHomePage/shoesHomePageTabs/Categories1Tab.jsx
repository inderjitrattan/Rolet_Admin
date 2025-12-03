import CheckBoxField from "@/components/inputFields/CheckBoxField";
import MultiSelectField from "@/components/inputFields/MultiSelectField";

const Categories1Tab = ({ categoryData, values, setFieldValue }) => {
  return (
    <>
      <MultiSelectField
        values={values}
        setFieldValue={setFieldValue}
        name={"categories1"}
        title="categories"
        data={categoryData}
      />
      <CheckBoxField name={`[content][categories_1][status]`} title="status" />
    </>
  );
};
export default Categories1Tab;
