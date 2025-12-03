import TableWrapper from "../../utils/hoc/TableWrapper";
import ShowTable from "../table/ShowTable";
import Loader from "../commonComponent/Loader";
import UsePermissionCheck from "@/utils/hooks/UsePermissionCheck";

const AllReviewsTable = ({ data, ...props }) => {
  const [destroy] = UsePermissionCheck(["destroy"]);

  const headerObj = {
    noEdit: true,
    checkBox: true,
    isOption: destroy == false ? false : true,
    optionHead: { title: "Action" },
    isSerialNo: false,
    column: [
      {
        title: "image",
        apiKey: "product_thumbnail",
        type: "image",
        class: "sm-width",
      },
      {
        title: "customer_name",
        apiKey: "consumer",
        sortBy: "desc",
        subKey: ["name"],
      },
      { title: "product_name", apiKey: "product", subKey: ["name"] },
      { title: "rating", apiKey: "rating", type: "rating", sorting: true },
      {
        title: "created_at",
        apiKey: "created_at",
        sorting: true,
        sortBy: "desc",
        type: "date",
      },
    ],
    data: data || [],
  };
  headerObj.data?.map(
    (element) =>
      (element.product_thumbnail = element?.product?.product_thumbnail)
  );
  if (!data) return <Loader />;
  return (
    <>
      <ShowTable {...props} headerData={headerObj} />
    </>
  );
};

export default TableWrapper(AllReviewsTable);
