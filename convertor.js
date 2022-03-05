import _ from 'lodash';
import isNaN from "./isNaN";
import isNotEmpty from "./isNotEmpty";
/**
 * 쿼리로부터 들어오는 데이터가 undefined 이거나
 * 문자열 들어올 수 있습니다. 이때 유효성을 체크합니다.
 * @param {any} value 전환될 값
 * @param {Number} initial_value 숫자가 아닌 데이터경우 초기화될 값
 * @returns {number|*} Number 타입으로 변환된 값
 */
function toNumber (value, initial_value) {
    const parsed_number = Number(value);
    if (Number.isNaN(parsed_number)) {
        return initial_value;
    }
    return parsed_number;
}

/**
 * 음수를 양수로 변환합니다.
 *
 * @param {any} value
 * @param {Number} initial_value
 * @returns {number|*}
 */
function toPositiveNumber (value, initial_value) {
    let number = toNumber(value, initial_value);
    if (number < 1) {
        number = number * -1;
    }
    return number;
}

/**
 * 객체를 Deep copy 합니다.
 * value 를 새로운 객체로 생성합니다.
 * @param value
 * @returns {{}|any}
 */
function copyTo(value) {
    if (!value) {
        return {};
    }
    return _.cloneDeep(value);
}

/**
 * 유효한 숫자를 추출합니다.
 * 아래 경우 모두 유효한 숫자로 구성된 수 배열로 필터링합니다.
 * 1,,2
 * 1,2,
 * 0,
 * 1,undefined,2
 * 1,null,2
 * '...'
 * 'asd'
 * 1,2,undefined
 * @param values
 * @returns {*}
 */
function toValidNumberArray (values) {
    return values
        .split(',')
        .map(value => !isNaN(value) && Number(value))
        .filter(value => isNotEmpty(value) && value > 0);
}

module.exports = {
    toNumber,
    toPositiveNumber,
    copyTo,
    toValidNumberArray
}