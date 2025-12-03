import FileUploadField from "@/components/inputFields/FileUploadField";
import { getHelperText } from "@/utils/customFunctions/getHelperText";

const AuthModal = ({ values, setFieldValue }) => {

  return (
    <FileUploadField
      name="authImage"
      title="image"
      id="authImage"
      showImage={values["authImage"]}
      type="file"
      values={values}
      setFieldValue={setFieldValue}
      helpertext={getHelperText("90x90px")}
    />
  );
};

export default AuthModal;
