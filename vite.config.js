// vite.config.js
import fs from 'fs';
import path from 'path';

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, '/', file));
    }
  });

  return arrayOfFiles;
}

function getJsxFiles() {
  const allFiles = getAllFiles('src');
  return allFiles.filter((file) => file.endsWith('.js') || file.endsWith('.jsx'));
}

const jsxFiles = getJsxFiles();

const entry = {};
jsxFiles.forEach((file) => {
  const relativePath = path.relative(__dirname, file);
  const entryName = relativePath.replace(/\.(js|jsx)$/, '');
  entry[entryName] = `./${relativePath}`;
});

export default {
  build: {
    rollupOptions: {
      input: entry
    }
  }
}

  