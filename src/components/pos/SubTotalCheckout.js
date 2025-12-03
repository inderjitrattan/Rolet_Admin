import React, { useContext, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { CardBody } from "reactstrap";
import Btn from "../../elements/buttons/Btn";
import SettingContext from "../../helper/settingContext";
import { AddtoCartAPI } from "../../utils/axiosUtils/API";
import UseDelete from "../../utils/hooks/UseDelete";
import UseCreate from "../../utils/hooks/UseCreate";

import { useTranslation } from "react-i18next";

const PosDetailCard = ({ values, setFieldValue, initValues }) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const pathname = usePathname();
  const { convertCurrency } = useContext(SettingContext);

  useEffect(() => {
    setFieldValue("products", initValues?.products);
    setFieldValue("total", initValues?.total);
  }, [initValues]);
  return (
    <CardBody>
      <div className="title-header">
        <h5 className="fw-bold">{t("billing_summary")}</h5>
      </div>
      <div className="product-details">
        {!values["products"]?.length ? (
          <>
          </>
        ) : (
          <>
            <ul className={`summary-total`}>
              <li>
                <h4>{t("subtotal")}</h4>
                <h4 className="price">{convertCurrency(values["total"])}</h4>
              </li>
              <li>
                <h4>{t("shipping")}</h4>
                <h4 className="price">{t("cost_at_checkout")}</h4>
              </li>
              <li>
                <h4>{t("tax")}</h4>
                <h4 className="price">{t("cost_at_checkout")}</h4>
              </li>
              <li className="list-total">
                <h4>{t("total")}</h4>
                <h4 className="price">{convertCurrency(values["total"])}</h4>
              </li>
            </ul>
            {pathname !== "/checkout" && (
              <Btn
                className="btn btn-animation payment-btn mt-4"
                onClick={() => {
                  router.push("/checkout");
                  setFieldValue(
                    "amount",
                    values["products"]
                      .map((item) => item.subtotal)
                      .reduce(
                        (partialSum, a) => Number(partialSum) + Number(a),
                        0
                      )
                  );
                }}
              >
                {t("proceed_to_checkout")}
              </Btn>
            )}
          </>
        )}
      </div>
    </CardBody>
  );
};

export default PosDetailCard;
