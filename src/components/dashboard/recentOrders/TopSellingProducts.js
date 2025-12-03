import { Col, Form, Row } from "reactstrap";
import { CheckPermission } from "@/components/common/CheckPermissionList";
import { Formik } from "formik";
import TopSellingProduct from "./TopSellingProduct";

const RecentOrderTable = () => {
  return (
    <Row className="theme-form dashboard-form">
      {CheckPermission("product.index") && (
        <Col xs="12">
          <Formik initialValues={{ filter_by: "" }}>
            {({ values, setFieldValue }) => (
              <Form>
                <TopSellingProduct
                  values={values}
                  setFieldValue={setFieldValue}
                />
              </Form>
            )}
          </Formik>
        </Col>
      )}
    </Row>
  );
};

export default RecentOrderTable;
