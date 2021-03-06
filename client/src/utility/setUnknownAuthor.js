/**
 * Returns a random anonymous author name
 */
const setUnknownAuthor = () => {
    const names = {
        1 : "Anonymous",
        2 : "Nameless",
        3 : "Incognito",
        4 : "Unidentified",
        5 : "Unknown",
        6 : "Unspecified",
        7 : "Unacknowledged",
        8 : "Mystery",
        9 : "Unsung",
        10: "Innominate"
    }
    return names[Math.round(Math.random() * 10)];
}

export default setUnknownAuthor
