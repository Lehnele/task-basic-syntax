export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */

    let test = str.split('')
    for (let i = test.length; i >= 0; i--) {
        switch (test[i]) {
            case 'I':
                test[i] = 1
                break
            case 'V':
                test[i] = 5
            break
            case 'X':
                test[i] = 10
                break
            case 'L':
                test[i] = 50
                break
            case 'C':
                test[i] = 100
                break
            case 'D':
                test[i] = 500
                break
            case 'M':
                test[i] = 1000
                break
        }
    }
    let i = test.length - 1;
    while ( i >= 0) {
        if(test[i - 1] < test[i] && (i != 0)) {
            result += test[i] - test[i - 1]
            i -= 2
        } else if(test[i - 1] >= test[i - 1] && (i != 0)) {
            result += test[i] + test[i - 1]
            i -= 2
        } else {
            result += test[i]
            break
        }
    }

    return result;
}
