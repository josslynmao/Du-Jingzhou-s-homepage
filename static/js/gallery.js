function showPic(whichpic)
{
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var text = whichpic.getAttribute("title");
	var description = document.getElementById("description");
	description.childNodes[0].nodeValue = text;
}