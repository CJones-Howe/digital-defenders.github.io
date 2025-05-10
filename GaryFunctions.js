function greetUser() {
 let name = document.
 getElementById("nameInput").value
 ;
 let message = "Sorry, " + name + " . You are not authorized to enter this website.";
 document.getElementById("greeting").innerHTML = message;
}