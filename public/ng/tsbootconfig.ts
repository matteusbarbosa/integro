System.config({
    transpiler: 'typescript',
    map: {
        typescript : '/typescript/lib/typescript.js'
    },
    packages: {
        angular2js: {
            defaultExtension: 'js'
        },
        angular2: {
            defaultExtension: 'js'
        },
        ng: {
            defaultExtension: 'ts'
        }
    }
});
System.import('/ng/boot').then(null, console.error.bind(console));