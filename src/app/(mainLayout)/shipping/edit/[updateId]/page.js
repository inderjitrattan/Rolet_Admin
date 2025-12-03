"use client";
import Loader from "@/components/commonComponent/Loader";
import NoDataFound from "@/components/commonComponent/NoDataFound";
import FormsShippingRuleCreation from "@/components/shipping/FormsShippingRuleCreation";
import ShowModal from "@/elements/alerts&Modals/Modal";
import Btn from "@/elements/buttons/Btn";
import request from "@/utils/axiosUtils";
import { shipping, shippingRule } from "@/utils/axiosUtils/API";
import SuccessHandle from "@/utils/customFunctions/SuccessHandle";
import { ToastNotification } from "@/utils/customFunctions/ToastNotification";
import FormWrapper from "@/utils/hoc/FormWrapper";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FiPlus } from "react-icons/fi";
import {
  RiArrowDownLine,
  RiArrowDownSLine,
  RiArrowLeftLine,
} from "react-icons/ri";
import NoCategorySVG from "../../../../../../public/assets/svg/no-category.png";

const AddShippingRules = () => {
  const params = useParams();
  const router = useRouter();

  const { t } = useTranslation("common");
  const [active, setActive] = useState(false);
  const updateId = params?.updateId;
  const { data, isLoading, refetch } = useQuery(
    { queryKey: [`${shipping}/edit/${updateId}`],
      queryFn: () => request({ url: `${shipping}/${updateId}` }, router),
      enabled: false,
      refetchOnWindowFocus: false,
      select: (data) => data?.data,
    }
  );
  const { mutate: createMutate, isLoading: createMutateIsloading } =
    useMutation(
      {mutationFn: (data) => request({ url: shippingRule, data, method: "post" }, router),
        onSuccess: (resData) => {
          SuccessHandle(
            resData,
            false,
            `${shipping}/edit/${updateId}`,
            t("ShippingCreatedSuccessFully")
          );
          resData.status === 201 && setActive(false);
          refetch();
        },
        onError: () => ToastNotification("error"),
      }
    );
  const { mutate: updateMutate, isLoading: updateLoading } = useMutation(
    {mutationFn: (data) =>
      request(
        { url: shippingRule + "/" + active, method: "put", data },
        router
      ),
      onSuccess: (resData) => {
        SuccessHandle(
          resData,
          false,
          `${shipping}/edit/${updateId}`,
          t("RuleUpdatedSuccessfully")
        );
        resData.status === 200 && setActive(false);
        refetch();
      },
    }
  );
  useEffect(() => {
    refetch();
  }, []);

  if (isLoading && updateId) return <Loader />;
  if (!data) return null;
  return (
    <FormWrapper
      title={data?.country?.name}
      modal={
        <div className="d-flex">
          <Btn
            className="me-2 btn-outline btn-lg add-button back-button btn-light-bg"
            title="back"
            onClick={() => router.back()}
          >
            <RiArrowLeftLine className="me-2" />
          </Btn>
          <Btn
            className="align-items-center btn-theme add-button"
            title={"add_shipping_rule"}
            onClick={() => setActive({ create: data?.id })}
          >
            <FiPlus />
          </Btn>
        </div>
      }
    >
      <div className="dflex-wgap">
        <ShowModal
          title={"add_shipping_rule"}
          modalAttr={{ className: "modal-lg" }}
          setModal={setActive}
          open={active?.create === data?.id ? true : false}
          close={true}
        >
          <FormsShippingRuleCreation
            setActive={setActive}
            mutate={createMutate}
            shipping_id={active}
            loading={createMutateIsloading}
          />
        </ShowModal>
      </div>
      {data?.shipping_rules?.length > 0 ? (
        data.shipping_rules.map((item, index) => (
          <div className="shipping-accordion-custom" key={index}>
            <div
              className="rule-dropdown d-flex justify-content-between align-items-center"
              onClick={() => setActive((prev) => prev !== item.id && item.id)}
            >
              {item.name}
              <RiArrowDownSLine />
            </div>
            {active === item.id && (
              <div className="rule-edit-form">
                <FormsShippingRuleCreation
                  rules={item}
                  mutate={updateMutate}
                  shipping_id={data?.id}
                  setActive={setActive}
                  loading={updateLoading}
                  refetch={refetch}
                />
              </div>
            )}
          </div>
        ))
      ) : (
        <NoDataFound customImage={NoCategorySVG} />
      )}
    </FormWrapper>
  );
};

export default AddShippingRules;
