import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Form } from "reactstrap";
import request from "../../../utils/axiosUtils";
import { blog } from "../../../utils/axiosUtils/API";
import { useRouter } from "next/navigation";
import { Formik } from "formik";
import TopSellingProduct from "../recentOrders/TopSellingProduct";
import { CheckPermission } from "@/components/common/CheckPermissionList";

const LatestBlogs = () => {
  const router = useRouter();
  const { data, isLoading, refetch } = useQuery(
    { queryKey: [blog],
      queryFn: () => request({ url: blog, params: { status: 1, paginate: 2 } }, router),
      refetchOnWindowFocus: false,
      enabled: false,
      select: (data) => data?.data?.data,
    }
  );
  useEffect(() => {
    refetch();
  }, []);
  return (
    <div>
      {CheckPermission("product.index") && (
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
      )}
    </div>
  );
};

export default LatestBlogs;
