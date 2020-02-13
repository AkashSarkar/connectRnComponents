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

  return false;
};

export {
  validate
};
