import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";
import { FiPlus } from "react-icons/fi";
import Btn from "../../elements/buttons/Btn";
import Pluralize from "../../utils/customFunctions/Pluralize";
import NoSsr from "../../utils/hoc/NoSsr";
import UsePermissionCheck from "../../utils/hooks/UsePermissionCheck";
import ImportExport from "./ImportExport";

const TableTitle = ({
  fullObj,
  moduleName,
  onlyTitle,
  type,
  filterHeader,
  importExport,
  refetch,
  exportButton,
  showFilterDifferentPlace,
  lang,
}) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const pathname = usePathname();
  const [create] = UsePermissionCheck(["create"]);
  const toTitleCase = (str) => str.replace(/[_-]/g, " ").replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());

  return (
    <div className="title-header option-title">
      <h5>
        {filterHeader?.customTitle
          ? t(toTitleCase(filterHeader.customTitle))
          : t(toTitleCase(Pluralize(moduleName)))}
      </h5>
      {lang && <span className="badge title-header-badge">{lang}</span>}
      {importExport && (
        <ImportExport
          importExport={importExport}
          moduleName={Pluralize(moduleName)}
          refetch={refetch}
          exportButton={exportButton}
        />
      )}
      <NoSsr>
        {filterHeader?.customFilter &&
          !showFilterDifferentPlace &&
          filterHeader?.customFilter}
        {create && !onlyTitle && (
          <Btn
            className="align-items-center btn-theme add-button"
            title={t("add") + " " + t(moduleName)}
            onClick={() =>
              type == "post" && moduleName.toLowerCase() == "tag"
                ? router.push(`/${pathname.split("/")[1]}/tag/create`)
                : type == "post"
                ? router.push(`/${pathname.split("/")[1]}/category/create`)
                : router.push(`/${pathname.split("/")[1]}/create`)
            }
          >
            <FiPlus />
          </Btn>
        )}
      </NoSsr>
    </div>
  );
};

export default TableTitle;
