console.log("Tune in to Hakuna Matata..it's all music!!")

let songIndex = 0;
let audioElement = new Audio("Alappuzha Mullakal Video Song Qalb Ranjith Sajeev Neha Prakash Alex Vijay Babu Hanan Shah.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");

let songs = [
    { songName: "Alappuzha Mullakal", filePath: "Alappuzha Mullakal Video Song Qalb Ranjith Sajeev Neha Prakash Alex Vijay Babu Hanan Shah.mp3", coverPhoto: "cover.png"},
    { songName: "Hey Minnale", filePath: "Hey Minnale Lyrics - Amaran Haricharan, Shweta Mohan, G. V. Prakash Kumar.mp3", coverPhoto: "hey minnale.png"},
    { songName: "Pandu Paadavarambathiloode", filePath: "Joseph Movie Video Song Pandu Paadavarambathiloode Bhagyaraj Joju George M Padmakumar.mp3", coverPhoto: "joseph.png"},
    { songName: "Khalbinte theerathu", filePath: "Khalbinte theerath Lyrics sajeer koppam and shabnam rafeeq.mp3", coverPhoto: "khalbinte theerathu.png"},
    { songName: "Aye Sinamika", filePath: "OK Kanmani - Aye Sinamika Lyric Video _ A.R. Rahman, Mani Ratnam [ZxKEo9u29Vc].mp3", coverPhoto: "aye_sinamika.png"},
    { songName: "Uyire", filePath: "UYIRE - Video Song Ft. Sid Sriram Gauthamante Radham Neeraj Madhav Ankit Menon Anand Menon4K.mp3", coverPhoto: "uyire.png"},
    { songName: "Vaathilil aa vaathilil", filePath: "Vathilil Lyrical Video Ustad Hotel Haricharan Gopi Sunder Anwar Rasheed.mp3", coverPhoto: "vaathilil .png"},
    { songName: "Uyiril thodum", filePath: "ഉയരൽ തട Uyiril Thodum - Kumbalangi Nights Official Video Song Sooraj Santhosh Anne Amie.mp3", coverPhoto: "uyiril thodum.png"},
    { songName: "Parayuvaan ithu aadyamaayi", filePath: "Parayuvan Ithadyamayi (Lyrics) - Sidsriram.mp3", coverPhoto: "parayuvaan.png"}
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPhoto;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
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

const makeAllPlays = () => {
    const elements = Array.from(document.getElementsByClassName('songItemPlay'));
    console.log(elements); // Check if elements are being selected
    elements.forEach((element) => {
        console.log(element); // Check each element
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = songs[songIndex].filePath;
        audioElement.play();
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    songIndex = (songIndex + 1) % songs.length; // Loop back to the start
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play(); 
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 8
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

