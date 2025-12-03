import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import {
  RiArrowDownSLine,
  RiLogoutBoxLine,
  RiQuestionLine,
  RiUserLine,
} from "react-icons/ri";
import { Media } from "reactstrap";
import Avatar from "../../components/commonComponent/Avatar";
import ShowModal from "../../elements/alerts&Modals/Modal";
import Btn from "../../elements/buttons/Btn";
import AccountContext from "../../helper/accountContext";
import { LogoutAPI } from "../../utils/axiosUtils/API";
import UseCreate from "../../utils/hooks/UseCreate";
import { useTranslation } from "react-i18next";
import UseOutsideDropdown from "@/utils/hooks/customHooks/UseOutsideDropdown";

const ProfileNav = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    UseOutsideDropdown(false);
  const [profileModal, setProfileModal] = useState(false);
  const { t } = useTranslation("common");
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const { accountData, accountContextData } = useContext(AccountContext);
  const isStateData =
    (accountContextData.image &&
      Object?.keys(accountContextData.image).length > 0) ||
    accountContextData.image == "";
  const { mutate, isLoading } = UseCreate(LogoutAPI, false, false, "No", () => {
    Cookies.remove("uat_multikart");
    Cookies.remove("ue_multikart");
    Cookies.remove("account_multikart");
    localStorage.clear();
    router.push(`/auth/login`);
    setModal(false);
  });

  const handleLogout = () => {
    mutate({});
  };
  return (
    <>
      <li className="profile-nav onhover-dropdown p-0 me-0">
        <Media
          className="profile-media"
          onClick={() => {
            setIsComponentVisible((prev) => !prev),
              setProfileModal(!profileModal);
          }}
        >
          <Avatar
            data={
              isStateData
                ? accountContextData.image
                : accountData?.profile_image
            }
            name={accountData}
            customClass={"rounded-circle"}
          />
          <Media body className="user-name-hide">
            <span>
              {accountContextData.name !== ""
                ? accountContextData.name
                : accountData?.name}
            </span>
            <p className="mb-0 mt-1">
              {accountData ? accountData?.role?.name : t("Account")}
              <RiArrowDownSLine className="middle" />
            </p>
          </Media>
        </Media>
        <ul
          ref={ref}
          className={`profile-dropdown onhover-show-div ${
            profileModal ? "active" : ""
          }`}
        >
          <li>
            <Link href={"/account"}>
              <RiUserLine />
              <span>{t("my_account")}</span>
            </Link>
          </li>
          <li>
            <a onClick={() => setModal(true)}>
              <RiLogoutBoxLine />
              <span>{t("log_out")}</span>
            </a>
          </li>
        </ul>
      </li>
      <ShowModal
        open={modal}
        close={false}
        buttons={
          <>
            <Btn
              title="no"
              onClick={() => setModal(false)}
              className="btn-md btn-outline fw-bold"
            />
            <Btn
              title="yes"
              onClick={() => handleLogout()}
              className="btn-theme btn-md fw-bold"
              loading={Number(isLoading)}
            />
          </>
        }
      >
        <div className="remove-box">
          <div className="remove-icon">
            <RiQuestionLine className="icon-box wo-bg" />
          </div>
          <h5 className="modal-title">{t("confirmation")}</h5>
          <p>{t("confirmation_massage")} </p>
        </div>
      </ShowModal>
    </>
  );
};

export default ProfileNav;
