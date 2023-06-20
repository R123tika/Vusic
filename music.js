const music = new Audio('song/life.mp3');
// music.play();

const song =[
    {
        id :1,
        songName : `Life Goes On
        <div class="subtitle">Bts</div>`,
        poster: `poster/li.png`,
        audio : `song/life.mp3`
    },
    {
        id :2,
        songName : `Faded
        <div class="subtitle">Alan Walker</div>`,
        poster: `poster/faded.jpg`,
        audio : `song/Faded.mp3`
    },
    {
        id :3,
        songName : `Bloodpop
        <div class="subtitle">Justin Beiber</div>`,
        poster: `poster/blood.jpg`,
        audio : `song/bloodpop.mp3`
    },
    {
        id :4,
        songName : `Wolf
        <div class="subtitle">Selena Gomez</div>`,
        poster: `poster/wolves.jpg`,
        audio : `song/wolves.mp3`
    },
    {
        id :5,
        songName : `We don't talk Anymore
        <div class="subtitle">Charlie and Selena </div>`,
        poster: `poster/we dont.jpg`,
        audio : `song/talk.mp3`
    },
    {
        id :6,
        songName : `Senorita
        <div class="subtitle">Shawn Mendis and Camila Cabello</div>`,
        poster: `poster/senorita.jpg`,
        audio : `song/senorita.mp3`
    },
    {
        id :7,
        songName : `Friends
        <div class="subtitle">Anne Marie</div>`,
        poster: `poster/friends.jpg`,
        audio : `song/friends.mp3`
    },
    {
        id :8,
        songName : `The Way I am
        <div class="subtitle">Charlie Puth</div>`,
        poster: `poster/way.jpg`,
        audio : `song/way.mp3`
    },
    {
        id :9,
        songName : `Indila
        <div class="subtitle">Derniere Danse</div>`,
        poster: `poster/indila.jpg`,
        audio : `song/indila.mp3`
    },
    {
        id :10,
        songName : `Look At Me Now
        <div class="subtitle">Charlie Puth</div>`,
        poster: `poster/look.jpg`,
        audio : `song/look.mp3`
    },
    {
        id :11,
        songName : `Falling
        <div class="subtitle">Treavor Daniel</div>`,
        poster: `poster/failing.jpg`,
        audio : `song/Falling.mp3`
    },
    {
        id :12,
        songName : `Liar
        <div class="subtitle">Camila Cabello</div>`,
        poster: `poster/liar.jpg`,
        audio : `song/liar.mp3`
    },
    {
        id :13,
        songName : `Rockstar
        <div class="subtitle">Post Melon</div>`,
        poster: `poster/rock.jpg`,
        audio : `song/rockstar.mp3`
    },
    {
        id :14,
        songName : `Pasoori
        <div class="subtitle">Arijit Singh</div>`,
        poster: `poster/pasoori.jpg`,
        audio : `song/pasoori.mp3`
    },
    {
        id :15,
        songName : `Sauda Khara
        <div class="subtitle">Diljit Doshan</div>`,
        poster: `poster/sauda.jpg`,
        audio : `song/Sauda.mp3`
    },
    {
        id :16,
        songName : `Raatan Lambiyaan
        <div class="subtitle">Arijit Singh</div>`,
        poster: `poster/raatan.jpg`,
        audio : `song/Raataan.mp3`
    },
    {
        id :17,
        songName : `One Kiss
        <div class="subtitle">Dua Lipa</div>`,
        poster: `poster/one.jpg`,
        audio : `song/One-Kiss.mp3`
    },
    {
        id :18,
        songName : `Permission to dance
        <div class="subtitle">Bts</div>`,
        poster: `poster/permission.jpg`,
        audio : `song/Permission.mp3`
    },
    {
        id :19,
        songName : `Dynamite
        <div class="subtitle">Bts</div>`,
        poster: `poster/dyna.jpg`,
        audio : `song/dynamite.mp3`
    },
    {
        id :20,
        songName : `3 Peg                                                                                                                                                                                                            qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq                                                                                                                                                                                                                                                                               
        <div class="subtitle">Shary Mann</div>`,
        poster: `poster/3 peg.jpg`,
        audio : `song/3peg.mp3`
    },
    
]
Array.from(document.getElementsByClassName('songItems')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = song[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = song[i].songName;
})



