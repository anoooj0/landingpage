const form = document.querySelector('form')
const fullName = document.getElementById('name')
const email = document.getElementById('email')
const message = document.getElementById('message')


function sendEmail() {
    // const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "anujs1027@gmail.com",
        Password : "AD0090E63FE9D3328B9DCCF27110EFFE11EB",
        To : 'anujs1027@gmail.com',
        From : "anujs1027@gmail.com",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    sendEmail();
})