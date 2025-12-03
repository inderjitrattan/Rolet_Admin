import React, { useEffect } from "react";
import { Card } from "reactstrap";
import SidebarCheckoutCard from "./SidebarCheckoutCard";

const CheckoutSidebar = ({
  addToCartData,
  values,
  setFieldValue,
  loading,
  mutate,
  userData,
  setStoreCoupon,
}) => {
  // Checking point and wallet for particular user
  useEffect(() => {
    userData?.filter((elem) => {
      if (elem.id == values["consumer_id"]) {
        if (elem?.point) {
          setFieldValue("isPoint", elem?.point);
        } else {
          setFieldValue("isPoint", "");
        }
        if (elem?.wallet) {
          setFieldValue("isWallet", elem?.wallet);
        } else {
          setFieldValue("isWallet", "");
        }
      }
    });
  }, [values["consumer_id"]]);

  return (
    <Card className="pos-detail-card">
      <SidebarCheckoutCard values={values} setFieldValue={setFieldValue} />
    </Card>
  );
};

export default CheckoutSidebar;
