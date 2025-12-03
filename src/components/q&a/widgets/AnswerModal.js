import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input, Table } from "reactstrap";
import ShowModal from "../../../elements/alerts&Modals/Modal";
import Btn from "../../../elements/buttons/Btn";
import { QuestionNAnswerAPI } from "../../../utils/axiosUtils/API";
import UseUpdate from "@/utils/hooks/UseUpdate";

const AnswerModal = ({ fullObj, modal, setModal, refetch }) => {
  const { t } = useTranslation("common");
  const [answer, setAnswer] = useState(fullObj?.answer ?? "");
  const { mutate, isLoading } = UseUpdate(
    QuestionNAnswerAPI,
    fullObj?.id,
    false,
    "Answer Modal Updated Successfully",
    (resDta) => {
      setModal(false);
      setAnswer(resDta?.data?.answer);
      refetch();
    }
  );
  const onSubmit = () => {
    mutate({
      question: fullObj?.question,
      answer: answer ? answer : fullObj?.answer,
      product_id: fullObj?.product_id,
    });
  };

  return (
    <ShowModal
      open={modal}
      setModal={setModal}
      close={true}
      title={"answers"}
      noClass={true}
    >
      <div className="qa-modal">
        <div className="border mb-4">
          <Table className="table all-package theme-table no-footer">
            <tbody>
              <tr>
                <td className="text-start fw-semibold">{t("Question")}</td>
                <td className="text-start">{fullObj?.question}</td>
              </tr>
              <tr>
                <td className="text-start fw-semibold">{t("answers")}</td>
                <td className="text-start">
                  <Input
                    type="textarea"
                    placeholder={t("enter_answers")}
                    value={answer}
                    onChange={(e) => setAnswer(e?.target?.value)}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div>
          <div className="button-box">
            <Btn
              title="close"
              className="btn btn-md fw-bold"
              onClick={() => setModal(false)}
            />
            <Btn
              title="submit"
              className="btn btn-md btn-theme fw-bold"
              loading={Number(isLoading)}
              onClick={() => onSubmit()}
            />
          </div>
        </div>
      </div>
    </ShowModal>
  );
};

export default AnswerModal;
