// const { execSync } = require(`child_process`);
// const bundleFilename = `mfe-guys-forever-mfe-1.0.js`;

// var os = require(`os`);

// const srcPath = `dist\\mfe-guys-mfe-forever\\`;
// const desPath = `dist\\mfe-guys-mfe-forever\\${bundleFilename}`;

// execSync(`type ${srcPath}runtime.js > ${desPath} && echo. >> ${desPath}`);
// execSync(`type ${srcPath}polyfills.js >> ${desPath} && echo. >> ${desPath}`);
// execSync(`type ${srcPath}main.js >> ${desPath} && echo. >> ${desPath}`);

const concat = require('concat');
(async function build(){
const files = [
'./dist/mfe-guys-forever/runtime.js',
'./dist/mfe-guys-forever/polyfills.js',
'./dist/mfe-guys-forever/main.js',
];

await concat(files, './dist/mfe-guys-forever.js');
})();


