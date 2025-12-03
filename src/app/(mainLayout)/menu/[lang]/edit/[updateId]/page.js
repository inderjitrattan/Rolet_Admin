"use client";
import TitleWithDropDown from "@/components/common/TitleWithDropDown";
import FrontMenuForm from "@/components/frontMenu/FrontMenuForm";
import MenuForm from "@/components/frontMenu/MenuForm";
import LanguageContext from "@/helper/languageContext";
import { Menu } from "@/utils/axiosUtils/API";
import UsePermissionCheck from "@/utils/hooks/UsePermissionCheck";
import UseUpdate from "@/utils/hooks/UseUpdate";
import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RiLockLine } from "react-icons/ri";
import { Card, CardBody, Col, Row } from "reactstrap";

const FrontMenuUpdate = () => {
  const params = useParams();
  const { lang, updateId } = params;
  const { setFormLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const { t } = useTranslation("common");
  const [edit] = UsePermissionCheck(["edit"]);
  const { mutate, isLoading } = UseUpdate(
    Menu,
    updateId,
    `/menu`,
    "Menu updated successfully"
  );
  return (
    <>
      <Row>
        <Col xl="4">
          <Card>
            <CardBody>
              <TitleWithDropDown pathName="/menu" moduleName="menu" />
              <FrontMenuForm isLoading={isLoading} />
            </CardBody>
          </Card>
        </Col>
        <Col xl="8">
          <Card>
            <CardBody>
              <div className="title-header option-title">
                <h5>{t("edit_menu")}</h5>
                {lang && (
                  <span className="badge title-header-badge">{lang}</span>
                )}
              </div>
              <MenuForm
                updateId={updateId}
                loading={isLoading}
                mutate={mutate}
                language={lang}
              />
            </CardBody>
            <div className="no-permission">
              <div>
                <RiLockLine />
                <h3>{t("permissions_is_required")}</h3>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default FrontMenuUpdate;
