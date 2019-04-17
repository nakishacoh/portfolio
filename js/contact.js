var submit = document.getElementById("submitContact");
submit.addEventListener("click",clickDaBtn, false);

		function clickDaBtn(e){
				e.preventDefault();
				var myRequest = new XMLHttpRequest;

				myRequest.onreadystatechange = function(){

						if(myRequest.readyState === 4){

						//console.log(myRequest.responseText);// modify or populate html elements based on response.
								var process = JSON.parse(myRequest.responseText);
						}
			};

		var firstName = document.getElementById("firstname");
		var lastName = document.getElementById("lastname");
		var email = document.getElementById("email");
		var message = document.getElementById("message");


		myRequest.open("POST", "process/processing-contact.php", true); //true means it is asynchronous // Send urls through the url
    myRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  	myRequest.send("firstname=" + firstName.value +
									 "&lastname=" + lastName.value+
									 "&email=" + email.value+
									 "&message=" + message.value);
formRemove();
sayThanks();
}

function formRemove(e) {
        var erase = document.getElementById("remove");
        erase.style.display = "none";
}

function sayThanks() {
  document.getElementById("thanks").innerHTML = "Thank You! I'll be sure to reply within 24hrs of this message sent.";
}
