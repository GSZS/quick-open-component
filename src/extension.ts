import { ExtensionContext, commands } from "vscode";
import { QuickOpenComponent } from "./index";

const quick_open_component = new QuickOpenComponent();

export function activate(context: ExtensionContext) {
  let openDefaultCommand = commands.registerCommand(
    "extension.openInDefaultBrowser",
    () => {
      quick_open_component.openComponentPath();
    }
  );

  context.subscriptions.push(openDefaultCommand);
}

export function deactivate() {}
