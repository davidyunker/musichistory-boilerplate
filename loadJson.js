 var moreSongs = (function () {
  //  moreSongs is your global variable
  var loadSongs = [];
//  loadSongs is your empty array


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
      var container = document.querySelector("#centercol");

      songsJSON.forEach(function(songs) {
        container.innerHTML += `
          <h5>${songs.title}</h5>
          <h4>${songs.artist}</h4>
          <h4>${songs.album}</h4>`
    })
  }