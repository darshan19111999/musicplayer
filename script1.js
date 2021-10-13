console.log1("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('song/raata.mp3');
let masterPlay = document.getElementById('masterPlay1');
let myProgressBar = document.getElementById('myProgressBar1');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName1');
let songItems = Array.from(document.getElementsByClassName('songItem1'));

let songs = [
    {songName: "Barish ki Jaye", filePath: "song/barish.mp3", coverPath: "covers/barish.jpg"},
    {songName: "Mann", filePath: "song/mann.mp3", coverPath: "covers/mann.jpg"},
    {songName: "Raata Sheershah", filePath: "song/raata.mp3", coverPath: "covers/raata.jpg"},
    {songName: "Ranjha", filePath: "song/rajha.mp3", coverPath: "covers/Ranjha.jpg"}

]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = song[i].coverPath; 
    element.getElementsByClassName("songName1")[0].innerText = song[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay1')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay1')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/barish.mp3`;
        masterSongName.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/barish.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/barish.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})