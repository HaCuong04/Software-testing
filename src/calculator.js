export function divide(a, b) { 
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Both arguments must be numbers');
    }

    if (Number.isNaN(a) || Number.isNaN(b)) {
        throw new Error('Arguments can not be NaN');
    }

    if (b === 0) {
        throw new RangeError('Division by zero is not allowed');
    }

    return a / b;
}