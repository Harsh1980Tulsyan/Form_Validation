 function validateform()
{ 

	var uname=document.myform.username.value;
	var pwd=document.myform.pass.value;
	var npwd=document.myform.pass1.value;
	var x=document.myform.mailid.value;
	var atps=x.indexOf('@');
	var dotps=x.lastIndexOf('.');
	if(uname.length==0)
	{
		document.getElementById("demo").innerHTML="<img src='right-and-wrong-check-marks_30-2704 (2).jpg'style='width:20px;margin : 0px 10px;' >Length can't be Empty";
		return false;
	}
	else
	{
		document.getElementById("demo").innerHTML="<img src='right-and-wrong-check-marks_30-2704.jpg'style='width:20px;margin : 0px 10px;' >";
	}
	 if(pwd.length <6)
	{
		document.getElementById("demo1").innerHTML="<img src='right-and-wrong-check-marks_30-2704 (2).jpg'style='width:20px;margin : 0px 10px;' >Password must be of at least 6 character";
		return false;
	}
	else
		document.getElementById("demo1").innerHTML="<img src='right-and-wrong-check-marks_30-2704.jpg'style='width:20px;margin : 0px 10px;' >";

   if(npwd.length <6)
	{
		document.getElementById("demo2").innerHTML="<img src='right-and-wrong-check-marks_30-2704 (2).jpg'style='width:20px;margin : 0px 10px;' >Password must be of at least 6 character";
		return false;
	}
	else
		document.getElementById("demo2").innerHTML="<img src='right-and-wrong-check-marks_30-2704.jpg'style='width:20px;margin : 0px 10px;' >";

	 if(pwd != npwd)
	{
		document.getElementById("demo2").innerHTML="<img src='right-and-wrong-check-marks_30-2704 (2).jpg'style='width:20px;margin : 0px 10px;' >Password must be same";
		return false;
	}
	else
	   document.getElementById("demo2").innerHTML="<img src='right-and-wrong-check-marks_30-2704.jpg'style='width:20px;margin : 0px 10px;' >";
   
	 if(atps < 1 || dotps < (atps + 2) || (dotps + 2) >= x.length)
	 {
		 document.getElementById("demo3").innerHTML="<img src='right-and-wrong-check-marks_30-2704 (2).jpg'style='width:20px;margin : 0px 10px;' >Enter valid Email id";
		return false;
		 
	 }		 
	 else
		 document.getElementById("demo").innerHTML="<img src='right-and-wrong-check-marks_30-2704.jpg'style='width:20px;margin : 0px 10px;' >";

	


    /*
	var result=true;
	var i=document.getElementsByTagName("input");
	if(i[0].value.length==0)
	{
		alert("Name can't be empty");
		result=false;
	} 
	else if(i[1].value.length <6)
	{
		alert("Password must be of at least 6 character");
		result=false;
	}
	return result;
	*/
	
}

	
	