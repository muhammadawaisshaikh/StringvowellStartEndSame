function regexVar(str) {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */

    var regex = /^(a|e|i|o|u).*\1$/

    const result = regex.test(str);
    return regex;
}
