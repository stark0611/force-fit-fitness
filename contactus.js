var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var send = document.getElementById("sendEmail");
// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
  document.getElementsByTagName("button");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// send.addEventListener("click", sendEmail())

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Function validate()

function name_validate() {
  var a = document.getElementById("name");
  if (a.value == "") {
    document.getElementById("p1").innerHTML = "Plz.. fill name";
  }
}

function validate_name() {
  document.getElementById("p1").innerHTML = "";
}

function email_validate() {
  var a = document.getElementById("email");
  if (a.value == "") {
    document.getElementById("p2").innerHTML = "Plz.. fill email_id";
  }
}

function validate_email() {
  document.getElementById("p2").innerHTML = "";
}

function phone_validate() {
  var a = document.getElementById("phone");
  if (a.value == "") {
    document.getElementById("p3").innerHTML = "Plz.. fill phone_no.";
  }
}

function validate_phone() {
  document.getElementById("p3").innerHTML = "";
}

function message_validate() {
  var a = document.getElementById("message");
  if (a.value == "") {
    document.getElementById("p4").innerHTML = "Plz.. type message";
  }
}

function validate_message() {
  document.getElementById("p4").innerHTML = "";
}

// function sendEmail(){

//  Email.send({
//     Host : "smtp.elasticmail.com",
//     Username : "mohdabbas345@gmail.com",
//     Password : "2ED53BAA23B4B292B54E1DCC803ADB5DD5B5",
//     To : 'abasansari6818@gmail.com',
//     From : document.getElementById("email"),
//     Subject : "New Contact Form Enquiry",
//     Body : "Name: " + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value + "<br> Phone No.: " + document.getElementById("phone").value + "<br> Message: " +document.getElementById("message").value
// }).then(
//   message => alert("Message sent successfully")
//   );

// }

// function sendMail(){
//    var params = {
//       name : document.getElementById("name").value,
//       email : document.getElementById("email").value,
//       phone : document.getElementById("phone").value,
//       message : document.getElementById("message").value,
//    };
//    const serviceID = "service_inj7g5b";
//    const templateID = "template_mryvi6e";
   
//    emailjs
//    .send(serviceID,templateID,params)
//    .then((res) =>{
//       document.getElementById("name").value ="";
//       document.getElementById("email").value ="";
//       document.getElementById("phone").value ="";
//       document.getElementById("message").value ="";
//       console.log(res);
//       alert("Message sent");
//    })
//    .catch((err) => console.log(err));
// }




function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    phone: document.getElementById("phone").value,
  };

  const serviceID = "service_inj7g5b";
  const templateID = "template_mryvi6e";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("phone").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}

