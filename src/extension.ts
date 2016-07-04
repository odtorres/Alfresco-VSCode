/** 
   Alfresco VSCode by Oscar Daniel Torres Hdez <odtorres@uci.cu>
   Copyright (C) 2015 Oscar Daniel Torres Hdez.
   This program is free software: you can redistribute it and/or modify
   it under the terms of the GNU Affero General Public License as published
   by the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.

   This program is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU Affero General Public License for more details.

   You should have received a copy of the GNU Affero General Public License
   along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
//'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as child_process from 'child_process';
import * as path from 'path';
import * as fs from 'fs';
import * as vscode from 'vscode';
import {AlfrescoBuidTools} from './utils/AlfrescoBuidTools';
//import {search} from './libs/alfresco-mock';
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

        AlfrescoBuidTools.copyRecursiveSync(PLUGIN_TYPE_DEFS_PATH, vscode.workspace.rootPath,false);

    });
    let disposableRj = vscode.commands.registerCommand('extension.RunJs', () => {
        
        fs.readFile(path.join(__dirname, "..", "..", "src", "libs", "alfresco-mock.js"), 'utf8', function (err, data) {
            if (err) throw err;
            //console.log(data)
            let output = vscode.window.createOutputChannel("Alfresco Run output");
            try {
                output.clear();
                output.show();
                output.append(eval(data + vscode.window.activeTextEditor.document.getText()))
                //eval(data+vscode.window.activeTextEditor.document.getText());


            } catch (e) {

                output.show();
                output.append(e.message)
                vscode.window.showErrorMessage("There is an error in your code")
            }
        });
        console.log(path.join(__dirname, "..", "..", "src", "libs", "alfresco-mock.js"))


    });
    let disposableCp = vscode.commands.registerCommand('extension.CreateProject', () => {
        //copy
        vscode.window.showInputBox({ prompt: 'What is the name of the project?' })
            .then(function (val) {
                //vscode.window.showInformationMessage('Your input was ' + val)
                let PLUGIN_TYPE_DEFS_FILENAME = "alfrescoProject";

                let PLUGIN_TYPE_DEFS_PATH = path.resolve(__dirname, "..", "..", PLUGIN_TYPE_DEFS_FILENAME);

                AlfrescoBuidTools.copyRecursiveSync(PLUGIN_TYPE_DEFS_PATH, vscode.workspace.rootPath,val);
                setTimeout(function () {
                     AlfrescoBuidTools.renameProjects(path.resolve(vscode.workspace.rootPath, val),val);
                },500);
               setTimeout(function () {
                     AlfrescoBuidTools.fillProjectFiles(path.resolve(vscode.workspace.rootPath, val),val);
                },1000);
            });
    });

    let disposableCm = vscode.commands.registerCommand('extension.CreateModel', () => {
        //copy
        vscode.window.showInputBox({ prompt: 'What is the name of the content model?' })
            .then(function (val) {
                //vscode.window.showInformationMessage('Your input was ' + val)
                
            });
    });

    context.subscriptions.push(disposableBj);
    context.subscriptions.push(disposableBa);
    context.subscriptions.push(disposableHc);
    context.subscriptions.push(disposableIt);
    context.subscriptions.push(disposableRj);
    context.subscriptions.push(disposableCp);
    context.subscriptions.push(disposableCm);
}

// this method is called when your extension is deactivated
export function deactivate() {
}