let pop_left = document.getElementById('left_scroll');
let pop_right = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 400;
})
pop_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 400;
})
let artist_left = document.getElementById('left_a_scroll');
let artist_right = document.getElementById('right_a_scroll');
let items = document.getElementsByClassName('items')[0];

artist_right.addEventListener('click',()=>{
    items.scrollLeft += 400;
})
artist_left.addEventListener('click',()=>{
    items.scrollLeft -= 400;
})
let masterPlay = document.getElementById('master');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <=0){
        music.play();
        wave.classList.add('active2');
        masterPlay.classList.remove('bi-play-circle');
        masterPlay.classList.add('bi-pause-circle');


    }
    else{
        music.pause();
        wave.classList.remove('active2');
        masterPlay.classList.remove('bi-pause-circle');
        masterPlay.classList.add('bi-play-circle');
    }
})
const makeAllplay =()=>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
       e.target.classList.add('bi-play-circle-fill');
       e.target.classList.remove('bi-pause-circle-fill');
    
        })
}

let index = 0;
console.log(index);
var poster_play = document.getElementById('master_image');
Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        poster_play.src = song[index].poster;
        music.src = song[index].audio;
        music.play();
        masterPlay.classList.remove('bi-play-circle');
        masterPlay.classList.add('bi-pause-circle');

    })
})
let currentStart = document.getElementById('currentStart'); 
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
 let bar2 = document.getElementById('bar2');
  let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () =>

{

let music_curr=music.currentTime;

let music_dur = music.duration;

let min1 = Math.floor(music_dur / 60);

let sec1 = Math.floor(music_dur % 60);

if (sec1 < 10) {

    sec1 = `0${sec1}`;
    
    }
    
    currentStart.innerText = `${min1}:${sec1}`;
    let min2 = Math.floor(music_curr / 60);

    let sec2 = Math.floor(music_curr % 60);
    
    if (sec2 < 10) {
    
        sec2 = `0${sec2}`;
        
        }
        
        currentStart.innerText = `${min2}:${sec2}`;


    let progressBar =parseInt((music_curr / music_dur)* 100);
     seek.value = progressBar; 
     let seekbar = seek.value;

bar2.style.width =` $(seekbar}%`;

dot.style.left =`${seekbar}%`;

});



seek.addEventListener('change', () => {
music.currentTime = seek.value* music.duration / 100;
})


let vol_icon =document.getElementById('vol_icon'); 
const vol1 = document.getElementById('vol');

let vol_bar = document.getElementsByClassName('vol_bar')[0];

let vol_dot = document.getElementById('vol_bar');

vol1.addEventListener('change', () => {

if (vol1.value == 0) {

vol_icon.classList.remove('bi-volume-up-fill');

vol_icon.classList.remove('bi-volume-down-fill');

vol_icon.classList.add('bi-volume-off-fill');

}

if (vol1.value > 0) {

vol_icon.classList.remove('bi-volume-up-fill');

vol_icon.classList.add('bi-volume-down-fill');

vol_icon.classList.remove('bi-volume-off-fill');

}

if (vol1.value > 50) {

vol_icon.classList.add('bi-volume-up-fill'); 
vol_icon.classList.remove('bi-volume-down-fill'); 
vol_icon.classList.remove('bi-volume-off-fill');

}

let vol_a = vol1.value;

vol_bar.style.width = `${vol_a}%`;

vol_dot.style.left = `${vol_a}%`;

music.volume = vol_a / 100;


})


let back = document.getElementById('back');
let next = document.getElementById('next');
index = Array.from(document.getElementsByClassName('songItem')).length;
 back.addEventListener('click', () => {
index -= 1;
if (index < 1) {
index = Array.from(document.getElementsByClassName('songItem')).length
}
music.src = `song/${index}.mp3`;
poster_play.src= `./${index}.jpg`;
music.play();
masterPlay.classList.remove('bi-play-fill');
masterPlay.classList.add('bi-pause-fill');
 
let songTitles = songs.filter((els) => {
    return els.id == index;
})
songTitles.forEach(elss => {

    let { songName } = elss;
    
    title.innerHTML = songName;
    
})
    
makeAllBackground(); 
Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgba(105,105,105,.1)"
    makeAllplay();
    
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    
    wave.classList.add('activel');
})
next.addEventListener('click',()=>{
    index++;
})