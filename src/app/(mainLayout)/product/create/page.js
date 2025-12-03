"use client";
import ProductForm from "@/components/product/ProductForm";
import { product } from "@/utils/axiosUtils/API";
import UseCreate from "@/utils/hooks/UseCreate";
import { useState } from "react";

const ProductCreate = () => {
  const [resetKey, setResetKey] = useState(false);
  const { mutate, isLoading } = UseCreate(
    product,
    false,
    product,
    "Product Created Successfully",
    (resDta) => {
      if (resDta?.status == 200 || resDta?.status == 201) {
        setResetKey(true);
      }
    }
  );
  return (
    <ProductForm
      values={resetKey}
      mutate={mutate}
      loading={isLoading}
      title={"add_product"}
      key={resetKey}
      buttonName="save"
    />
  );
};

export default ProductCreate;
