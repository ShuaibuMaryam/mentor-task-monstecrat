
// let playSound = document.getElementById("song");

let source = document.querySelectorAll("[data-song='audio']")[1];

let x = document.querySelectorAll("[data-playicon='playButton']");

x.forEach(function(el){
    el.addEventListener("click", function(){
        if(source.paused){
            source.play();
            el.className = "fa fa-pause";
        }
        else{
            source.pause();
            el.className = "fa fa-play";
        }
        source.addEventListener('ended', function(){
            el.className = "fa fa-play";
        });
    })
})


let sngarr = [
    './audio/Alicia_Keys-NewYork&quotEmpireStateofMind&quot(Official Video).mp3',
    './audio/One Direction - Story of My Life.mp3'
]

let sourcee = document.querySelectorAll("[data-song='audio']");


let table_song = document.querySelectorAll("[data-song='song-source']");
    table_song.forEach(function(song){
        song.setAttribute("src", "./audio/Alicia_Keys-NewYork&quotEmpireStateofMind&quot(Official Video).mp3")
    });

// let source = document.querySelectorAll("[data-song='song-source']");
sourcee.forEach(function(source){


    let table_song_play = document.querySelectorAll("[data-song='playbutton']");
        table_song_play.forEach(function(el){
            el.addEventListener("click", function(){
                if(source.paused){
                    source.play();
                    el.className = "fa fa-pause";
                }
                else{
                    source.pause();
                    el.className = "fa fa-play";
                }
                source.addEventListener('ended', function(){
                    el.className = "fa fa-play";
                });
            })
        });

})

