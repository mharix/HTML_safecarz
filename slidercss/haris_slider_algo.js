// JavaScript Document


 var si = 1;
setInterval(function()
{
	
	right();
	if(si == 0)
	{
		
		
	}
	else
	{
		si++;
	}
},	5000

);
	
	
///////////////////////////////// timming cghange// above ///

function changeDisplay(source)
{
	 	
	document.getElementById("display").src=source;
	document.getElementById("display").style="-webkit-animation-name:mov;-webkit-animation-duration:1s;-webkit-animation-play-state:running; ";
	
	var p1=document.getElementById("img1").src; 
var p2=document.getElementById("img2").src;
var p3=document.getElementById("img3").src;
var p4=document.getElementById("img4").src;
var p5=document.getElementById("img5").src;

if(source==p1)
{
	document.getElementById("img1").style="border:5px ridge #F00; opacity:1; ";
	
	document.getElementById("img2").style-="border:5px ridge #F00; opacity:1;";
	document.getElementById("img3").style-="border:5px ridge #F00; opacity:1;";
	document.getElementById("img4").style-="border:5px ridge #F00; opacity:1;";
	document.getElementById("img5").style-="border:5px ridge #F00; opacity:1;";
	}

else if(source==p2)
{
	document.getElementById("img2").style="border:5px ridge #F00; opacity:1;";
	
	
	document.getElementById("img1").style-="border:5px ridge #F00; opacity:1;";
	document.getElementById("img3").style-="border:5px ridge #F00; opacity:1;";
	document.getElementById("img4").style-="border:5px ridge #F00; opacity:1;";
	document.getElementById("img5").style-="border:5px ridge #F00; opacity:1;";
	}
	
else if(source==p3)
{
	document.getElementById("img3").style="border:5px ridge #F00; opacity:1;";
	
	
	document.getElementById("img2").style-="border:5px ridge #F00; opacity:1;";
	document.getElementById("img1").style-="border:5px ridge #F00; opacity:1;";
	document.getElementById("img4").style-="border:5px ridge #F00; opacity:1;";
	document.getElementById("img5").style-="border:5px ridge #F00; opacity:1;";
	}	
	
	
else if(source==p4)
{
	document.getElementById("img4").style="border:5px ridge #F00; opacity:1;";
	
	document.getElementById("img2").style-="border:5px ridge #F00; opacity:1;";
	document.getElementById("img3").style-="border:5px ridge #F00; opacity:1;";
	document.getElementById("img1").style-="border:5px ridge #F00; opacity:1;";
	document.getElementById("img5").style-="border:5px ridge #F00; opacity:1;";
	}
	
else if(source==p5)
{
	document.getElementById("img5").style="border:5px ridge #F00; opacity:1;";
	
	document.getElementById("img2").style-="border:5px ridge #F00; opacity:1;";
	document.getElementById("img3").style-="border:5px ridge #F00; opacity:1;";
	document.getElementById("img4").style-="border:5px ridge #F00; opacity:1;";
	document.getElementById("img1").style-="border:5px ridge #F00; opacity:1;";
	}
	
	
	}

