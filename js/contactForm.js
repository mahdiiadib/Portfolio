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

function store_contact() {
  // alert("meh");

  var _name = document.getElementById("name").value;
  var _email = document.getElementById("email").value;
  var _subject = document.getElementById("subject").value;
  var _message = document.getElementById("message").value;

  // alert(_name + "\n" + _email + "\n" + _comment);
  var now=timeNow();
  console.log(now);
  // alert(now);

  firebase.database().ref('User/Contact/' + now).set({
    name: _name,
    email: _email,
    subject: _subject,
    message: _message
  },
    function (error) {
      if (error) {
        // The write failed...
        alert("Error occured");
      }
      else {
        alert("SENT");
      }

    });
}
