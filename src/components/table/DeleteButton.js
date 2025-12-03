import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import ShowModal from "../../elements/alerts&Modals/Modal";
import Btn from "../../elements/buttons/Btn";
import { useTranslation } from "react-i18next";

const DeleteButton = ({ id, mutate, noImage, refetch, extraFunc }) => {
  const { t } = useTranslation("common");
  const [modal, setModal] = useState(false);
  return (
    <>
      {id && mutate && (
        <>
          {noImage ? (
            <Btn
              className="btn-outline"
              title="delete"
              onClick={() => {
                setModal(true);
              }}
            />
          ) : (
            <a>
              <RiDeleteBinLine
                className="text-danger"
                onClick={() => {
                  setModal(true);
                }}
              />
            </a>
          )}
        </>
      )}
      <ShowModal
        open={modal}
        close={false}
        setModal={setModal}
        buttons={
          <>
            <Btn
              title="no"
              color="transparent"
              onClick={() => {
                setModal(false);
              }}
              className="btn-md btn-outline fw-bold"
            />
            <Btn
              title="yes"
              color="transparent"
              onClick={() => {
                mutate(id, {
                  onSuccess: () => {
                    setModal(false);
                    refetch?.();
                    extraFunc?.();
                  },
                  onError: (err) => {
                    console.error(err);
                    setModal(false);
                  },
                });
              }}
              className="btn-theme btn-md fw-bold"
            />
          </>
        }
      >
        <div className="remove-box">
          {/* <div className="remove-icon"> */}
          <div className="icon-box-2">
            <RiDeleteBinLine />
          </div>
          {/* </div> */}
          <h2>{t("delete_item")}?</h2>
          <p>{t("deleted_message")} </p>
        </div>
      </ShowModal>
    </>
  );
};

export default DeleteButton;
