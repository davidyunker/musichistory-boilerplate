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
}
// console.log(songs);
var newTracks = "";

for (var i = 0; i < songs.length; i++) {
  newTracks += "<p>";
  newTracks += songs[i];
  newTracks += "</p>";
}
console.log(newTracks);

document.getElementsByClassName(centercol).innerHTML = newTracks

// var moreSongs = songs.push("Me Too - by Meghan Trainor on the album Thank You");
// var evenMoreSongs = moreSongs.unshift("Into You - by Ariana Grande on the album Dangerous Woman");
// // songs = songs.unshift("Into You - by Ariana Grande on the album Dangerous Woman");



