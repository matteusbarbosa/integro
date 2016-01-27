var menu_main = document.getElementsByClassName("menu-item");
console.log(menu_main);
var path = window.location.href.split("/");
for(var c = 0; c < menu_main.length; c++){
 
 	var item_path = menu_main[c].getAttribute("href"); 


	 menu_main[c].className += ' active';



	console.log(item_path);
	console.log("/"+path[1]);

}