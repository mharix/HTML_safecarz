// JavaScript Document

function menu()
{
	
	if(document.getElementById("menuBar").style.visibility=="visible")
	{
		document.getElementById("menuBar").style.visibility-="visible";
		document.getElementById("menuBar").style.visibility="hidden";
		}

	else {
		document.getElementById("menuBar").style.visibility-="hidden";
		document.getElementById("menuBar").style.visibility="visible";
		}
		
		
}

/*conatct us page form submission messeg print function*/
function messeg()
{
	alert("All data  correct !");}

//insurance plans  page main  functions
function cleanpage()//clean plans wala page
{
	document.getElementById("planpara").innerHTML=null;
	}

function pager(company)
{
	if(company=="adamjee")
	{
		cleanpage();
		/*set image and company name at page top*/
		document.getElementById("planpara").innerHTML+="<center>"+"<img src=\"images\/adamjee.png\"id=\"paraimage\" \"/> "+
"<h3 id=\"brandname\">"+ "Adamjee Insurance"+"</h3>"+
"</center>";
			
			if(document.getElementById("4wheeler").checked)
			
			{	
				
				adamjee4();
				if(document.getElementById("2wheeler").checked)
				{
					
					adamjee2();
				}
			}
			
		else if(document.getElementById("2wheeler").checked)
				{
					adamjee2();
				}
		else
			{
			adamjee4();
			adamjee2();	
			}
			
	 }
	// adamjee condition end here
	
	else if(company=="askari")
	{
		cleanpage();
		/*set image and company name at page top*/
		document.getElementById("planpara").innerHTML+="<center>"+"<img src=\"images\/askari.png\"id=\"paraimage\" \"/>"+
"<h3 id=\"brandname\">"+ "Askari Insurance"+"</h3>"+
"</center>";
			
			if(document.getElementById("4wheeler").checked)
			
			{	
				
				askari4();
				if(document.getElementById("2wheeler").checked)
				{
					
					askari2();
				}
			}
			
		else if(document.getElementById("2wheeler").checked)
				{
					askari2();
				}
		else
			{
			askari4();
			askari2();	
			}
			
	 }
	// askari condition end here
		
	else if(company=="bajaj")
	{
		cleanpage();
		/*set image and company name at page top*/
		document.getElementById("planpara").innerHTML+="<center>"+"<img src=\"images\/bajaj.png\"id=\"paraimage\" \"/>"+
"<h3 id=\"brandname\">"+ "Bajaj Allianz Insurance"+"</h3>"+
"</center>";
			
			if(document.getElementById("4wheeler").checked)
			
			{	
				
				adamjee4();
				if(document.getElementById("2wheeler").checked)
				{
					
					bajaj2();
				}
			}
			
		else if(document.getElementById("2wheeler").checked)
				{
					bajaj2();
				}
		else
			{
			bajaj4();
			bajaj2();	
			}
			
	 }
	// bajaj condition end here
		
	else if(company=="jubilee")
	{
		cleanpage();
		/*set image and company name at page top*/
		document.getElementById("planpara").innerHTML+="<center>"+"<img src=\"images\/jubilee.jpg\"id=\"paraimage\"\"/> "+
"<h3 id=\"brandname\">"+ "Jubilee Insurance"+"</h3>"+
"</center>";
			
			if(document.getElementById("4wheeler").checked)
			
			{	
				
				jubilee4();
				if(document.getElementById("2wheeler").checked)
				{
					
					jubilee2();
				}
			}
			
		else if(document.getElementById("2wheeler").checked)
				{
					jubilee2();
				}
		else
			{
			jubilee4();
			jubilee2();	
			}
			
	 }
	// jubilee condition end here
		
	else if(company=="zurich")
	{
		cleanpage();
		/*set image and company name at page top*/
		document.getElementById("planpara").innerHTML+="<center>"+"<img src=\"images\/zurich.jpg\"id=\"paraimage\" \"/>"+
"<h3 id=\"brandname\">"+ "Zurich Insurance"+"</h3>"+
"</center>";
			
			if(document.getElementById("4wheeler").checked)
			
			{	
				
				zurich4();
				if(document.getElementById("2wheeler").checked)
				{
					
					zurich2();
				}
			}
			
		else if(document.getElementById("2wheeler").checked)
				{
					zurich2();
				}
		else
			{
			zurich4();
			zurich2();	
			}
			
	 }
	// zurich condition end here
	
	else{alert("something going wrong!/n no condition match.");}

}//plan page main fucntion end here
 
	
/*companies plans function which call top print 4 wheeler or two wheeler plans  for inner html */
/*all plans function s code below*/

