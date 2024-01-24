const adminlogin = async ()=>{
    let adminCredentials ={
        adminEmail : document.getElementById("loginemail").value,
        adminPassword: document.getElementById("loginpass").value,
    }
    if(adminCredentials.adminEmail == "admin" && adminCredentials.adminPassword == "admin"){
      window.alert("Welcome Back,Admin!");
    }
     document.getElementById("loginemail").value ="";
     document.getElementById("loginpass").value = "";
     window.location.href = "./adminpanel.html";
}