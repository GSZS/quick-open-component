/**
 * @ Author: 幸焕光
 * @ Create Time: 2020-12-30 14:30:17
 * @ Modified by: 幸焕光
 * @ Modified time: 2021-01-02 22:16:46
 * @ Description: 核心文件
 * @ URL:
 */

import { getCurrentPath, getStandBrowserName } from "./util";
import open from "open";

export class QuickOpenComponent {
  private protocalHost = "https://dev.com:1997/";

  private formateURLFunction(uri: string): string {
    const getUriResult = uri.split("views/")[1];
    return getUriResult.match(/.*(?=\.vue$)/)![0];
  }

  public openComponentPath() {
    const _path = getCurrentPath(),
      url = _path && _path.fsPath,
      browser = getStandBrowserName();
    // "/Users/gszs/Desktop/test/aa.vue";
    let newUrl = this.formateURLFunction(url as string).replace(/index$/g, "");
    newUrl = this.protocalHost + newUrl;
    console.log("newUrl", newUrl);
    open(newUrl, { app: browser }).catch((error) => console.error(error));
  }
}
