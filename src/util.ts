/**
 * @ Author: 幸焕光
 * @ Create Time: 2020-12-30 14:37:55
 * @ Modified by: 幸焕光
 * @ Modified time: 2020-12-30 15:45:08
 * @ Description: 存放辅助函数
 * @ URL:
 */
import { window, QuickPickItem } from "vscode";

interface PickItem extends QuickPickItem {
  [propName: string]: any;
}

const platform = process.platform;

const chromeItem: PickItem = {
  description: "Windows, Mac, Linux",
  detail: "A fast, secure, and free web browser built for the modern web",
  label: "Google Chrome",
  standardName:
    platform === "win32"
      ? "chrome"
      : platform === "darwin"
      ? "google chrome"
      : "google-chrome",
  acceptName: ["chrome", "google chrome", "google-chrome", "gc", "谷歌浏览器"],
};

// 获取当前文件路径
export const getCurrentPath = () => {
  return (
    window.activeTextEditor &&
    window.activeTextEditor.document &&
    window.activeTextEditor.document.uri
  );
};

// 获取浏览器的名称
export const getStandBrowserName = (name: string = ""): string => {
  let _name = name.toLowerCase();
  const browser = [chromeItem].find((item) => {
    return item.acceptName.indexOf(_name) !== -1;
  });

  return browser ? browser.standardName : "";
};
