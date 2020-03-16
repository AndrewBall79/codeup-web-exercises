'use strict';
// // once the promise is resolved or rejected, take additional action
// let goodKid = false;
//
// const getCake = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (goodKid) {
//             resolve("CAAAAAAKE!!");
//         } else {
//             reject("NO CAAAAKE!!! :((((");
//         }
//     }, 2000);
// });
//
//
// // once the promise is resolved or rejected, take additional action
//
// getCake.then((data) => {
//     console.log(data);
// });
//
// getCake.catch((error) => {
//     console.log(error);
//     console.log(error);
// }).then(() => {
//     console.log("Additional then");
//     return Promise.reject();
// }).catch(() => {
//     console.log("Final catch");
// });


// ============ Using Promises with jQuery version 3+
// 50  promises/promises-song.html
// @@ -21,7 +21,7 @@ <h3 id="song"></h3>

// A Song from Callback Hell...


//
// function singLyrics(lyrics, pitch, callback) {
//     var lyric = new SpeechSynthesisUtterance(lyrics);
//     lyric.pitch = pitch;
// @@ -59,30 +59,30 @@ <h3 id="song"></h3>


// A Simpler Song to Read (I promise)... but still sung terribly...
//
// function singLyrics(lyrics, pitch) {
//     return new Promise((res) => {
//         var lyric = new SpeechSynthesisUtterance(lyrics);
//         lyric.pitch = pitch;
//         lyric.rate = .7;
//         speechSynthesis.speak(lyric);
//         song.append(lyrics);
//         setTimeout(res, 1500);
//     });
// }
//
// const singPromises = () => {
//     return singLyrics('All a-', .5)
//         .then(() => singLyrics('round the', 1))
//         .then(() => singLyrics(' mulberry', 1.5))
//         .then(() => singLyrics(' bush', 1))
//         .then(() => singLyrics(' the monkey', .5))
//         .then(() => singLyrics(' chased', 1))
//         .then(() => singLyrics(' the wea-', 1.5))
//         .then(() => singLyrics(' sel', 1));
// };
//
// document.getElementById('sing-btn').addEventListener('click', singPromises);

function singLyrics(lyrics, pitch) {
    return new Promise((res) => {
        var lyric = new SpeechSynthesisUtterance(lyrics);
        lyric.pitch = pitch;
        lyric.rate = .7;
        speechSynthesis.speak(lyric);
        song.append(lyrics);
        setTimeout(res, 1500);
    });
}

const singPromises = () => {
    return singLyrics('All a-', .5)
        .then(() => singLyrics('round the', 1))
        .then(() => singLyrics(' mulberry', 1.5))
        .then(() => singLyrics(' bush', 1))
        .then(() => singLyrics(' the monkey', .5))
        .then(() => singLyrics(' chased', 1))
        .then(() => singLyrics(' the wee-', 1.5))
        .then(() => singLyrics(' sel', 1));
};

document.getElementById('sing-btn').addEventListener('click', singPromises);
