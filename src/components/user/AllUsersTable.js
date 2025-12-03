import TableWrapper from "../../utils/hoc/TableWrapper";
import ShowTable from "../table/ShowTable";
import Loader from "../commonComponent/Loader";
import UsePermissionCheck from "../../utils/hooks/UsePermissionCheck";

const AllUsersTable = ({ data, ...props }) => {
  const [edit, destroy] = UsePermissionCheck(["edit", "destroy"]);
  const headerObj = {
    checkBox: true,
    isOption: edit == false && destroy == false ? false : true,
    noEdit: edit ? false : true,
    isSerialNo: false,
    optionHead: { title: "Action" },
    column: [
      {
        title: "avatar",
        apiKey: "profile_image",
        type: "image",
        class: "sm-width",
        NameWithRound: true,
      },
      { title: "name", apiKey: "name", sorting: true, sortBy: "desc" },
      { title: "email", apiKey: "email", sorting: true, sortBy: "desc" },
      { title: "role", apiKey: "role", subKey: ["name"] },
      {
        title: "created_at",
        apiKey: "created_at",
        sorting: true,
        sortBy: "desc",
        type: "date",
      },
      { title: "status", apiKey: "status", type: "switch" },
    ],
    data: data || [],
  };
  if (!data) return <Loader />;
  return (
    <>
      <ShowTable {...props} headerData={headerObj} />
    </>
  );
};

export default TableWrapper(AllUsersTable);
