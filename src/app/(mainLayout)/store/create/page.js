"use client";
import StoreForm from "@/components/store/StoreForm";
import { store } from "@/utils/axiosUtils/API";
import FormWrapper from "@/utils/hoc/FormWrapper";
import UseCreate from "@/utils/hooks/UseCreate";

const StoreCreate = () => {
  const { mutate, isLoading } = UseCreate(store, false, "/store", "Store Created Successfully");
  return (
    <FormWrapper title="add_store">
      <StoreForm mutate={mutate} loading={isLoading} buttonName="save" />
    </FormWrapper>
  );
};

export default StoreCreate;
