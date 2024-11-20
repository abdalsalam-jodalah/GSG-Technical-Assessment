// first i did it using version 1 below
// but as u ask for  "constant time complexity "
// i searched throw internet and found version 2,3
// so i know version 2 befor but i dont think on it first time
// and i discoverd version 3 way for the first time

// ---> version 3
export const removeDuplicates = (arr) => {
    return Array.from(new Set(arr));
};

/** --->version 2
export const removeDuplicates = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
};
*/

/**1 ---> version 1
export const removeDuplicates = (arr) => {
    const unique = [];
    for (const item of arr) {
        if (!unique.includes(item)) {
            unique.push(item);
        }
    }
    return unique;
};
*/