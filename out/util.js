"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStandBrowserName = exports.getCurrentPath = void 0;
/**
 * @ Author: 幸焕光
 * @ Create Time: 2020-12-30 14:37:55
 * @ Modified by: 幸焕光
 * @ Modified time: 2020-12-30 15:45:08
 * @ Description: 存放辅助函数
 * @ URL:
 */
const vscode_1 = require("vscode");
const platform = process.platform;
const chromeItem = {
    description: "Windows, Mac, Linux",
    detail: "A fast, secure, and free web browser built for the modern web",
    label: "Google Chrome",
    standardName: platform === "win32"
        ? "chrome"
        : platform === "darwin"
            ? "google chrome"
            : "google-chrome",
    acceptName: ["chrome", "google chrome", "google-chrome", "gc", "谷歌浏览器"],
};
// 获取当前文件路径
const getCurrentPath = () => {
    return (vscode_1.window.activeTextEditor &&
        vscode_1.window.activeTextEditor.document &&
        vscode_1.window.activeTextEditor.document.uri);
};
exports.getCurrentPath = getCurrentPath;
// 获取浏览器的名称
const getStandBrowserName = (name = "") => {
    let _name = name.toLowerCase();
    const browser = [chromeItem].find((item) => {
        return item.acceptName.indexOf(_name) !== -1;
    });
    return browser ? browser.standardName : "";
};
exports.getStandBrowserName = getStandBrowserName;
//# sourceMappingURL=util.js.map