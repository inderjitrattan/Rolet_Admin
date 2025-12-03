import TableWrapper from "@/utils/hoc/TableWrapper";
import ShowTable from "../table/ShowTable";
import UsePermissionCheck from "@/utils/hooks/UsePermissionCheck";

const AllRoles = ({ data, ...props }) => {
  const [edit, destroy] = UsePermissionCheck(["edit", "destroy"]);
  const headerObj = {
    checkBox: true,
    isSerialNo: false,
    isOption: edit == false && destroy == false ? false : true,
    optionHead: { title: "Action" },
    column: [
      { title: "name", apiKey: "name", sorting: true, sortBy: "desc" },
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
  if (!data) return null;
  return (
    <>
      <ShowTable {...props} headerData={headerObj} />
    </>
  );
};

export default TableWrapper(AllRoles);
