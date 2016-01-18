 System.config({
 	transpiler : 'typescript',
 	map : {
 		typescript : '/ts/lib/typescript.js'
 		},
 		packages: {

 			angular2 : {
 				defaultExtension : 'js'
 				},
 				ng : {
 					defaultExtension : 'ts'
 				}
 			}
 			});
 System.import('/ng/boot')
 .then(null, console.error.bind(console));