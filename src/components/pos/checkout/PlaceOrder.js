import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Btn from "../../../elements/buttons/Btn";
import { OrderAPI } from "../../../utils/axiosUtils/API";
import UseCreate from "../../../utils/hooks/UseCreate";
import { useTranslation } from "react-i18next";
import Loader from "@/components/commonComponent/Loader";

const PlaceOrder = ({ values, addToCartData }) => {
  const { t } = useTranslation("common");
  const { data, mutate, isLoading } = UseCreate(
    OrderAPI,
    false,
    false,
    "Order Created Successfully",
    (resDta) => {}
  );
  const router = useRouter();
  useEffect(() => {
    if (data?.data) {
      router.push(`/order/details/${data?.data?.order_number}`);
    }
  }, [data]);
  const handleClick = () => {
    delete values["isPoint"];
    delete values["isTimeSlot"];
    delete values["isWallet"];
    mutate(values);
  };
  if (isLoading) return <Loader />;
  return (
    <>
      {addToCartData?.is_digital_only ? (
        <Btn
          className="btn btn-theme payment-btn mt-4"
          loading={Number(isLoading)}
          onClick={handleClick}
          disabled={
            values["billing_address_id"] && values["payment_method"]
              ? false
              : true
          }
        >
          {t("place_order")}
        </Btn>
      ) : (
        <Btn
          className="btn btn-theme payment-btn mt-4"
          loading={Number(isLoading)}
          onClick={handleClick}
          disabled={
            values["consumer_id"] &&
            values["billing_address_id"] &&
            values["shipping_address_id"] &&
            values["payment_method"] &&
            values["delivery_description"]
              ? false
              : true
          }
        >
          {t("place_order")}
        </Btn>
      )}
    </>
  );
};

export default PlaceOrder;
