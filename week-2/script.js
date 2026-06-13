const form= document.getElementById("Contact form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    const name=document.getElementById("Name").value;
    const name=document.getElementById("email").value;
    const name=document.getElementById("message").value;
    if(name === ""|| email ===""|| message ===""){
        alert("please fill all the fields!");
    }
    else{
        alert("message sent successfully");
    }


});