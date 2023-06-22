fetch("https://raw.githubusercontent.com/rafaelbmateus/share/main/share.json")
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
        links += `<div class="p-2"><a target="_blank" href="` + link.linkTo + `" class="btn btn-dark">` + link.name + `</a></div>`
        document.getElementById("links").innerHTML = links;
      }
    }
  }
}

function getURI() {
  if (window.location.search.split("q=").length == 1){
    return ""
  }

  return window.location.search.split("q=")[1];
}
