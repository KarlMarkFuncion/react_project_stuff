import fs from 'fs';
import path from 'path';

// Function to generate the directory tree
const generateTree = (dir, tree = {}) => {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      tree[file] = {};
      generateTree(filePath, tree[file]);
    } else {
      tree[file] = 'file';
    }
  });

  return tree;
};

// Specify the directory you want to target
const targetDir = path.join(process.cwd(), 'src');

// Generate the tree for the target directory
const tree = generateTree(targetDir);

// Print the tree structure
console.log(JSON.stringify(tree, null, 2));