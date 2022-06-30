"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const container = document.querySelector('.container');
const getItems = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch(url).then(data => data.json());
    return data;
});
getItems('https://jsonplaceholder.typicode.com/posts').then(res => {
    res.forEach(post => {
        container === null || container === void 0 ? void 0 : container.insertAdjacentHTML('beforeend', `<p>${post.title}</p>`);
    });
});
