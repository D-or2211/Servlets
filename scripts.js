function validation(){
        var un=document.getElementById('username').value;
        var ps=document.getElementById('password').value;
        if (un == "Tepache" && ps == "123"){
            window.alert("Login Successful");
            window.location="./inicio.html"
        }
        else{
            window.alert("Login Failed");
    }
}