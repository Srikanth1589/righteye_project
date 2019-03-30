var attempt = 0; // Variable to count number of attempts.

function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if(username != "coding@project.com"){
alert ("Wrong email address");

}

if ( username == "coding@project.com" && password == "Coding@123"){
	alert ("You have logged in successfully");

}

else{
	if(username == "coding@project.com"&& password!="Coding@123"){
	attempt ++;
	if(attempt<3){
		alert ("Email address and password does not match.");
	}
	
	else if( attempt == 3){
	alert("Email address and password doesn't match. You only have one more chance. Please contact RightEye Support at 800-301-0803.")
	
	}
	else if( attempt == 4){
	alert("Your Email address is locked and invalid. Please contact RightEye Support at 800-301-0803.")
	
}
}
}
}