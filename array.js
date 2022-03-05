import isEmpty from "./isEmpty";

/**
 * 대상이 되는 배열과 입력되는 배열이 동일한 요소를 가지고있는지 확인합니다.
 * ex > if (a_array.equals(b_array)) { ... }
 * @param array
 * @returns {boolean|*}
 */
function equals(array) {
    if (this.length !== array.length) {
        return false;
    }
    const method_asc = function (a, b) {
        return a - b;
    }
    const sorted_this = this.sort(method_asc);
    const sorted_arr = array.sort(method_asc);
    return sorted_this.every((v, i) => v === sorted_arr[i]);
}

/**
 * 입력된 배열이 대상이되는 배열에 모두 포함되는지 여부를 확인합니다.
 * ex> if (a_array.includesAll(b_array)) { ... }
 * @param array
 * @returns {*}
 */
function includesAll (array) {
    return array.every((v) => this.includes(v));
}

/**
 * 대상이 되는 배열의 각 요소를 확인하여 유효한 값으로 필터링합니다.
 * 제외가 되는 대상은 isEmpty 함수를 기준으로 합니다.
 * @returns {*}
 */
function filterEmptyElements () {
    return this.map(element => {
        if (!isEmpty(element)) {
            return element;
        }
    }).filter(element => {
        return element && element;
    });
}

/**
 * 중복된 요소를 제거하고 유니크한 요소들의 배열로 변환합니다.
 * @returns {*}
 */
function filterDuplicateElements () {
    return this.filter((element, index, array) => {
        return array.indexOf(element) === index;
    })
}

/**
 * 내림차순 정렬, 소수개일때만 사용하는 것을 추천합니다.
 * @param {String} property_name
 * @returns {*}
 */
function sortingDescElementsBy (property_name) {
    return this.sort((current_element, next_element) => {
        return next_element[property_name] - current_element[property_name];
    })
}

Object.defineProperty(Array.prototype, 'equals', {
    writeable: false,
    enumerable: false,
    value: equals,
})
Object.defineProperty(Array.prototype, 'includesAll', {
    writeable: false,
    enumerable: false,
    value: includesAll,
})
Object.defineProperty(Array.prototype, 'filterEmptyElements', {
    writeable: false,
    enumerable: false,
    value: filterEmptyElements,
})
Object.defineProperty(Array.prototype, 'filterDuplicateElements', {
    writeable: false,
    enumerable: false,
    value: filterDuplicateElements,
})
Object.defineProperty(Array.prototype, 'sortingDescElementsBy', {
    writeable: false,
    enumerable: false,
    value: sortingDescElementsBy,
})