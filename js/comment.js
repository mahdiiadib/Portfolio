/// Store
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function timeNow() {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime;
}


const img_arr=["avatar-penguin.png", "unknown-user.png", "sunglass.jpg", "ninja-avatar.png", "Humpty_Dumpty.png", "avatar-icon-red-clipart.png"];

function store_comment() {
    // alert("meh");
    var rnd=Math.floor((Math.random() * 6));

    var _name = document.getElementById("name").value;
    var _email = document.getElementById("email").value;
    var _comment = document.getElementById("comment").value;

    // alert(_name + "\n" + _email + "\n" + _comment);
    var now = timeNow();
    console.log(now);
    // alert(now);
    var _avatar=img_arr[rnd];

    firebase.database().ref('User/Comment/' + now).set({
        name: _name,
        email: _email,
        comment: _comment,
        time: now,
        avatar: _avatar
    },
        function (error) {
            if (error) {
                // The write failed...
                alert("Error occured");
            }
            else {
                alert("SENT");
                window.location.reload();
            }

        });
}




/// Get
// var userNo = 0;

// function DisplayItems(_name, _email, _comment, _time) {

//     var ul = document.getElementById('commentList');
//     var header = document.createElement('h2');
//     header.className = "Red";

//     var Name = document.createElement('li');
//     var Email = document.createElement('li');
//     var Comment = document.createElement('li');
//     var Time = document.createElement('li');

//     var image = document.createElement('img');
//     image.src = "images/unknown-user.png";

//     header.innerHTML = "user-" + (++userNo);

//     Name.innerHTML = "Name: " + _name;
//     Email.innerHTML = "Email: " + _email;
//     Comment.innerHTML = "Comment: " + _comment;
//     Time.innerHTML = "Time: " + _time;

//     ul.appendChild(header);
//     ul.appendChild(image);
//     ul.appendChild(Name);
//     ul.appendChild(Email);
//     ul.appendChild(Comment);
//     ul.appendChild(Time);
// }


function DisplayItems(_name, _email, _comment, _time, _avatar) {

    var Div = document.getElementById('commentList');
    var div = document.createElement('div');
    div.style.border = "1px solid rgba(16, 46, 46, 1)";
    div.style.backgroundColor = "rgba(16, 46, 46, 0.973)";

    div.style.padding = "5px";
    div.style.display = "block";
    div.style.height = "auto";
    div.style.margin = "20px 0px";
    div.style.boxShadow = "0 0.25em 0.25em -0.125em rgba(0, 0, 0, 0.25), 0 0.5em 1.25em rgba(0, 0, 0, 0.5)";
    div.style.backgroundColor = "rgba(20, 20, 18, 0.98)";
    div.style.opacity = "90%";
    div.style.borderRadius = "1.5%";

    // var image = document.createElement('img');
    // image.src = "images/unknown-user.png";
    // image.className = "rounded-circle";
    // image.style.width = "40", image.style.height = "40";

    // Div.appendChild(image);
    // div.innerHTML = `<big style='color: goldenrod;'><b><font size='+3'>${_name}</font></b></big> <span style='color: gray;'><small>${_email}</small><br></span> <span style='color: gray;'><small>${_time}</small><br></span> <br> <p style='color: honeydew; '>${_comment}</p>`
    
    div.innerHTML = `<span style='color: gray;'><small>${_time}</small><br></span>
                    <img src="images/${_avatar}" class="rounded-circle" width="45px">
                    <big style='color: goldenrod;'><b><font size='+3'>${_name}</font></b></big>
                    <span style='color: gray;'><sub>${_email}</sub></span>
                    <br><br>
                    <p><font size='+1' style='font-family: cursive;'>${_comment}</font></p>`
                    
    Div.appendChild(div);
}


function FetchAllComments() {

    firebase.database().ref('User/Comment/').once('value').then(function (snapshot) {
        var s = "";
        snapshot.forEach(function (child) {
            var n = child.val().name;
            var o = child.val().email;
            var c = child.val().comment;
            var t = child.val().time;
            var av= child.val().avatar;

            DisplayItems(n, o, c, t, av);

        });
        // alert(s);

    }, function (error) {
        if (error) {
            alert("Error occured");
        } else {
            alert("No error");
        }
    });
}


// window.onload(FetchAllComments());

FetchAllComments();