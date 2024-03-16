console.log("welcome to Spotify");
let songindex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let progressBar=document.getElementById('progress-bar');
let gif=document.getElementById('gif')
let songItem=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName')

// let songItemPlay=Array.from(document.getElementsByClassName('songItemPlay'));
let songs=[
    {songname:"tiger zinda hai", folderpath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songname:"bula dena", folderpath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"channa meraya", folderpath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"will u marry me", folderpath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songname:"let me love u", folderpath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"whats my name", folderpath:"songs/6.mp3",coverpath:"covers/6.jpg"},
    {songname:"love dose", folderpath:"songs/7.mp3",coverpath:"covers/7.jpg"},
    {songname:"dheere dheere", folderpath:"songs/8.mp3",coverpath:"covers/8.jpg"},
    {songname:"desi kalakar", folderpath:"songs/9.mp3",coverpath:"covers/9.jpg"},
    {songname:"machayengay ", folderpath:"songs/10.mp3",coverpath:"covers/10.jpg"} 
]
songItem.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src= songs[i].coverpath;
    element.getElementsByClassName('songname')[0].innerText=songs[i].songname;
    
})
// songItem.forEach((element,i)=>{
//     element.getElementsByClassName('songname')[0].innerText=songs[i].songname;
    
// })



// intialize variables


// audioElement.play();

// play a song
masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
        gif.style.opacity=1;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        gif.style.opacity=0;

        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');


    }
})
// listen events
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;


})
progressBar.addEventListener('change',()=>{
    audioElement.currentTime=(progressBar.value * audioElement.duration)/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')


    })


}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songindex=parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songindex+1}.mp3`;
        masterSongName.innerText=songs[songindex].songname;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');


    })
})
document.getElementById('next').addEventListener('click',()=>{
    if (songindex>=9){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    masterSongName.innerText=songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');



})
document.getElementById('previous').addEventListener('click',()=>{
    if (songindex<=0){
        songindex=9;

    }
    else{
        songindex-=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    masterSongName.innerText=songs[songindex].songname;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})