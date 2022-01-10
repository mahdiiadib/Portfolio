// function search() 
// {
//     var id= document.getElementById("id1").value;

// firebase.database().ref('User/'+ id).once('value').then(function(snapshot) {
//                 if (snapshot.exists()) {
//                      var name_ = snapshot.val().name;
//                      var id_ = snapshot.val().id;
//                     var mail_ = snapshot.val().email;
//                       document.getElementById("name").value = name_;
//                       document.getElementById("id").value = id_;
//                       document.getElementById("email").value =  mail_;
//                       alert("Name: "+name_+"\nID: "+id_+"\nEmail: "+mail_);
//                 }
//                 else
//                 {
//                     alert("User with " + id + " does not exist.");
//                 }
//         }, function(error) {
//             if (error) {
//                   alert("Error occured");
//             } else {
//                 alert("No error");
//             }
//           });
// }

// function delete_()
// {
//     var del_user = document.getElementById("for_del").value;
//     let userRef = firebase.database().ref('User/' + del_user);
//     userRef.remove();
//     alert("Successfully Removed");
// }
// function all_student_view()
// {

//     firebase.database().ref('User/').once('value').then(function(snapshot) {
//       var s=""; 
//       snapshot.forEach(function(child) {
//             var m= child.val().id;
//             var n= child.val().name;
//             var o= child.val().email;
//             s+=m + " "+ n+ " "+ o + "\n";
//             // alert(m + " "+ n+ " "+ o);


//         });
//         alert(s);

//         }, function(error) {
//             if (error) {
//               alert("Error occured");
//             } else {
//               alert("No error");
//             }
//           });

// }



// String.prototype.replaceAt = function (index, replacement) {
//   return this.substr(0, index) + replacement + this.substr(index + replacement.length);
// }

function timeNow() {
  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date + ' ' + time;
  return dateTime;
}


const img_arr=["avatar-penguin.png", "unknown-user.png", "sunglass.jpg", "ninja-avatar.png", "Humpty_Dumpty.png", "avatar-icon-red-clipart.png"];

function store_contact() {
  // alert("meh");

  var rnd=Math.floor((Math.random() * 6));

  var _name = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _subject = document.getElementById("subject").value;
  var _message = document.getElementById("message").value;

  // alert(_name + "\n" + _email + "\n" + _comment);
  var now=timeNow();
  console.log(now);
  var _avatar=img_arr[rnd];
  // alert(now);

  firebase.database().ref('User/Contact/' + now).set({
    name: _name,
    email: _email,
    subject: _subject,
    message: _message,
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



// var userNo = 0;
// function DisplayItems(_name, _email, _subject, _message, _time) {
//     var ul = document.getElementById('ContactList');
//     var header = document.createElement('h2');
//     header.className = "Red";

//     var Name = document.createElement('li');
//     var Email = document.createElement('li');
//     var Subject = document.createElement('li');
//     var Message = document.createElement('li');
//     var Time = document.createElement('li');

//     var image = document.createElement('img');
//     image.src = "images/unknown-user.png";

//     header.innerHTML = "user-" + (++userNo);

//     Name.innerHTML = "Name: " + _name;
//     Email.innerHTML = "Email: " + _email;
//     Subject.innerHTML = "Subject: " + _subject;
//     Message.innerHTML = "Message: " + _message;
//     Time.innerHTML = "Time: " + _time;

//     ul.appendChild(header);
//     ul.appendChild(image);
//     ul.appendChild(Time);
//     ul.appendChild(Name);
//     ul.appendChild(Email);
//     ul.appendChild(Subject);
//     ul.appendChild(Message);
// }




function DisplayItems(_name, _email, _subject, _message, _time, _avatar) {

  var Div = document.getElementById('ContactList');
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
  // div.innerHTML = `<big style='color: goldenrod;'><b><font size='+3'>${_name}</font></b></big> <br> <span style='color: gray;'><small>${_email}</small><br></span> <span style='color: gray;'><small>${_time}</small><br></span> <br> <p style='color: honeydew; '>${_comment}</p>`

  div.innerHTML = `<span style='color: gray;'><small>${_time}</small><br></span>
                  <img src="images/${_avatar}" class="rounded-circle" width="55px">
                  <big style='color: goldenrod;'><b><font size='+3'>${_name}</font></b></big>
                  <span style='color: gray;'><small>${_email}</small></span>
                  <br><br>
                  <font size='+2' style='color:whitesmoke'><b><u><small>Subject:<small></u></b> <span style='color: white'><big><b><i>${_subject}</i></b></big></span></font> <br>
                  <br>
                  <p><font size='+1' style='font-family: cursive;'>${_message}</font></p>`

  Div.appendChild(div);
}



function FetchAllContacts() {

    firebase.database().ref('User/Contact/').once('value').then(function (snapshot) {
        snapshot.forEach(function (child) {
            var n = child.val().name;
            var o = child.val().email;
            var sub = child.val().subject;
            var m = child.val().message;
            var t = child.val().time;
            var av= child.val().avatar;

            DisplayItems(n, o, sub, m, t, av);

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


FetchAllContacts();

// var rnd=Math.floor((Math.random() * 3));
// alert(rnd);