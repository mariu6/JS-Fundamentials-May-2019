function solve(country) {
    var language = "unknown";
    switch (country) {
        case "England":
        case "USA":
            language = "English";
            break;
        case "Spain":
        case "Argentina":
        case "Mexico":
            language = "Spanish";
            break;
        default:
        break;
    }
    console.log(language);
}
solve("aSpain");