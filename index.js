const adminlogin = async ()=>{
    let adminCredentials ={
        adminEmail : document.getElementById("loginemail").value,
        adminPassword: document.getElementById("loginpass").value,
    }
    if(adminCredentials.adminEmail == ""){
        window.alert("Please enter your email!")
        return;
    }else if(adminCredentials.adminPassword == ""){
        window.alert("Please enter your password!")
        return;
    }
    let res = await fetch("http://movieventurewebapp.eu-north-1.elasticbeanstalk.com/adminlogin", {
        method: "POST",
        body: JSON.stringify(adminCredentials),
        headers: {
          "Content-Type": "application/json",
        },
      });
      let data = await res.text();
      if(data == "Admin Successfully Logged In"){
        window.alert("Welcome to Movie Venture!")
        window.location.href = "./adminpanel.html"
      }else{
        window.alert("Email or Password is Incorrect!")
      }
     document.getElementById("loginemail").value ="";
     document.getElementById("loginpass").value = "";
}