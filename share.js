fetch("https://gist.githubusercontent.com/rafaelbmateus/e7f6575d8ab8b675a7be9ca9cf7c8d2c/raw/f55cd11ee98400bc6549455204c1be35e2dad4cb/share.json")
  .then((res) => {
  return res.json();
})
.then((data) => share(data));

function share(data) {
  let uri = getURI()

  for (var share of data.pages) {
    if (share.uri == uri) {
      document.getElementById("shared-with").innerHTML = share.name;

      let links = "";
      for (var link of share.links) {
        links += `<div class="p-2"><a href="` + link.linkTo + `" class="btn btn-dark">` + link.name + `</a></div>`
        document.getElementById("links").innerHTML = links;
      }
    }
  }
}

function getURI() {
  return window.location.search.split("q=")[1];
}
