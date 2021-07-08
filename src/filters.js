import numeral from "numeral";

const usdFilter = function (value) {
    if (!value) {
        return '$ 0'
    }
    return numeral(value).format('($ 0.00a)')
}

const percenFilter = function (value) {
    if (!value) {
        return '0%'
    }
    return `${Number(value).toFixed(2)}%`
}

export {
    usdFilter, percenFilter
}