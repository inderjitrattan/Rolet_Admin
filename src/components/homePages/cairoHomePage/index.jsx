import TabTitle from "@/components/widgets/TabTitle";
import { cairoHomePageTitle } from "@/data/TabTitleList";
import FormBtn from "@/elements/buttons/FormBtn";

import request from "@/utils/axiosUtils";
import { HomePageAPI } from "@/utils/axiosUtils/API";
import { RecursiveSet } from "@/utils/customFunctions/RecursiveSet";
import UseCreate from "@/utils/hooks/UseCreate";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useRef, useState } from "react";
import { Card, Col, Row } from "reactstrap";
import CairoHomePageAllTabsHomePage from "./CairoHomePageAllTabsHomePage";
import CairoHomePageInitialValue from "./CairoHomePageInitialValue";
import CairoHomePageSubmitValue from "./CairoHomePageSubmitValue";

const CairoHomePage = ({ title }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  const refRefetch = useRef();
  const { data, isLoading, refetch } = useQuery({ queryKey: ["HomePageAPI"], queryFn: () => request({ url: HomePageAPI, params: { slug: "cairo" } }), refetchOnWindowFocus: false, select: (res) => { return res.data}});
  const { mutate, isLoading: createLoader } = UseCreate(
    `${HomePageAPI}/${data?.id}`,
    false,
    false,
    "Theme Updated Successfully",
    (resDta) => {
      refRefetch?.current?.call();
    }
  );
  let NewSettingsData = data || {};
  let IncludeList = ["status"];
  RecursiveSet({ data: NewSettingsData, IncludeList });

  return (
    <Formik
      enableReinitialize
      initialValues={{
        ...CairoHomePageInitialValue(NewSettingsData),
      }}
      onSubmit={(values) => {
        CairoHomePageSubmitValue(values, mutate);
      }}
    >
      {({ values, errors, touched, setFieldValue }) => (
        <Col>
          <Card>
            <div className="title-header option-title">
              <h5>{t(title)}</h5>
            </div>
            <Form className="theme-form theme-form-2 mega-form vertical-tabs">
              <Row>
                <Col xl="3" lg="4">
                  <TabTitle
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    titleList={cairoHomePageTitle}
                    errors={errors}
                    touched={touched}
                  />
                </Col>
                <CairoHomePageAllTabsHomePage
                  activeTab={activeTab}
                  values={values}
                  setFieldValue={setFieldValue}
                  isLoading={isLoading}
                  ref={refRefetch}
                />
                <FormBtn loading={createLoader} />
              </Row>
            </Form>
          </Card>
        </Col>
      )}
    </Formik>
  );
};

export default CairoHomePage;
