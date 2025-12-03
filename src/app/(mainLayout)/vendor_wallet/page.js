"use client";
import SelectUser from "@/components/wallet/SelectUser";
import SelectWalletPrice from "@/components/wallet/SelectWalletPrice";
import UserTransactionsTable from "@/components/wallet/UserTransactionsTable";
import WrappedVendor from "@/components/wallet/WrappedVendor";
import AccountContext from "@/helper/accountContext";
import {
  VendorTransations,
  VendorWalletCredit,
  VendorWalletDebit,
} from "@/utils/axiosUtils/API";
import UseCreate from "@/utils/hooks/UseCreate";
import UsePermissionCheck from "@/utils/hooks/UsePermissionCheck";
import { YupObject, nameSchema } from "@/utils/validation/ValidationSchemas";
import { Form, Formik } from "formik";
import { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiWallet2Line } from "react-icons/ri";
import { Col, Row } from "reactstrap";

const VendorWallet = () => {
  const { role, setRole } = useContext(AccountContext);
  useEffect(() => {
    setRole(JSON.parse(localStorage.getItem("role"))?.name);
  }, []);

  const { t } = useTranslation("common");
  const [credit, debit] = UsePermissionCheck(["credit", "debit"]);
  const [isValue, setIsValue] = useState("");
  const refRefetch = useRef();
  const { mutate: CreateWalletCredit, isLoading: creditLoader } = UseCreate(
    VendorWalletCredit,
    false,
    "/vendor_wallet",
    false,
    () => {
      refRefetch.current.call();
    }
  );
  const { mutate: CreateWalletDebit, isLoading: debitLoader } = UseCreate(
    VendorWalletDebit,
    false,
    "/vendor_wallet",
    false,
    () => {
      refRefetch.current.call();
    }
  );
  return (
    <div className="save-back-button">
      <Formik
        initialValues={{
          vendor_id: "",
          showBalance: "",
          balance: "",
        }}
        validationSchema={YupObject({ vendor_id: nameSchema })}
        onSubmit={(values) => {
          if (isValue == "credit") {
            CreateWalletCredit(values);
          } else {
            CreateWalletDebit(values);
          }
        }}
      >
        {({ values, handleSubmit, setFieldValue }) => (
          <>
            <Form>
              <div className="card-spacing">
                <Row>
                  {role !== "vendor" && (
                    <SelectUser
                      title={t("select_vendor")}
                      values={values}
                      setFieldValue={setFieldValue}
                      role={"vendor"}
                      name={"vendor_id"}
                      userRole={role}
                    />
                  )}
                  <SelectWalletPrice
                    values={values}
                    setFieldValue={setFieldValue}
                    handleSubmit={handleSubmit}
                    setIsValue={setIsValue}
                    creditLoader={creditLoader}
                    debitLoader={debitLoader}
                    title={t("wallet")}
                    description={t("wallet_balance")}
                    selectUser={"vendor_id"}
                    icon={<RiWallet2Line />}
                    isCredit={credit}
                    isDebit={debit}
                    role={role}
                  />
                </Row>
              </div>
            </Form>
            <Col sm="12">
              <UserTransactionsTable
                filterHeader={{ customTitle: "Transactions" }}
                url={VendorTransations}
                moduleName="UserTransactions"
                setFieldValue={setFieldValue}
                values={values}
                ref={refRefetch}
                dateRange={true}
                userIdParams={true}
                paramsProps={{
                  vendor_id: values["vendor_id"] ? values["vendor_id"] : null,
                }}
              />
            </Col>
          </>
        )}
      </Formik>
    </div>
  );
};

export default VendorWallet;
