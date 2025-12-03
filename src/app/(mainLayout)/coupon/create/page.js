"use client";

import CouponForm from "@/components/coupon/CouponForm";
import { coupon } from "@/utils/axiosUtils/API";
import UseCreate from "@/utils/hooks/UseCreate";

const AddNewCoupon = () => {
  const { mutate, isLoading } = UseCreate(coupon, false, "/coupon", "Coupon Created Successfully");
  return (
    <CouponForm
      mutate={mutate}
      loading={isLoading}
      title={"create_coupon"}
      buttonName="save"
    />
  );
};

export default AddNewCoupon;
