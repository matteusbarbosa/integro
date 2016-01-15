System.config({

	transpiler: 'traceur',

	map: {
		traceur: '/traceur/traceur'
	}
});

System.import('/ng/boot.ts').then(null, console.error.bind(console));