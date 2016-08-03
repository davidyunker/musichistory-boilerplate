// Each student must add one song to the beginning and the end of the array.
// Loop over the array and remove any words or characters that obviously don't belong.

// Students must find and replace the > character in each item with a - character.
// Must add each string to the DOM in index.html in the main content area.



var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


songs.push("Me Too - by Meghan Trainor on the album Thank You");
songs.unshift("Into You - by Ariana Grande on the album Dangerous Woman");



// Students must find and replace the > character in each item with a - character.



for (var i = 0; i < songs.length; i++) {
  songs[i] = songs[i].replace('>', '-');
  songs[i] = songs[i].replace('*', '');
  songs[i] = songs[i].replace('(', '');
  songs[i] = songs[i].replace('!', '');
  songs[i] = songs[i].replace('@', '');

var songbox = document.getElementById("centercol");
songbox.innerHTML += `<p>${songs[i]}</p>`
}
// this works! but you have to fix






// songs.push += newEntererdSongs;
//   songbox.innerHTML += `<p>${newEntererdSongs}</p>`;

var songAdder = document.getElementById("addbutton");
songAdder.addEventListener("click", getNewSongs);


function getNewSongs() {

var songsFieldSong = document.getElementById("song").value;
var songsFieldArtist = document.getElementById("artist").value;
var songsFieldAlbum = document.getElementById("album").value;
// var newEntererdSongs = songsFieldSong + songsFieldArtist + songFieldAlbum;

// console.log(songsFieldSong);

// console.log(songsFieldArtist);

// console.log(songsFieldAlbum);

console.log(songs.length);
var newEntererdSongs = songsFieldSong + " "  + "-" + " " + songsFieldArtist + " " + songsFieldAlbum;
console.log(newEntererdSongs);
songs.push(newEntererdSongs);
console.log(songs.length);


var songbox = document.getElementById("centercol");
songbox.innerHTML += `<p>${newEntererdSongs}</p>`
}





// var songTitles = [];

// for (var i = 0; i < songs.length; i++) {
//   var songBreak = songs[i].indexOf("-");
//   if (songBreak !== -1) {
//     songTitles += songs[i].slice(0, songBreak);
//     }
//   }

// console.log(songTitles);





