/**
 * Check validity of values
 * @param {Array} validation The validation rules array
 * @param {String/Number} value Actuaul input
 * @return {Boolean} If valid returns true, false otherwise
 */
const validate = (validation, value) => {
  if (validation.validationType === 'required') {
    if (!value && value !== 0) {
      // if value empty return false
      return false;
    }
    return true;
  }
  if (validation.validationType === 'type' && validation.value === 'number') {
    const regexNumber = /^\d*\.?\d*$/; // /^[0-9]*$/ without decimal
    if (!regexNumber.test(value)) {
      return false;
    }
    return true;
  }
  if (validation.validationType === 'type' && validation.value === 'mobile') {
    const regexNumber = /\+?(88)?0?1[3-9][0-9]{2}(-)?[0-9]{6}\b/; // mobile number validation
    if (!regexNumber.test(value)) {
      return false;
    }
    return true;
  }
  if (validation.validationType === 'type' && validation.value === 'onlyAlpha') {
    const regexOnlyAlpha = /^[a-zA-Z .]+$/; // /^a-z & A_Z - only
    if (!regexOnlyAlpha.test(value)) {
      return false;
    }
    return true;
  }
  if (validation.validationType === 'type' && validation.value === 'mobileNumber') {
    const regexOnlyAlpha = /\+?(88)?0?1[356789][0-9]{8}\b/; // Bangladesh mobile number only
    if (!regexOnlyAlpha.test(value)) {
      return false;
    }
    return true;
  }
  if (validation.validationType === 'minimumNumberLength') {
    const regex = `^[a-zA-Z\\d]{${validation.value},}$`; // Minimum number
    const replacedRegex = new RegExp(regex);
    if (!replacedRegex.test(value)) {
      return false;
    }
    return true;
  }

  return false;
};

export {
  validate
};
