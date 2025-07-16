const songs = [
  { title: "Sample Song 1", file: "songs/song1.mp3" },
  { title: "Sample Song 2", file: "songs/song2.mp3" },
  { title: "Sample Song 3", file: "songs/song3.mp3" },
];

let currentSong = 0;

const audioPlayer = document.getElementById("audio-player");
const audioSource = document.getElementById("audio-source");
const songTitle = document.getElementById("song-title");
const songList = document.getElementById("song-list");

function loadSong(index) {
  currentSong = index;
  audioSource.src = songs[index].file;
  audioPlayer.load();
  songTitle.textContent = songs[index].title;
  audioPlayer.play();
}

function nextSong() {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
}

function prevSong() {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
}

// Load song list
songs.forEach((song, index) => {
  const li = document.createElement("li");
  li.textContent = song.title;
  li.onclick = () => loadSong(index);
  songList.appendChild(li);
});
