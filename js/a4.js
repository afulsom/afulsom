function changeBackground(color){
	var body = document.getElementsByTagName('BODY')[0];
	body.style.backgroundColor = 'Green';
}

function alertTitle() {
	alert(document.title);
}


function validateEmail(email){
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function alertValidateEmail(email) {
	alert(validateEmail("afulsom@smu.edu"));
}

function loadAndPrint() {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function()
  	{
  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
    		{
    			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
    		}
	}
	xmlhttp.open("GET", "http://private-40e0f-smugui2015.apiary-mock.com/assignments/4", true);
	xmlhttp.send();
}

