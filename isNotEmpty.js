import isEmpty from "./isEmpty";

/**
 * Not Null Check Util Function
 * @param value
 * @returns {boolean}
 */
function isNotEmpty(value) {
    return !isEmpty(value);
}

export default isNotEmpty;