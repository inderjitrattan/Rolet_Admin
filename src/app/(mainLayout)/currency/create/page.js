"use client";
import CurrencyForm from "@/components/currency/CurrencyForm";
import { currency } from "@/utils/axiosUtils/API";
import FormWrapper from "@/utils/hoc/FormWrapper";
import UseCreate from "@/utils/hooks/UseCreate";

const CreateCurrency = () => {
  const { mutate, isLoading } = UseCreate(currency, false, "/currency", "Currency Created Successfully");
  return (
    <FormWrapper title="add_currency">
      <CurrencyForm mutate={mutate} loading={isLoading} buttonName="save" />
    </FormWrapper>
  );
};

export default CreateCurrency;
