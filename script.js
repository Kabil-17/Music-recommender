const musicLib = {
    calm: ["music/calm/song1.mp3", "music/calm/song2.mp3", "music/calm/song3.mp3", "music/calm/song4.mp3", "music/calm/song5.mp3"],
    energy: ["music/energy/song1.mp3", "music/energy/song2.mp3", "music/energy/song3.mp3", "music/energy/song4.mp3", "music/energy/song5.mp3"],
    happy: ["music/happy/song1.mp3", "music/happy/song2.mp3", "music/happy/song3.mp3", "music/happy/song4.mp3", "music/happy/song5.mp3"],
    sad: ["music/sad/song1.mp3", "music/sad/song2.mp3", "music/sad/song3.mp3", "music/sad/song4.mp3", "music/sad/song5.mp3"],
    focus: ["music/focus/song1.mp3", "music/focus/song2.mp3", "music/focus/song3.mp3", "music/focus/song4.mp3", "music/focus/song5.mp3"]
}


let currentIndex = 0;
let currentMood = '';

//mood button
const buttons = document.querySelectorAll('.bt');
buttons.forEach(button => {
    button.addEventListener("click", () => {
        currentIndex = 0;
        currentMood = button.dataset.value;
        document.querySelector('.song').innerHTML=''
        showSongs(currentMood);
    });
});

//dropDown
const songToggle = document.querySelector('.songToggle');
const songList = document.querySelector('.song');

songToggle.addEventListener("click", () => {
    songList.style.display =
        songList.style.display === "block" ? "none" : "block";
});


//next button
    document.getElementById('nextBtn').addEventListener("click", () => {
        if(!currentMood) return;
        currentIndex++;
        if (currentIndex >= musicLib[currentMood].length) currentIndex = 0;
        loadSong(currentMood);
    });

//get songs related to mood
function showSongs(mood) {
    const songs = musicLib[mood];
    let i = 1;
    document.querySelector('.moodType').innerHTML = mood;
     playRandom(mood)
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
}

//play songs
function loadSong(mood) {
    let audio = document.getElementById('player');
    audio.src = musicLib[mood][currentIndex];
    audio.play();
}

//play a random song from picked mood
function playRandom(mood){
    const randomIndex = Math.floor(Math.random()*musicLib[mood].length);
    currentIndex = randomIndex;
    let audio = document.getElementById('player');
    audio.src = musicLib[mood][randomIndex];
    audio.play();

}