"use client";
import SelectUser from "@/components/wallet/SelectUser";
import SelectWalletPrice from "@/components/wallet/SelectWalletPrice";
import UserTransactionsTable from "@/components/wallet/UserTransactionsTable";
import {
  UserTransations,
  WalletCredit,
  WalletDebit,
} from "@/utils/axiosUtils/API";
import UseCreate from "@/utils/hooks/UseCreate";
import UsePermissionCheck from "@/utils/hooks/UsePermissionCheck";
import { YupObject, nameSchema } from "@/utils/validation/ValidationSchemas";
import { Form, Formik } from "formik";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiWallet2Line } from "react-icons/ri";
import { Col, Row } from "reactstrap";

const Wallet = () => {
  const [isValue, setIsValue] = useState("");
  const [credit, debit] = UsePermissionCheck(["credit", "debit"]);

  const { t } = useTranslation("common");
  const refRefetch = useRef();
  const { mutate: CreateWalletCredit, isLoading: creditLoader } = UseCreate(
    WalletCredit,
    false,
    "/wallet",
    false,
    () => {
      refRefetch.current.call();
    }
  );
  const { mutate: CreateWalletDebit, isLoading: debitLoader } = UseCreate(
    WalletDebit,
    false,
    "/wallet",
    false,
    () => {
      refRefetch.current.call();
    }
  );
  return (
    <div className="save-back-button">
      <Formik
        initialValues={{
          consumer_id: "",
          showBalance: "",
          balance: "",
        }}
        validationSchema={YupObject({ consumer_id: nameSchema })}
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
                  <SelectUser
                    title={t("select_customer")}
                    values={values}
                    setFieldValue={setFieldValue}
                    role="consumer"
                    name={"consumer_id"}
                    userRole={""}
                  />
                  <SelectWalletPrice
                    values={values}
                    setFieldValue={setFieldValue}
                    handleSubmit={handleSubmit}
                    setIsValue={setIsValue}
                    creditLoader={creditLoader}
                    debitLoader={debitLoader}
                    title={t("wallet")}
                    description={t("wallet_balance")}
                    selectUser={"consumer_id"}
                    icon={<RiWallet2Line />}
                    isCredit={credit}
                    isDebit={debit}
                  />
                </Row>
              </div>
            </Form>
            <Col sm="12">
              <UserTransactionsTable
                filterHeader={{ customTitle: "Transactions" }}
                url={UserTransations}
                moduleName="UserTransactions"
                setFieldValue={setFieldValue}
                userIdParams={true}
                ref={refRefetch}
                dateRange={true}
                paramsProps={{
                  consumer_id: values["consumer_id"]
                    ? values["consumer_id"]
                    : null,
                }}
              />
            </Col>
          </>
        )}
      </Formik>
    </div>
  );
};

export default Wallet;
