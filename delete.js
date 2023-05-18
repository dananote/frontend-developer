var 부분함수 = function () {
    var 원본함수배열 = arguments;
    var func = 원본함수배열[0];
    if (typeof func !== 'function') {
        throw new Error('첫 번째 인자가 함수가 아닙니다.')
    }

    return function () {
        var 부분배열 = Array.prototype.slice.call(원본함수배열, 1);
        var 나머지배열 = Array.prototype.slice.call(arguments);
        return func.apply(this, 부분배열.concat(나머지배열));
    }
}

var add = function () {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result
} 

var 나머지함수 = 부분함수(add, 1, 2, 3, 4, 5);
console.log(나머지함수(6, 7, 8, 9, 10));  













var partial = function () {
    var originalPartialArgs = arguments;
    console.log(originalPartialArgs);
    var func = originalPartialArgs[0];
    console.log(func);
    if (typeof func !== 'function') {
        throw new Error('첫 번째 인자가 함수가 아닙니다.')
    }

    return function () {
        var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
        console.log(partialArgs);
        var restArgs = Array.prototype.slice.call(arguments);
        console.log(restArgs);
        return func.apply(this, partialArgs.concat(restArgs));
    }
}

var add = function () {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result
}

var addPartial = partial(add, 1, 2, 3, 4, 5);
console.log(addPartial(6, 7, 8, 9, 10));

var dog = {
    name: '강아지',
    greet: partial(function (prefix, suffix) {
        return prefix + this.name + suffix;
    }, '왈왈, ')
}

dog.greet('입니다!');
