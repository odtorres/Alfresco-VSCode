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

    public static buildJar(): void {
        //ant dist-jar
        //console.log("path")
        //console.log(vscode.workspace.rootPath)
        let process = child_process.exec("ant dist-jar", { cwd: vscode.workspace.rootPath });
        let message: string = "";
        let error: boolean = false;

        process.on("error", (err: any) => {
            if (err.code === "ENOENT") {
                vscode.window.showErrorMessage("error");
            }
            error = true;
        });

        process.stderr.on('data', (data: string) => {
            console.log("Error:");
            console.log(data);
            error = true;
            if (data.trim() != "")
                vscode.window.showErrorMessage(data);
        });

        process.stdout.on('data', (data: string) => {
            if (data.trim() != "" && data.trim() != "\n")
                message += data;
        });

        process.stdout.on("close", (exitCode: number) => {
            console.log(exitCode)
            if (!error)
                vscode.window.showInformationMessage("Build jar. Done!!!");
            console.log(message);
        });
    }

    public static buildAmp(): void {
        //ant dist-amp        
        let process = child_process.exec("ant dist-amp", { cwd: vscode.workspace.rootPath });
        let message: string = "";
        let error: boolean = false;

        process.on("error", (err: any) => {
            if (err.code === "ENOENT") {
                vscode.window.showErrorMessage("error");
            }
            error = true;
        });

        process.stderr.on('data', (data: string) => {
            console.log("Error:");
            console.log(data);
            error = true;
            if (data.trim() != "")
                vscode.window.showErrorMessage(data);
        });

        process.stdout.on('data', (data: string) => {
            if (data.trim() != "" && data.trim() != "\n")
                message += data;
        });

        process.stdout.on("close", (exitCode: number) => {
            console.log(exitCode)
            if (!error)
                vscode.window.showInformationMessage("Build amp. Done!!!");
            console.log(message);
        });
    }

    public static hotCopy(): void {
        //ant hotcopy-tomcat-zip        
        let process = child_process.exec("ant hotcopy-tomcat-zip", { cwd: vscode.workspace.rootPath });
        let message: string = "";
        let error: boolean = false;

        process.on("error", (err: any) => {
            if (err.code === "ENOENT") {
                vscode.window.showErrorMessage("error");
            }
            error = true;
        });

        process.stderr.on('data', (data: string) => {
            console.log("Error:");
            console.log(data);
            error = true;
            if (data.trim() != "")
                vscode.window.showErrorMessage(data);
        });

        process.stdout.on('data', (data: string) => {
            if (data.trim() != "" && data.trim() != "\n")
                message += data;
        });

        process.stdout.on("close", (exitCode: number) => {
            console.log(exitCode)
            if (!error)
                vscode.window.showInformationMessage("Hot copy. Done!!!");
            console.log(message);
        });
    }
    
    public static copyAlfrescoTypings(path){
        //copy        
        let PLUGIN_TYPE_DEFS_FILENAME = "alfrescoTypings";
        
        let PLUGIN_TYPE_DEFS_PATH = path.resolve(path, "..", "..", PLUGIN_TYPE_DEFS_FILENAME);        
       
        AlfrescoBuidTools.copyRecursiveSync(PLUGIN_TYPE_DEFS_PATH, vscode.workspace.rootPath);
    }
    
    public static copyRecursiveSync(src, dest) {
        var exists = fs.existsSync(src);
        var stats = exists && fs.statSync(src);
        var isDirectory = exists && stats.isDirectory();
        if (exists && isDirectory) {
            var newFolder = path.join( dest , (path.basename(src) == "alfrescoTypings" ) ? "typings" : path.basename(src) );
            console.log(newFolder)
            if(!fs.existsSync(newFolder))
                fs.mkdirSync(newFolder);
            fs.readdirSync(src).forEach(function(childItemName) {
                AlfrescoBuidTools.copyRecursiveSync(path.join(src, childItemName),newFolder);//
            });
        } else {
            //fs.linkSync(src, dest);
            AlfrescoBuidTools.copyFile(src,path.join(dest,path.basename(src)));
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
        if(!AlfrescoBuidTools.existsSync(parentPath)) {
            AlfrescoBuidTools.makeDirectoryRecursive(parentPath);
        }

        fs.mkdirSync(dirPath)
    }

    /**
     *  Helper function to asynchronously copy a file
     */
    public static copyFile(from: string, to:string) {
        fs.createReadStream(from).pipe(fs.createWriteStream(to));
    }
}