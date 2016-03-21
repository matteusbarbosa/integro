System.register(['/angular2/platform/browser', './components/warning/Component', './components/media/Component', './components/examination/Component', './components/reinforcement/Component', './components/classoptional/Component'], function(exports_1) {
    var browser_1, Component_1, Component_2, Component_3, Component_4, Component_5;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (Component_1_1) {
                Component_1 = Component_1_1;
            },
            function (Component_2_1) {
                Component_2 = Component_2_1;
            },
            function (Component_3_1) {
                Component_3 = Component_3_1;
            },
            function (Component_4_1) {
                Component_4 = Component_4_1;
            },
            function (Component_5_1) {
                Component_5 = Component_5_1;
            }],
        execute: function() {
            browser_1.bootstrap(Component_1.WarningComponent);
            browser_1.bootstrap(Component_2.MediaComponent);
            browser_1.bootstrap(Component_3.ExaminationComponent);
            browser_1.bootstrap(Component_4.ReinforcementComponent);
            browser_1.bootstrap(Component_5.ClassOptionalComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map