function sendMail() {
    let parms = {
        imal : document.getElementById("imal").value,
        cod : document.getElementById("cod").value,
    }
    // استدعاء خدمة EmailJS
    emailjs.send("service_cmupl4d", "template_3t3orgk", parms)
}
