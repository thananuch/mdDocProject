const isEmpty = (value) => {
  return (
    !value ||
    value === null ||
    value.trim() === "" ||
    value.trim() === "0" ||
    value.trim() === "Invalid date"
  );
};

//======================== validate =========================
const validate = (jsonData) => {
  const errors = {};

  try {
    if ("date" in jsonData && isEmpty(jsonData.date)) {
      errors.date = "กรอก วว/ดด/ปป";
    }
  } catch (error) {
    console.error(error);
  }
  return errors;
};

//=================================================
const validator = (value) => {
  return validate({
    //
  });
};

//======================== VALIDATE_PROC =========================
export const VALIDATE_PROC = {
  validator: validator,
};
