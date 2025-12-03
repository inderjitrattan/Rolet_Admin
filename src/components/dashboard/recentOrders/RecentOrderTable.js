import { Col, Row } from "reactstrap";
import { OrderAPI } from "../../../utils/axiosUtils/API";
import RecentOrders from "./RecentOrders";
import { CheckPermission } from "@/components/common/CheckPermissionList";

const RecentOrderTable = () => {
  return (
    <Row className="theme-form dashboard-form">
      {CheckPermission("order.index") && (
        <Col xs={12}>
          <RecentOrders
            url={OrderAPI}
            moduleName={"recent_orders"}
            paramsProps={{ paginate: 7 }}
            filterHeader={{
              noPagination: true,
              noSearch: true,
              noPageDrop: true,
            }}
          />
        </Col>
      )}
    </Row>
  );
};

export default RecentOrderTable;
