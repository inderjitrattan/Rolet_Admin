import Loader from "@/components/commonComponent/Loader";
import TabTitle from "@/components/widgets/TabTitle";
import { VegetableOneSettingTitle } from "@/data/TabTitleList";
import FormBtn from "@/elements/buttons/FormBtn";
import request from "@/utils/axiosUtils";
import { HomePageAPI } from "@/utils/axiosUtils/API";
import UseCreate from "@/utils/hooks/UseCreate";
import { useQuery } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, Col, Row } from "reactstrap";
import AllTabVegetableOne from "./AllTabVegetableOne";
import VegetableOneInitialValue from "./vegetableOneFormValues/VegetableOneInitialValue";
import VegetableOneSubmit from "./vegetableOneFormValues/VegetableOneSubmit";
import LanguageRedirection from "@/components/commonComponent/LanguageRedirection";
import { useRouter } from "next/navigation";

const VegetableOneForm = ({ title, apiData }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  const router = useRouter()  
  const refRefetch = useRef();
  const { data, isLoading } = useQuery({ queryKey: [HomePageAPI], queryFn: () => request({ url: HomePageAPI, params: { slug: "vegetables_one" } }, router), refetchOnWindowFocus: false, select: (res) => res.data});

  const { mutate, isLoading: createLoader } = UseCreate(
    `${HomePageAPI}/${data?.id}`,
    false,
    false,
    "Theme Updated Successfully",
    (resDta) => {
      refRefetch?.current?.call();
    }
  );

  let IncludeList = ["status"];
  let NewSettingsData = data || {};
  const RecursiveSet = ({ data }) => {
    if (data && typeof data == "object") {
      Object.keys(data).forEach((key) => {
        if (data[key] == 0 && IncludeList.includes(key)) {
          data[key] = false;
        } else if (data[key] == 1 && IncludeList.includes(key)) {
          data[key] = true;
        } else {
          RecursiveSet({ data: data[key] });
        }
      });
    }
  };
  RecursiveSet({ data: NewSettingsData });
  if (isLoading) return <Loader />;
  return (
    <Formik
      enableReinitialize
      initialValues={{ ...VegetableOneInitialValue(NewSettingsData) }}
      onSubmit={(values) => {
        values["_method"] = "put";
        VegetableOneSubmit(values, mutate);
      }}
    >
      {({ values, errors, touched, setFieldValue }) => (
        <Col>
          <Card>
            <div className="title-header option-title">
              <h5>{t(title)}</h5>
            </div>
            <Form className="theme-form theme-form-2 mega-form vertical-tabs">
              <LanguageRedirection theme={"/theme"} path={"vegetables_one"} />

              <Row>
                <Col xl="3" lg="4">
                  <TabTitle
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    titleList={VegetableOneSettingTitle}
                    errors={errors}
                    touched={touched}
                  />
                </Col>
                <AllTabVegetableOne
                  apiData={apiData}
                  activeTab={activeTab}
                  values={values}
                  setFieldValue={setFieldValue}
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
export default VegetableOneForm;
