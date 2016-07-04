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

'use strict';

import * as child_process from 'child_process';
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
/**
 * Class AlfrescoBuidTools
 * author Oscar Daniel Torres Hdez - odtorres
 */
export class AlfrescoBuidTools {
    constructor(parameters) {

    }

    public static execute(command, outMessage): void {
        if (fs.readdirSync(vscode.workspace.rootPath).indexOf("build.xml") != -1) {
            AlfrescoBuidTools.runInTerminal(command, outMessage, vscode.workspace.rootPath);
        } else {

            var folderProjects = new Array();
            fs.readdirSync(vscode.workspace.rootPath).forEach(function (childItemName) {
                folderProjects.push(childItemName);
            });
            vscode.window.showQuickPick(folderProjects)
                .then(function (val) {
                    AlfrescoBuidTools.runInTerminal(command, outMessage,path.join(vscode.workspace.rootPath,val) );
                });
        }
    }

    public static buildJar(): void {
        //"ant dist-jar"
        AlfrescoBuidTools.execute("ant dist-jar", "Build jar. Done!!!");
    }

    public static buildAmp(): void {
        //ant dist-amp       
        AlfrescoBuidTools.execute("ant dist-amp", "Build amp. Done!!!");
    }

    public static hotCopy(): void {
        //ant hotcopy-tomcat-zip        
        AlfrescoBuidTools.execute("ant hotcopy-tomcat-zip", "Hot copy. Done!!!");
    }

    public static copyAlfrescoTypings(path) {
        //copy        
        let PLUGIN_TYPE_DEFS_FILENAME = "alfrescoTypings";

        let PLUGIN_TYPE_DEFS_PATH = path.resolve(path, "..", "..", PLUGIN_TYPE_DEFS_FILENAME);

        //AlfrescoBuidTools.copyRecursiveSync(PLUGIN_TYPE_DEFS_PATH, vscode.workspace.rootPath);
    }

    public static copyRecursiveSync(src, dest, projectName) {
        var exists = fs.existsSync(src);
        var stats = exists && fs.statSync(src);
        var isDirectory = exists && stats.isDirectory();
        if (exists && isDirectory) {
            var newFolder = "";
            console.log("dest");
            console.log(dest);
            console.log("projectName");
            console.log(projectName);
            if (!projectName)
                newFolder = path.join(dest, (path.basename(src) == "alfrescoTypings") ? "typings" : path.basename(src));
            else
                newFolder = path.join(dest, projectName)

            //console.log(newFolder)
            if (!fs.existsSync(newFolder))
                fs.mkdirSync(newFolder);
            fs.readdirSync(src).forEach(function (childItemName) {
                AlfrescoBuidTools.copyRecursiveSync(path.join(src, childItemName), newFolder, false);//
            });
        } else {
            //fs.linkSync(src, dest);
            AlfrescoBuidTools.copyFile(src, path.join(dest, path.basename(src)));
        }
    }

    public static renameProjects(src, projectName) {
        var exists = fs.existsSync(src);
        var stats = exists && fs.statSync(src);
        var isDirectory = exists && stats.isDirectory();
        if (exists && isDirectory) {
            fs.readdirSync(src).forEach(function (childItemName) {

                fs.rename(
                    path.resolve(src, childItemName),
                    path.resolve(src, childItemName.replace("project", projectName)), function (e) {
                        if (e) throw e;
                    });
            });
        }
    }

    public static fillProjectFiles(src, projectName) {
        var exists = fs.existsSync(src);
        var stats = exists && fs.statSync(src);
        var isDirectory = exists && stats.isDirectory();
        if (exists && isDirectory) {
            fs.readdirSync(src).forEach(function (childItemName) {
                fs.writeFile(
                    path.resolve(src, childItemName, 'build.properties'),
                    'jar.name=' + projectName + '-1.0.jar \namp.name=' + projectName + '-1.0.amp \n' +
                    'alfresco.tomcat.home= \nalfresco.sdk.dir=',
                    function (err) {
                        if (err) throw err;
                    });
                fs.writeFile(
                    path.resolve(src, childItemName, 'file-mapping.properties'),
                    'include.default=true \n/web/themes=/themes \n/web=/',
                    function (err) {
                        if (err) throw err;
                    });
                fs.writeFile(
                    path.resolve(src, childItemName, 'module.properties'),
                    'module.id=' + projectName + ' \n' +
                    'module.version=0.1\n' +
                    'module.title=' + projectName + ' \n' +
                    'module.description=' + projectName + '\n',
                    function (err) {
                        if (err) throw err;
                    });
            });

        }
    }

    /**
     *  Helper function check if a file exists.
     */
    public static existsSync(path: string): boolean {
        try {
            // Attempt to get the file stats
            fs.statSync(path);
            return true;
        } catch (error) {
            return false;
        }
    }

    /**
     *  Helper (synchronous) function to create a directory recursively
     */
    public static makeDirectoryRecursive(dirPath: string): void {
        let parentPath = path.dirname(dirPath);
        if (!AlfrescoBuidTools.existsSync(parentPath)) {
            AlfrescoBuidTools.makeDirectoryRecursive(parentPath);
        }

        fs.mkdirSync(dirPath)
    }

    /**
     *  Helper function to asynchronously copy a file
     */
    public static copyFile(from: string, to: string) {
        fs.createReadStream(from).pipe(fs.createWriteStream(to));
    }

    public static runInTerminal(command, outMessage, pathName) {
        let process = child_process.exec(command, { cwd: pathName });
        let message: string = "";
        let error: boolean = false;
        var myOutputChannel = vscode.window.createOutputChannel('AlfrescoChannel');

        myOutputChannel.show();

        process.on("error", (err: any) => {
            if (err.code === "ENOENT") {
                myOutputChannel.append("Error: " + err);
            }
            error = true;
        });

        process.stderr.on('data', (data: string) => {
            error = true;
            if (data.trim() != "")
                myOutputChannel.append(data);
        });

        process.stdout.on('data', (data: string) => {
            if (data.trim() != "" && data.trim() != "\n")
                message += data;
        });

        process.stdout.on("close", (exitCode: number) => {
            if (!error)
               vscode.window.showInformationMessage(outMessage);
            myOutputChannel.append(message);
        });
    }
}