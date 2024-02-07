document.getElementById("submit").addEventListener("click", (e)=>{
    e.preventDefault();
    let uName = document.getElementById("uname").value.trim();
    let uMail = document.getElementById("uemail").value.trim();
    let uSubject = document.getElementById("usubject").value.trim();
    let uMessage = document.getElementById("con_message").value.trim();

    // Regular expression for email validation
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(uName !== '' && uMail !== '' && uSubject !== '' && uMessage !== ''){
        if(emailRegex.test(uMail)){
            let messages = localStorage.getItem("messages") ? JSON.parse(localStorage.getItem("messages")) : [];
            messages.push({Name: uName, Email: uMail, Subject: uSubject, Message: uMessage});
            localStorage.setItem("messages", JSON.stringify(messages));
        } else {
            Swal.fire("Please enter a valid email address");
        }
    } else {
        Swal.fire("Please enter valid data");
    }
});