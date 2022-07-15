import * as fs from 'fs';

const librariesFolder = './libraries/';

const libraryToPasses: {[libraryName: string]: string[]} = {};

fs.readdirSync(librariesFolder).forEach(file => {
  const data = fs.readFileSync(`${librariesFolder}${file}`, 'utf8');
  const libraries = data.split('\n');
  const pass = file.replace('.txt', '');

  libraries.forEach((libraryName: string) => {
    if (libraryName in libraryToPasses) {
      libraryToPasses[libraryName].push(pass);
    } else {
      libraryToPasses[libraryName] = [pass];
    }
  });
});

const librariesWithAllPasses = [];

for (const libraryName in libraryToPasses) {
  const passes = libraryToPasses[libraryName];
  if (passes.length === 10) {
    librariesWithAllPasses.push(libraryName);
  }
}

console.log(librariesWithAllPasses.length);
console.log(librariesWithAllPasses);
