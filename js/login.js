function searchAdmin() {
    var uname = document.getElementById("Username").value;
    var pass = document.getElementById("MyPass").value;
    // alert(uname + " " + pass);

    firebase.database().ref('Admin/' + uname).once('value').then(function (snapshot) {
        if (snapshot.exists()) {
            var pw = snapshot.val().Password;
            var un = snapshot.val().Username;
            if (un === uname && pw === pass) {
                alert("Welcome Administrator");
                // alert("name: " + un + "\npw: " + pw);
                window.location.replace("admin.html");
            }
            else {
                alert("Wrong password");
            }
        }
        else {
            alert("User does not exist");
        }
    }, function (error) {
        if (error) {
            alert("Error occured");
        }
        else {
            alert("No error");
        }
    });
}



function log_out() {
    window.location.replace("login.html");
}