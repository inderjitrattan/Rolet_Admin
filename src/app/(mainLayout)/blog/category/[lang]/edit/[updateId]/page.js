"use client";
import TitleWithDropDown from "@/components/common/TitleWithDropDown";
import CategoryForm from "@/components/category/CategoryForm";
import TreeForm from "@/components/category/TreeForm";
import LanguageContext from "@/helper/languageContext";
import { Category } from "@/utils/axiosUtils/API";
import UseCreate from "@/utils/hooks/UseCreate";
import UsePermissionCheck from "@/utils/hooks/UsePermissionCheck";
import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { useParams } from "next/navigation";

const UpdateBlogCategory = () => {
  const params = useParams();
  const TableTitle = dynamic(() => import("@/components/table/TableTitle"), {
    ssr: false,
  });
  const [edit] = UsePermissionCheck(["edit"], "category");
  const { t } = useTranslation("common");

  const { setFormLanguage } = useContext(LanguageContext);

  const { lang, updateId } = params;

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const { mutate, isLoading } = UseCreate(
    `${Category}/${updateId}`,
    false,
    "/blog/category",
    "Category Updated Successfully"
  );
  return (
    <>
      <Row>
        <Col xl="4">
          <Card>
            <CardBody>
              <TitleWithDropDown
                pathName="/blog/category"
                moduleName="Category"
              />
              <TreeForm type={"post"} isLoading={isLoading} />
            </CardBody>
          </Card>
        </Col>
        <Col xl="8">
          <Card>
            {edit ? (
              <CardBody>
                {updateId && (
                  <>
                    <TableTitle moduleName="edit_category" onlyTitle={true} />
                    <CategoryForm
                      mutate={mutate}
                      updateId={updateId}
                      loading={isLoading}
                      type={"post"}
                      buttonName="Update"
                      language={lang}
                    />
                  </>
                )}
              </CardBody>
            ) : (
              <h1>{t("permissions_is_required")}</h1>
            )}
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default UpdateBlogCategory;
