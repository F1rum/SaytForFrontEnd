function test2() {
    for (let i = 1; i <= 10; i ++ ){
        console.log(i);
    }
}  
function test3() {
    const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
    const practices = ['Практика 1', 'Практика 2', 'Практика 3'];
    lectures.push('Тема 0');
    practices.unshift('Практика 0');
    lectures.forEach((theme) => {
        console.log(theme)
    })
    practices.forEach((prak) => {
        console.log(prak)
    })
    let stringe = [];
    let i = 0;
    while (i < 4){
        stringe.push(lectures[i])
        i++
    }
    console.log(stringe)
    let stringe2 = [];
    let j = 0;
    while (j < 4){
        stringe2.push(practices[j])
        j++
    }
    console.log(stringe2)
} 
function test4() {
    const Lect = ['Основы языка НТМL','Углубленное изучение HTML','Основы работы с СЅЅ','Адаптивная верстка. Flexbox и Grid Layout','Bootstrap - работа с фреймворком','Основы языка JavaScript','Работа с DOM и событиями в JavaScript','Введение в GitHub и GitHub Pages'];
    let i = 0;
    let TrueLect = [];
    while (i < 8) { 
        if (Lect[i].substring(0,1) === "О") {
            TrueLect.push(Lect[i])
        }
    i++
    }
    console.log(TrueLect)
}

function ShowMessage() {
    const ConsoleMessage = document.getElementById('Mess').value;
    console.log(ConsoleMessage);
}
function changeBackgroundColor() {
    const BackGRColor = document.getElementById('BGC').value;
    document.body.style.background = BackGRColor;
}
let i = 0;
function toggleVisibility() {
    if (i === 0) {
        const video = document.getElementById('video');
        video.style.display = "none";
        i++
    }
    else {
        const video = document.getElementById('video');
        video.style.display = "";
        i--
    }
}
function logCurrentTime(){
    var data = new Date();
    var time = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
    console.log(time)
}
function resetBackgroundColor() {
    document.body.style.background = 'white';
}
function test5() {
    const queryParams = new URLSearchParams(window.location.href);
    console.log(queryParams.get('utm_term'));

}