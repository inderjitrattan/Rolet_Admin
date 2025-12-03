import MultiSelectField from "@/components/inputFields/MultiSelectField";
import CheckBoxField from "@/components/inputFields/CheckBoxField";

const CategoriesTab = ({ setSearch, categoryData, values, setFieldValue }) => {

  return (
    <>
      <MultiSelectField
        values={values}
        setFieldValue={setFieldValue}
        name={"categories"}
        title="categories"
        data={categoryData}
      />
      <CheckBoxField name={`[content][categories][status]`} title="status" />
    </>
  );
};
export default CategoriesTab;
