/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the element with the id of "name1":
	- Replace the content with the following string "Tay-Tay"*/
document.getElementById("name1").innerHTML = "Tay-Tay";
/*2. DJ Khaled

Find the element with the id of "position2":
	- Replace the content with the following string "Project Manager"
	- Change the background color to red
*/
document.getElementById("position2").innerHTML = "Project Manager";
document.getElementById("position2").style.background = "red";

/*3. Piko Taro

Find the element with the id of "alias3":
	- Replace the content with the following string "Concatenation"
	- Change the font size to 40
*/
document.getElementById("alias3").innerHTML = "Concatenation";
document.getElementById("alias3").style.fontSize = "40px";
/*4. Prince

Find the element with the class name of "profile": 
	- Replace the content with a verse from your favorite Prince song
	- Change the styles of the font-family to Sans Serif
*/
document.getElementsByClassName("profile")[0].innerHTML = "Purple Rain, Purple Rain, Purple Rain";
document.getElementsByClassName("profile")[0].style.fontFamily = "Sans Serif";
/*5. Bruce Lee

Find the element with the class name of "profile":
	- Replace the content with a quote from the legend himself
*/
document.getElementsByClassName("profile")[1].innerHTML = "Empty your mind, be formless, shapeless — like water. Now you put water in a cup, it becomes the cup; You put water into a bottle it becomes the bottle; You put it in a teapot it becomes the teapot. Now water can flow or it can crash.";


/*6. Samuel L Jackson

Find the element with the class name of "alias": 
	- Replace the content with your favorite character that Sammy portrayed
*/

document.getElementsByClassName("alias")[2].innerHTML = "FroZone";

/*7. Peter Griffin

Create a div element and give it an id of "name7":
	- Inside this div element, give it the contents of "Peter Griffin"
	- Append this div element to the element with id "nameParent"
*/
var peter = document.createElement("div");
peter.id = "name7";
peter.innerHTML = "Peter Griffin";
document.getElementById("nameParent").appendChild(peter);
/*8. Tim Duncan

Create a div element give it an id of "alias8":
	- Inside this div element, give it the contents of "Old Man Riverwalk"
	- Append this div element to the element with id "aliasParent"
*/
var duncanm = document.createElement("div");
duncanm.id = "alias8";
duncanm.innerHTML = "Old Man Riverwalk";
document.getElementById("aliasParent").appendChild(duncanm);
//Final Boss;
/*9. Without modifying the HTML file, create your own profile.*/
var own = document.getElementsByClassName("block3 col-sm-4");
var des = document.createElement("P"); 
des.innerHTML = "Khasper NOT Khaspher";
own[2].appendChild(des);
own[2].childNodes[0].src = "https://pbs.twimg.com/profile_images/760923351527358464/tWuCgNhW.jpg";