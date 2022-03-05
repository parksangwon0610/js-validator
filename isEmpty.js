/**
 * Null Check Util Function
 * @param value
 * @returns {boolean}
 */
function isEmpty(value) {
    if (value === null) return true;
    else if (value === 'null') return true;
    else if (typeof value === 'undefined') return true;
    else if (value === 'undefined') return true;

    else if (typeof value === 'object'){
        if (JSON.stringify(value) === '{}' || JSON.stringify(value) === '[]') {
            return true;
        } else if (!value) {
            return true;
        }
    }

    else if (typeof(value) === 'string' && (value.trim() === '' || value.trim() === "''")){
        return true;
    }

    else if (Array.isArray(value) && value.length < 1) {
        return true;
    }

    else if (typeof value === 'number') {
        if (isNaN(value)) {
            return true;
        }
    }

    return false;
}

export default isEmpty;