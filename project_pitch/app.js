const music =new Audio('audio/1.mp3')
music.play();
const songs=[
    {
        id: 1,
        songName:'<h5><div class="subtitle"><h5>Shells,Save Me...</h5>'
        
    },
    {
        id: 1,
        songName:'<h5><div class="subtitle"><h5>Shells,Save Me...</h5>'
        
    },
    {
        id: 1,
        songName:'<h5><div class="subtitle"><h5>Shells,Save Me...</h5>'
        
    },
    {
        id: 1,
        songName:'<h5><div class="subtitle"><h5>Shells,Save Me...</h5>'
        
    }
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

let master_player=document.getElementById('master_player');
master_player.addEventListener('click',()=>{
    if(music.paused ||music.currentTime<=0){
        music.play();
        Wave.classList.add('active1');
        master_player.classList.remove('bi bi-play-fill')
        master_player.classList.add('bi bi-play-fill')
        
    }else{
        music.pause();
        Wave.classlist.remove('active1');
        master_player.classList.add('bi bi-play-fill')
        master_player.classList.remove('bi bi-play-fill')
    }
})


let pop_song_left = document.getElementById("pop_song_left")
let pop_song_right = document.getElementById("pop_song_left")
let pop_song=document.getElementById("pop_song_left")[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330;
})
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330;
})
let pop_art_left = document.getElementById("pop_art_left")
let pop_art_right = document.getElementById("pop_art_left")
let item=document.getElementsByClassName("item")[0];

pop_art_right.addEventListener('click',()=>{
    item.scrollLeft += 330;
})
pop_art_left.addEventListener('click',()=>{
    item.scrollLeft -= 330;
})
const makeAllplays =()=>{
    Array.from(document.getElementsByClassName('playListplay')).forEach((el)=>{
        el.classList.remove('bi bi-play-fill');
        el.classList.add('bi bi-play-fill');
    })
}
const makeAllBackground =()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.computedStyleMap.background='rgb(105,105,105 .0)';
    })
}

let index =0;
let poster_master_play=document.getElementById(`poster_master_play`)
let title=document.getElementById(`poster_master_play`)
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=>{
    e.addEventListener('click',()=>{
        index=el.target.id;
        // console.log(index);
         music.src=`audio/${index}.mp3`
         poster.master_player.src =`/img${index}.jpg`
         music.play();
         master_player.classList.add('bi bi-play-fill')
         master_player.classList.remove('bi bi-play-fill')

         let songTitles =songs.filter((els)=>{
            return els.id ==index;
         });
         songTitles.forEach(elss=>{
            let {songName}= elss;
            title.innerHTML=songName;

         });
         makeAllBackground();
         Array.from(document.getElementsByClassName('songItem'))[index - 1].syle.background="rgb(rgb(105, 105, 105 .0)";
         makeAllplays();
         el.target.classList.remove('bi-pause-circle-fill');
         el.target.classList.add('bi bi-play-fill');
         Wave.classList.add('active1');

    });

})

let currentStart =document.getElementById('currentStart');
let currentEnd =document.getElementById('currentEnd');
let seek =document.getElementById('seek');
let bar2 =document.getElementById('bar2');
let dot =document.getElementsByClassName('dot')[0];
music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;
    let min1 =Math.floor(music_dur/60);
    
    // console.log(music_curr);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentEnd.innerText=`${min1}:${sec1}`;
    let min2 =Math.floor(music_curr/60);
    let sec2 =Math.floor(music_curr%60)
    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentStart.innerText=`${min2}:${sec2}`;
    let progressBar =parseInt((music_curr/music_dur)*100);
    seek.value=progressBar;
    console.log(seek.value);
    let seekbar =seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left =`${seekbar}$`;
});
seek.addEventListener('change',()=>{
    music.currentTime=seek.value*music.duration/100;
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if (vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-down-fill');
    }
    if(vol.value>0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
    }
    if(vol.value>50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
    }
    let vol_a=vol.value
    vol_bar.style.width=`${vol_a}`;
    vol_dot.style.left=`${vol_a}`;
    music.volume=vol_a/100;

});
