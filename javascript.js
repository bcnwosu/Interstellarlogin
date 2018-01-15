function login() {
	var user = document.getElementById("username");
	var pass = document.getElementById("password");
	var here = document.getElementById("here");
	
	var coruser = "blank";
	var corpass = "blank";
	
	
	
	
	if (user.value == coruser) {
	
		if (pass.value == corpass) {
		
			window.open(here.href);
		
		} else {
			window.alert("Incorrect...You Are Not Him..");
		}
			
	} else {
		window.alert("Incorrect...You Are Not Him..")
	
	
	}
		

}

function entsub() {
	
	if (window.event && window.event.keyCode == 13) {
	  
		login();
  
	} else {
    
		return true;
	
	}
}