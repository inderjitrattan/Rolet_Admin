"use client";

import ThemeOptionForm from "@/components/themeOption";
import { ThemeOptions } from "@/utils/axiosUtils/API";
import UseCreate from "@/utils/hooks/UseCreate";

const ThemeOption = () => {
  const { mutate, isLoading } = UseCreate(ThemeOptions, false, "/theme_option", "Theme Option Updated Successfully");
  return (
    <ThemeOptionForm
      mutate={mutate}
      loading={isLoading}
      title={"ThemeOption"}
    />
  );
};

export default ThemeOption;
