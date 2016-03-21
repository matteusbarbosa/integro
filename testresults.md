# TOC
   - [utils::removeaccents](#utilsremoveaccents)
<a name=""></a>
 
<a name="utilsremoveaccents"></a>
# utils::removeaccents
remove accents.

```js
var utils = require('../custom_modules/utils');
var strings = {
	1 : "ÁéûeB",
	2 : "Çã"
};
var expected = {
	1: "aeueb",
	2: "ça"
};
for(var c = 0; c < strings.length; c++){
	test.assert.equal(utils.removeaccents(strings[c]), "Aeue");
}
```

