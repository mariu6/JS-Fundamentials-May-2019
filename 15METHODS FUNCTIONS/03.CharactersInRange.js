function chars(firstChar, secondChar) {
    let firstCode = firstChar.charCodeAt(0);  // 0 zashtoto obiknoweno raboti s masiwi, a tuk e char
    let secondCode = secondChar.charCodeAt(0);

    let start = Math.min(firstCode, secondCode);
    let end = Math.max(firstCode, secondCode);
    let characters = [];
    for (let i = start + 1; i < end; i++) {
        let char = String.fromCharCode(i);
        characters.push(char);
    }
    console.log(characters.join(' '));
}
chars('a', 'd');