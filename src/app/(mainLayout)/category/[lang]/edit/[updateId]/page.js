"use client";
import { useRouter } from "next/router";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import dynamic from "next/dynamic";
import {
  Category,
  CategoryExportAPI,
  CategoryImportAPI,
} from "@/utils/axiosUtils/API";
import CategoryForm from "@/components/category/CategoryForm";
import TreeForm from "@/components/category/TreeForm";
import UsePermissionCheck from "@/utils/hooks/UsePermissionCheck";
import UseCreate from "@/utils/hooks/UseCreate";
import TitleWithDropDown from "@/components/common/TitleWithDropDown";
import { useContext, useEffect } from "react";
import LanguageContext from "@/helper/languageContext";
import { useParams } from "next/navigation";

const CategoryUpdate = () => {
  const params = useParams();
  const { lang, updateId } = params;
  const { setFormLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const TableTitle = dynamic(() => import("@/components/table/TableTitle"), {
    ssr: false,
  });
  const [edit] = UsePermissionCheck(["edit"]);
  const { mutate, isLoading } = UseCreate(
    `${Category}/${updateId}`,
    false,
    "/category",
    "Category Updated Successfully"
  );
  return (
    <>
      <Container fluid={true}>
        <Row>
          <Col xl="4">
            <Card>
              <CardBody>
                <TitleWithDropDown
                  pathName="/category"
                  moduleName="Category"
                  importExport={{
                    importUrl: CategoryImportAPI,
                    exportUrl: CategoryExportAPI,
                  }}
                />
                <TreeForm type={"product"} isLoading={isLoading} />
              </CardBody>
            </Card>
          </Col>
          <Col xl="8">
            <Card>
              {edit ? (
                <CardBody>
                  <TableTitle
                    moduleName="edit_category"
                    onlyTitle={true}
                    lang={lang}
                  />
                  {updateId && (
                    <CategoryForm
                      mutate={mutate}
                      updateId={updateId}
                      loading={isLoading}
                      type={"product"}
                      buttonName="Update"
                      language={lang}
                    />
                  )}
                </CardBody>
              ) : (
                <h1>No Permission</h1>
              )}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CategoryUpdate;