function left()
{
var p1=document.getElementById("img1").src; 
var p2=document.getElementById("img2").src;
var p3=document.getElementById("img3").src;
var p4=document.getElementById("img4").src;
var p5=document.getElementById("img5").src;
	
	var name=document.getElementById("display").src;
	
	if(name==p1)
		{
		document.getElementById("display").src=p5;
			document.getElementById("img5").style="border:5px ridge #F00; opacity:1;";
			
	document.getElementById("img2").style="border:; opacity:0.5;";
	document.getElementById("img3").style="border:; opacity:0.5;";
	document.getElementById("img4").style="border:; opacity:0.5;";
	document.getElementById("img1").style="border:; opacity:0.5;";
		
		}
	else if(name==p5)
		{document.getElementById("display").src=p4;
				document.getElementById("img4").style="border:5px ridge #F00; opacity:1;";
				
	document.getElementById("img2").style="border:; opacity:0.5;";
	document.getElementById("img3").style="border:; opacity:0.5;";
	document.getElementById("img1").style="border:; opacity:0.5;";
	document.getElementById("img5").style="border:; opacity:0.5;";
				}
	else if(name==p4)
		{document.getElementById("display").src=p3;
				document.getElementById("img3").style="border:5px ridge #F00; opacity:1;";
				
				
	document.getElementById("img2").style="border:; opacity:0.5;";
	document.getElementById("img1").style="border:; opacity:0.5;";
	document.getElementById("img4").style="border:; opacity:0.5;";
	document.getElementById("img5").style="border:; opacity:0.5;";
		}
	else if(name==p3)
		{document.getElementById("display").src=p2;
				document.getElementById("img2").style="border:5px ridge #F00; opacity:1;";
				
	document.getElementById("img1").style="border:; opacity:0.5;";
	document.getElementById("img3").style="border:; opacity:0.5;";
	document.getElementById("img4").style="border:; opacity:0.5;";
	document.getElementById("img5").style="border:; opacity:0.5;";
		}
	else if(name==p2)
		{document.getElementById("display").src=p1;
				document.getElementById("img1").style="border:5px ridge #F00; opacity:1;";
				
	document.getElementById("img2").style="border:; opacity:0.5;";
	document.getElementById("img3").style="border:; opacity:0.5;";
	document.getElementById("img4").style="border:; opacity:0.5;";
	document.getElementById("img5").style="border:; opacity:0.5;";
		}
		else {}
	
	
	}
	
function right()
{
var p1=document.getElementById("img1").src; 
var p2=document.getElementById("img2").src;
var p3=document.getElementById("img3").src;
var p4=document.getElementById("img4").src;
var p5=document.getElementById("img5").src;
	
	var name=document.getElementById("display").src;
	
	if(name==p1)
		{document.getElementById("display").src=p2;
		
				document.getElementById("img2").style="border:5px ridge #F00; opacity:1;";
				
	document.getElementById("img1").style="border:; opacity:0.5;";
	document.getElementById("img3").style="border:; opacity:0.5;";
	document.getElementById("img4").style="border:; opacity:0.5;";
	document.getElementById("img5").style="border:; opacity:0.5;";
		}
	if(name==p2)
		{document.getElementById("display").src=p3;
				document.getElementById("img3").style="border:5px ridge #F00; opacity:1;";
				
		document.getElementById("img1").style="border:; opacity:0.5;";
	document.getElementById("img2").style="border:; opacity:0.5;";
	document.getElementById("img4").style="border:; opacity:0.5;";
	document.getElementById("img5").style="border:; opacity:0.5;";
		}
	if(name==p3)
		{document.getElementById("display").src=p4;
				document.getElementById("img4").style="border:5px ridge #F00; opacity:1;";
				
		document.getElementById("img1").style="border:; opacity:0.5;";
	document.getElementById("img3").style="border:; opacity:0.5;";
	document.getElementById("img2").style="border:; opacity:0.5;";
	document.getElementById("img5").style="border:; opacity:0.5;";
		}
	if(name==p4)
		{document.getElementById("display").src=p5;
				document.getElementById("img5").style="border:5px ridge #F00; opacity:1;";
				
		document.getElementById("img1").style="border:; opacity:0.5;";
	document.getElementById("img3").style="border:; opacity:0.5;";
	document.getElementById("img4").style="border:; opacity:0.5;";
	document.getElementById("img2").style="border:; opacity:0.5;";
		}
	if(name==p5)
		{document.getElementById("display").src=p1;
				document.getElementById("img1").style="border:5px ridge #F00; opacity:1;";
				
		document.getElementById("img2").style="border:; opacity:0.5;";
	document.getElementById("img3").style="border:; opacity:0.5;";
	document.getElementById("img4").style="border:; opacity:0.5;";
	document.getElementById("img5").style="border:; opacity:0.5;";
		}
}

	