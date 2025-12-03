"use client";
import BrandForm from "@/components/brand/BrandForm";
import LanguageContext from "@/helper/languageContext";
import { BrandAPI } from "@/utils/axiosUtils/API";
import UseUpdate from "@/utils/hooks/UseUpdate";
import { useParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Row } from "reactstrap";

const TaxUpdate = () => {
  const params = useParams();
  const { t } = useTranslation("common");
  const { lang, updateId } = params;
  const { setFormLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);
  const { mutate, isLoading } = UseUpdate(BrandAPI, updateId, "/brand", "Brand Updated Successfully");
  return (
    updateId && (
      <Row>
        <Col sm="8" className="m-auto">
          <Card>
            <CardBody>
              <div className="card-header-2">
                <h5>{t("edit_brand")}</h5>
                {lang && (
                  <span className="badge title-header-badge">{lang}</span>
                )}
              </div>
              <BrandForm
                mutate={mutate}
                updateId={updateId}
                loading={isLoading}
                buttonName="Update"
                language={lang}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  );
};

export default TaxUpdate;
