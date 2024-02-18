import fs from 'fs';
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { defineConfig } from 'vite';

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

export default defineConfig({
  plugins: [reactRefresh()],
  css: {
    modules: false,
  },
// vite.config.js

export : {
  build: {
    rollupOptions: {
      input: entry,
      external: ['@testing-library/react', '@testing-library/jest-dom/extend-expect'], // Exclude @testing-library/react and @testing-library/jest-dom/extend-expect from bundle
    },
  },
  // Specify the input file here
  input: 'index.jsx',
},
}
)