"use client";
import ZoneForm from "@/components/zone/ZoneForm";
import { ZoneApi } from "@/utils/axiosUtils/API";
import FormWrapper from "@/utils/hoc/FormWrapper";
import UseCreate from "@/utils/hooks/UseCreate";
import React from "react";

const ZoneCreate = () => {
  const { mutate, isLoading } = UseCreate(ZoneApi, false, "/zone", "Zone Created Successfully");
  return (
    <FormWrapper title="add_zone">
      <ZoneForm mutate={mutate} loading={isLoading} buttonName="save" />
    </FormWrapper>
  );
};
export default ZoneCreate;
