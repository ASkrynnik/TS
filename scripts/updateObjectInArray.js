"use strict";
function updateObjectInArray(initialArray, key, value, patch) {
    const arrCopy = initialArray.slice(0);
    const res = arrCopy.map(obj => {
        if (key in obj && obj[key] === value) {
            return Object.assign(Object.assign({}, obj), patch);
        }
        return obj;
    });
    return res;
}
console.log(updateObjectInArray([{ id: 2, text: 'second' }, { id: 3, text: 'third' }, { id: 4, text: 'fourth' }, { id: 5, text: 'fifth' }], 'text', 'fourth', { text: 'updated' }));
