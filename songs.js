var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


songs.push("Me Too - by Meghan Trainor on the album Thank You");
songs.unshift("Into You - by Ariana Grande on the album Dangerous Woman");






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




var songAdder = document.getElementById("addbutton");
songAdder.addEventListener("click", getNewSongs);


function getNewSongs() {

var songsFieldSong = document.getElementById("song").value;
var songsFieldArtist = document.getElementById("artist").value;
var songsFieldAlbum = document.getElementById("album").value;


console.log(songs.length);
var newEntererdSongs = songsFieldSong + " "  + "- " + "by " + songsFieldArtist + " "  + "on the album " + songsFieldAlbum;
console.log(newEntererdSongs);
songs.push(newEntererdSongs);
console.log(songs.length);


var songbox = document.getElementById("centercol");
songbox.innerHTML += `<p>${newEntererdSongs}</p>`


}

// var deleteButton = document.getElementById("delete");
// deleteButton.addEventListener("click", deleteSong);

// console.log(evt);

// function deleteSong () {
//   var container = document.querySelector("#centercol");
//   container = container.removeChild(jsonSong);

// }


/////////////////

 var moreSongs = (function () {
  var loadSongs = [];

  return {
    getSongs: function (cb) {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', 'songs.json')
      xhr.addEventListener('load', function (evt) {
        songsJSON = JSON.parse(evt.target.responseText).songs
        cb(songsJSON)
      })
      xhr.send()
    },
    populatePage: function () {
      var container = document.querySelector("#list-view")

      songsJSON.forEach(function(songs) {         container.innerHTML +=
`<span class="jsonSong"> <strong>${songs.songName}</strong>
${songs.artistName} ${songs.albumName}<input type="button" class="delete"
value="Delete"></span><br>`
 })   } }

})(moreSongs || {})

moreSongs.getSongs(moreSongs.populatePage)

////////notes on how to delete




document.querySelector("body").addEventListener("click", function(event) {
  console.log(event);
  console.log(event.target.parentElement)
  if (event.target.className ===
    "delete") {

  // var child = document.getElementById("outputSpan");
  // var parent = document.getElementById("outputDiv");
  // parent.removeChild(child);
  event.target.parentElement.remove();

  console.log(messagesLogged);
  }
})
