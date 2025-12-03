"use client";
import { useContext, useEffect, useState } from "react";
import ProductForm from "@/components/product/ProductForm";
import { product } from "@/utils/axiosUtils/API";
import UseCreate from "@/utils/hooks/UseCreate";
import LanguageContext from "@/helper/languageContext";
import { useParams } from "next/navigation";

const UpdateProduct = () => {
  const params = useParams();
  const [resetKey, setResetKey] = useState(false);
  const [saveButton, setSaveButton] = useState(false);
  const { setFormLanguage } = useContext(LanguageContext);

  const { lang, updateId } = params;

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const { mutate, isLoading } = UseCreate(
    product,
    updateId,
    !saveButton ? product : false,
    "Product Updated Successfully",
    (resDta) => {
      if (resDta?.status == 200 || resDta?.status == 201) {
        setResetKey(true);
      }
    }
  );

  return (
    updateId && (
      <ProductForm
        saveButton={saveButton}
        setSaveButton={setSaveButton}
        values={mutate}
        mutate={mutate}
        updateId={updateId}
        loading={isLoading}
        title={"edit_product"}
        key={resetKey}
        buttonName="Update"
        language={lang}
      />
    )
  );
};

export default UpdateProduct;
