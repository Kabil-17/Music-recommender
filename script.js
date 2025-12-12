const musicLib = {
    calm: ["music/calm/song1.mp3", "music/calm/song2.mp3", "music/calm/song3.mp3", "music/calm/song4.mp3", "music/calm/song5.mp3"],
    energy: ["music/energy/song1.mp3", "music/energy/song2.mp3", "music/energy/song3.mp3", "music/energy/song4.mp3", "music/energy/song5.mp3"],
    happy: ["music/happy/song1.mp3", "music/happy/song2.mp3", "music/happy/song3.mp3", "music/happy/song4.mp3", "music/happy/song5.mp3"],
    sad: ["music/sad/song1.mp3", "music/sad/song2.mp3", "music/sad/song3.mp3", "music/sad/song4.mp3", "music/sad/song5.mp3"],
    focus: ["music/focus/song1.mp3", "music/focus/song2.mp3", "music/focus/song3.mp3", "music/focus/song4.mp3", "music/focus/song5.mp3"]
}

//mood button
const buttons = document.querySelectorAll('.bt');
buttons.forEach(button => {
    button.addEventListener("click", () => {
        currentIndex = 0;
        document.querySelector('.song').innerHTML=''
        switch (button.dataset.value) {
            case "calm":
                showSongs("calm");
                break;
            case "energy":
                showSongs("energy");
                break;
            case "happy":
                showSongs("happy");
                break;
            case "sad":
                showSongs("sad");
                break;
            case "focus":
                showSongs("focus");
                break;
        }
    });
});
let currentIndex = 0;

//get songs related to mood
function showSongs(mood) {
    const songs = musicLib[mood];
    let i = 1;
    document.querySelector('.moodType').innerHTML = mood;
    document.getElementById('player').src = musicLib[mood][currentIndex];
    const ul = document.querySelector('.song');
    
    //set index to choose correct src
    musicLib[mood].forEach((song, i) => {
        const li = document.createElement('li');
        li.textContent = `Song ${i + 1}`;
        li.addEventListener("click", () => {
            currentIndex = i;
            loadSong(mood);
        });
        ul.appendChild(li);
    });

    //next button
    document.getElementById('nextBtn').addEventListener("click", () => {
        currentIndex++;
        if (currentIndex >= musicLib[mood].length) currentIndex = 0;
        loadSong(mood);
    });
}
//play songs
function loadSong(mood) {
    let audio = document.getElementById('player');
    audio.src = musicLib[mood][currentIndex];
    audio.play();
}


