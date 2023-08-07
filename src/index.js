
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === [] || matrix === undefined) return [];
    let result = [];
    matrix.forEach((item, index) => {
        if (index === 0 || index % 2 === 0) {
            result = [...result, ...item];
        } else {
            result = [...result, ...item.reverse()];
        }
    });
    return result;
};
