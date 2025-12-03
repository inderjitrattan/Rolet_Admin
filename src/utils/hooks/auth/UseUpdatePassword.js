import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import request from "../../axiosUtils";
import { updatePassword } from "../../axiosUtils/API";
import { ToastNotification } from "../../customFunctions/ToastNotification";
import {
  passwordConfirmationSchema,
  passwordSchema,
  YupObject,
} from "../../validation/ValidationSchemas";

export const UpdatePasswordSchema = YupObject({
  password: passwordSchema,
  password_confirmation: passwordConfirmationSchema,
});

const UseUpdatePassword = () => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "uo_multikart",
    "ue_multikart",
  ]);
  const router = useRouter();
  return useMutation(
    {mutationFn: (data) =>
      request(
        {
          url: updatePassword,
          method: "post",
          data: {
            ...data,
            token: cookies.uo_multikart,
            email: cookies.ue_multikart,
          },
        },
        router
      ),
      onSuccess: (resData) => {
        router.push("/auth/login");
        removeCookie("uo_multikart", { path: "/" });
        removeCookie("ue_multikart", { path: "/" });
        ToastNotification(
          "success",
          "Your password has been changed successfully. Use your new password to log in."
        );
      },
    }
  );
};
export default UseUpdatePassword;
