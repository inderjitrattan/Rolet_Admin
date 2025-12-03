import TableWrapper from "../../utils/hoc/TableWrapper";
import ShowTable from "../table/ShowTable";
import UsePermissionCheck from "../../utils/hooks/UsePermissionCheck";
import { useContext } from "react";
import SettingContext from "@/helper/settingContext";

const AllBlogsTable = ({ data, ...props }) => {
  const [edit, destroy] = UsePermissionCheck(["edit", "destroy"]);
  const { settingObj } = useContext(SettingContext);
  const language = settingObj?.general?.default_language?.locale;

  const headerObj = {
    checkBox: true,
    isSerialNo: false,
    isOption: edit == false && destroy == false ? false : true,
    noEdit: edit ? false : true,
    optionHead: { title: "Action", show: "blog" },
    column: [
      {
        title: "image",
        apiKey: "blog_thumbnail",
        sorting: true,
        sortBy: "desc",
        type: "image",
      },
      { title: "title", apiKey: "title", sorting: true, sortBy: "desc" },
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
  if (!data) return null;
  return (
    <>
      <ShowTable {...props} headerData={headerObj} lang={language} />
    </>
  );
};

export default TableWrapper(AllBlogsTable);
