"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode_1 = require("vscode");
const index_1 = require("./index");
const quick_open_component = new index_1.QuickOpenComponent();
function activate(context) {
    let openDefaultCommand = vscode_1.commands.registerCommand("extension.openInDefaultBrowser", () => {
        quick_open_component.openComponentPath();
    });
    context.subscriptions.push(openDefaultCommand);
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map