/*adamjee plans fucntions*/
function adamjee4()
{
	var para=document.getElementById("planpara");	
	para.innerHTML+="<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+" Basic"
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "4-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "2 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "2000.00$"
+"<hr >"+
"</p>"
/*second car plan*/
+"<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+" Premium Plus"
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "4-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "5 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "8000.00$"
+"<hr >"+
"</p>";
	}

/*adamjee 2 wheeler plan */
function adamjee2()
{
	var para=document.getElementById("planpara");	
	para.innerHTML+="<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+" Biker Bold"
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "2-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "2 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "500.00$"
+"<hr >"+
"</p>"
/*second car plan*/
+"<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+" Bike Plus"
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "2-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "10 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "30000.00$"
+"<hr >"+
"</p>";
	}
	
	/*askari plan function*/
	
function askari4()
{
	var para=document.getElementById("planpara");	
	para.innerHTML+="<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+" Askari ZAMANAT"
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "4-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "1 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "4000.00$"
+"<hr >"+
"</p>"
/*second car plan*/
+"<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+" Golden Askari"
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "4-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "7 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "12000.00$"
+"<hr >"+
"</p>";
	}

/*askari 2 wheeler plan */
function askari2()
{
	var para=document.getElementById("planpara");	
	para.innerHTML+="<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+" Cycle Plus"
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "2-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "3 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "200.00$"
+"<hr >"+
"</p>"
/*second bike plan*/
+"<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+"Bike Best "
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "2-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "9 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "40000.00$"
+"<hr >"+
"</p>";
}

/*bajaj plan functions*/
function bajaj4()
{
	var para=document.getElementById("planpara");	
	para.innerHTML+="<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+" Easy Car"
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "4-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "4 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "3000.00$"
+"<hr >"+
"</p>"
/*second car plan*/
+"<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+" Car Pro"
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "4-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "6 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "6000.00$"
+"<hr >"+
"</p>";
	}

/*BAJAJ 2 wheeler plan */
function bajaj2()
{
	var para=document.getElementById("planpara");	
	para.innerHTML+="<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+" Biker silver"
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "2-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "5 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "1000.00$"
+"<hr >"+
"</p>"
/*second bike plan*/
+"<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+" Bike Top"
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "2-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "7 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "10000.00$"
+"<hr >"+
"</p>";
}

/*jubilee plan fucntions*/
function jubilee4()
{
	var para=document.getElementById("planpara");	
	para.innerHTML+="<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+" Basic Dream Car"
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "4-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "5 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "6000.00$"
+"<hr >"+
"</p>"
/*second car plan*/
+"<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+" Dream Plus"
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "4-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "13 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "17000.00$"
+"<hr >"+
"</p>";
	}

/*jubilee 2 wheeler plan */
function jubilee2()
{
	var para=document.getElementById("planpara");	
	para.innerHTML+="<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+" Biker Plus"
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "2-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "1 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "3000.00$"
+"<hr >"+
"</p>"
/*second bike plan*/
+"<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+" Bike Bold"
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "2-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "3 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "7000.00$"
+"<hr >"+
"</p>";
}

/*zurich plan functions */
function zurich4()
{
	var para=document.getElementById("planpara");	
	para.innerHTML+="<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+" Car Basic"
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "4-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "2 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "2000.00$"
+"<hr >"+
"</p>"
/*second car plan*/
+"<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+" Premium Plus"
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "4-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "5 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "8000.00$"
+"<hr >"+
"</p>";
	}

/*zurich 2 wheeler plan */
function zurich2()
{
	var para=document.getElementById("planpara");	
	para.innerHTML+="<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+" Basic Biker"
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "2-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "2 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "900.00$"
+"<hr >"+
"</p>"
/*second bike plan*/
+"<p>"+
"<hr id=\"hrtop\">"+
"<br>"+"<b>"+"PLAN NAME:"+"</b>"+" Bike Plus"
+"<hr>"+
"<br>"+"<b>"+"CATAGORY:"+"</b>"+ "2-Wheeler Plan"
+"<hr>"+
"<br>"+"<b>"+"PLAN DESCRIPTION:"+"</b>"+ "<em>"+"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."+"</em>"+
"<hr>"+
"<br>"+"<b>"+"PLAN TIME PERIOD:"+"</b>"+ "5 YEARS"
+"<hr>"+
"<br>"+"<b>"+"PLAN BASE PRICE:"+"</b>"+ "30000.00$"
+"<hr >"+
"</p>";
}
