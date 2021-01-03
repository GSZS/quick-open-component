"use strict";
/**
 * @ Author: 幸焕光
 * @ Create Time: 2020-12-30 14:30:17
 * @ Modified by: 幸焕光
 * @ Modified time: 2021-01-02 22:16:46
 * @ Description: 核心文件
 * @ URL:
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickOpenComponent = void 0;
const util_1 = require("./util");
const open_1 = __importDefault(require("open"));
class QuickOpenComponent {
    constructor() {
        this.protocalHost = "https://dev.com:1997/";
    }
    formateURLFunction(uri) {
        const getUriResult = uri.split("views/")[1];
        return getUriResult.match(/.*(?=\.vue$)/)[0];
    }
    openComponentPath() {
        const _path = util_1.getCurrentPath(), url = _path && _path.fsPath, browser = util_1.getStandBrowserName();
        // "/Users/gszs/Desktop/test/aa.vue";
        let newUrl = this.formateURLFunction(url).replace(/index$/g, "");
        newUrl = this.protocalHost + newUrl;
        console.log("newUrl", newUrl);
        open_1.default(newUrl, { app: browser }).catch((error) => console.error(error));
    }
}
exports.QuickOpenComponent = QuickOpenComponent;
//# sourceMappingURL=index.js.map