import { Col, Row } from "reactstrap";
import { Form, Formik } from "formik";
import { Category, product } from "../../../utils/axiosUtils/API";
import SearchableSelectInput from "../../inputFields/SearchableSelectInput";
import { useQuery } from "@tanstack/react-query";
import request from "../../../utils/axiosUtils";
import ReviewCard from "./ReviewCard";
import { CheckPermission } from "@/components/common/CheckPermissionList";
import { useRouter } from "next/navigation";
import TopSellingProducts from "../recentOrders/TopSellingProducts";
import ProductStockReport from "./ProductStockReport";

const ProductStockReportTable = () => {
  const router = useRouter();

  const { data } = useQuery(
    { queryKey: [Category],
      queryFn: () =>
        request(
          { url: Category, params: { status: 1, type: "product" } },
          router
        ),
      refetchOnWindowFocus: false,
      select: (data) => data?.data?.data,
    }
  );
  return (
    <Row className="theme-form dashboard-form">
      {CheckPermission("product.index") && (
        <Col md={6}>
          <Formik initialValues={{ category_ids: "" }}>
            {({ values, setFieldValue }) => (
              <Form>
                <ProductStockReport
                  url={product}
                  moduleName={"product"}
                  paramsProps={{
                    category_ids: values["category_ids"]
                      ? values["category_ids"]
                      : null,
                    paginate: 8,
                    field: "quantity",
                    sort: "asc",
                  }}
                  filterHeader={{
                    noPagination: true,
                    noSearch: true,
                    noPageDrop: true,
                    customTitle: "product_stock_report",
                    customFilter: (
                      <SearchableSelectInput
                        nameList={[
                          {
                            name: "category_ids",
                            notitle: "true",
                            inputprops: {
                              initialTittle: "select_category",
                              name: "category_ids",
                              id: "category_ids",
                              options: data || [],
                              close:
                                values["category_ids"] !== "" ? true : false,
                            },
                          },
                        ]}
                      />
                    ),
                  }}
                />
              </Form>
            )}
          </Formik>
        </Col>
      )}

      <Col md={6}>
        {CheckPermission("review.index") && <ReviewCard />}
        {CheckPermission("blog.index") && <TopSellingProducts />}
      </Col>
    </Row>
  );
};

export default ProductStockReportTable;
