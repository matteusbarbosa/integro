System.config({
    transpiler: 'typescript',
    map: {
        typescript : '/typescript/lib/typescript.js'
    },
    packages: {
        'angular2js': {
            format: 'register',
            defaultExtension: 'js'
        },
        'angular2': {
            defaultExtension: 'js'
        },
        'ng': {
            defaultExtension: 'ts'
        }
    }
});
System.import('/ng/boot.ts').then(null, console.error.bind(console));