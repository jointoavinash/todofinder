/**
 * @description Read files recursivily from a folder to look for a word 'TODO'.
 * @param {String} dir Absolute path to directory
 * @param {String} filter word to search in all files.
 * @returns {Object[]} List of object, each object represent a file
 */

//required Module
const path = require('path');
const fs   = require('fs');
const ext  = '.js';

const searchFilesInDir = (dir = '.', filter = 'TODO') => {
    if (!fs.existsSync(dir)) {
        console.log(`Required directory: ${dir} does not exist`);
        return;
    }

    const files = getFilesInDir(dir);

    files.forEach(file => {
        const fileContent = fs.readFileSync(file);
        // We want full words, so we use full word boundary while ignoring the case in regex.
        const regex = new RegExp(`\\b${filter}\\b`,'i');
        if (regex.test(fileContent)) {
            console.log(file);
        }
    });
}

// Recursive function to find 'TODO' in each file with the desired extention, even if its deeply nested in subfolders.
const getFilesInDir = (dir) =>{
    if (!fs.existsSync(dir)) {
        console.log(`Specified directory: ${dir} does not exist`);
        return;
    }

    let files = [];
    fs.readdirSync(dir).forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.lstatSync(filePath);

        //If it's a directory, check for file recursively. 
        //If we it's a file, add it to the array of files.
        if (stat.isDirectory()) {
            const nestedFiles = getFilesInDir(filePath);
            files = files.concat(nestedFiles);
        } else {
            if (path.extname(file) === ext) {
                files.push(filePath);
            }
        }
    });

    return files;
}
//Calling of function by passing root file.
searchFilesInDir('../root');