
(function () {
    emailjs.init("_r7Ic9B7YGyhOJkMQ"); 
  })();

  function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    const serviceID = "service_x6rjzra";   

    const templateID = "template_h3s5hkl"; 

    emailjs.send(serviceID, templateID, params)
      .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("✅ Your message was sent successfully!");
      })
      .catch((err) => console.error("❌ Error:", err));
  }

  
  document.getElementById("contactform").addEventListener("submit", function (e) {
    e.preventDefault();
    sendMail();

  });
