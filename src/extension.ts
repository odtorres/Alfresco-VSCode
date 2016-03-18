'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as child_process from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import * as vscode from 'vscode';
import {AlfrescoBuidTools} from './utils/AlfrescoBuidTools';
//import {ncp} from '../node_modules/ncp/bin/ncp';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('alfresco-vscode extension is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposableBj = vscode.commands.registerCommand('extension.BuildJar', () => {
        AlfrescoBuidTools.buildJar();
    });
    let disposableBa = vscode.commands.registerCommand('extension.BuildAmp', () => {
        AlfrescoBuidTools.buildAmp();
    });
    let disposableHc = vscode.commands.registerCommand('extension.HotCopy', () => {
        AlfrescoBuidTools.hotCopy();
    });
    let disposableIt = vscode.commands.registerCommand('extension.ImportTypings', () => {
        //copy        
        let PLUGIN_TYPE_DEFS_FILENAME = "alfrescoTypings";
        
        let PLUGIN_TYPE_DEFS_PATH = path.resolve(__dirname, "..", "..", PLUGIN_TYPE_DEFS_FILENAME);        
        
        AlfrescoBuidTools.copyRecursiveSync(PLUGIN_TYPE_DEFS_PATH, vscode.workspace.rootPath);
        
    });

    context.subscriptions.push(disposableBj);
    context.subscriptions.push(disposableBa);
    context.subscriptions.push(disposableHc);
    context.subscriptions.push(disposableIt);
}

// this method is called when your extension is deactivated
export function deactivate() {
}