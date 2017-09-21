 // content.js


alert("You were doing so well, being so studious! Don't do this!")
alert("Please, I know you don't want to get off topic.")

var a = prompt("Are you positive you need a study break right now? I think you are just being lazy and trying to procrastinate.")
if (a.toLowerCase() == "yes")
{
	var b = prompt("Wow, so you are pretty serious about this, right?")
	if (b.toLowerCase() == "yes")
	{
		var c = prompt("You're being ignorant because you have real work to do, are you sure this is worth your time?")
		if (c.toLowerCase() == "yes")
		{

			var d = prompt("I'll try one last time, do you really NEED a study break right now?")
			if (d.toLowerCase() == "yes")
			{

			}
			else
			{
				alert("That's right, back to work.")
				exit()
			}

		}
		else
		{
			alert("Do your work, ok?")
			exit()
		}
	}
	else
	{
		alert("I am always right, now get back to work.")
		exit()
	}

}
else
{
	alert("I thought so...now get back to work.")
	exit()
}


var time = prompt("This is a mistake, but fine...it's your life, how many minutes do you want to take a study break for?")
var min  = time * 60000;
setTimeout(myFunction, min);


function myFunction() {
  open("http://data.whicdn.com/images/116062425/original.png", "_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=4000,height=4000")



/*var sign = prompt("Are you sure this is worth your time?")
if (sign.toLowerCase() == "yes") {
  open("http://www.pmslweb.com/the-blog/wp-content/uploads/2015/02/27-stop-being-a-dumbass.jpg", "_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=4000,height=4000")
}

open("http://s2.quickmeme.com/img/17/17f9852034eb0873259cd6eee79318fe62cf1262a9292e03e522c41c2e48fe6d.jpg", "_blank","toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=4000,height=4000")
*/
}

