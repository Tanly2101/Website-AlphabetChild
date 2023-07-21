// const song = document.getElementById("song")
// const Play = document.querySelector(".PlayImg")
// let isPlay = true;
// function playMouse() {
//     if (isPlay) {
//         song.play();
//         isPlay = false;
//     } else {
//         song.pause();
//         isPlay = true;
//     }

// }
function playMouse(audioPath) {
    const audio = new Audio(`/Audio/${audioPath}`);
    audio.play();
}
