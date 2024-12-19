const form = document.getElementById('MainForm');
form.addEventListener("submit",  function(event) {
    event.preventDefault();
    const userName = form.elements["usname"].value;
    const userMail = form.elements["email"].value;
    const userPhone = form.elements["tel"].value;
    const userDay = form.elements["date"].value;
    const userComment = form.elements["comm"].value;
    console.log("Имя: " + userName);
    console.log("E-mail: " + userMail);
    console.log("Телефон: " + userPhone);
    console.log("Дата: " + userDay);
    console.log("Комментарий: " + userComment);
})
