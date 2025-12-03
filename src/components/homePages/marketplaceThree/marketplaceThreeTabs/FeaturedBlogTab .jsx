import CheckBoxField from "@/components/inputFields/CheckBoxField";
import SearchableSelectInput from "@/components/inputFields/SearchableSelectInput";

const FeaturedBlogTab = ({ values, setFieldValue, setSearch, blogData }) => {
  return (
    <>
      <SearchableSelectInput
        nameList={[
          {
            name: "featuredBlogList",
            title: "blogs",
            inputprops: {
              name: "featuredBlogList",
              id: "featuredBlogList",
              options: blogData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
      <CheckBoxField
        name={`[content][featured_blogs][status]`}
        title="status"
      />
    </>
  );
};
export default FeaturedBlogTab;
