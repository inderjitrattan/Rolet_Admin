import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import request from "../../axiosUtils";
import {
  emailSchema,
  passwordSchema,
  YupObject,
  recaptchaSchema,
} from "../../validation/ValidationSchemas";
import { login } from "../../axiosUtils/API";

export const LogInSchema = YupObject({
  email: emailSchema,
  password: passwordSchema,
  recaptcha: recaptchaSchema,
});

const LoginHandle = (responseData, router, setShowBoxMessage, setCookie) => {
  if (responseData.status === 200) {
    setCookie("uat_multikart", responseData.data?.access_token, {
      path: "/",
      expires: new Date(Date.now() + 24 * 60 * 6000),
    });
    const ISSERVER = typeof window === "undefined";
    if (typeof window !== "undefined") {
      setCookie("account_multikart", JSON.stringify(responseData.data));
      localStorage.setItem(
        "account_multikart",
        JSON.stringify(responseData.data)
      );
    }
    router.push("/dashboard");
    window.location.href = "/dashboard";
  } else {
    setShowBoxMessage(responseData.response.data.message);
  }
};

const UseHandleLogin = (setShowBoxMessage) => {
  const [cookies, setCookie] = useCookies([
    "ue_multikart",
    "uat_multikart",
    "account_multikart",
  ]);
  const router = useRouter();
  return useMutation(
    {mutationFn: (data) =>
      request(
        {
          url: login,
          method: "post",
          data,
        },
        router
      ),
      onSuccess: (responseData) =>
        LoginHandle(responseData, router, setShowBoxMessage, setCookie),
    }
  );
};

export default UseHandleLogin;
