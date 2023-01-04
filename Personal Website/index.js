function sendmail(){

    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById('message').value
    };


var sentLoader=document.getElementById('sentLoader').classList;
sentLoader.remove("d-none");

const serviceID ="service_hp0oy5t";
const templateID="template_abp35e8";
emailjs.send(serviceID,templateID,params)
.then((res) => {
    sentLoader.add("d-none");
        console.log(res);
        alert("your message sent sucessfully");
})
.catch((err) => console.log(err));
}