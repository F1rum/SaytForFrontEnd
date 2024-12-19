function test1() {
    const H1Test = document.getElementById('H1Test');
    H1Test.textContent = "Добро пожаловатьна наш сайт!";
}
function test2() {
    const H2Test = document.getElementById('H2Test');
    H2Test.style.color = 'red';
}
function test3() {
    const parTest = document.getElementsByClassName('Par');
    parTest[0].textContent = "Это новый текст параграфа.";
}
function test4() {
    const video = document.getElementById('video');
    video.style.display = "none";
}
