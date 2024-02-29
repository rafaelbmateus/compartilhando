fetch("https://raw.githubusercontent.com/rafaelbmateus/linkup/main/linkup.json")
  .then((res) => {
  return res.json();
})
.then((data) => linkup(data));

function linkup(data) {
  let id = getLinkupId()

  for (var linkup of data.pages) {
    if (linkup.id == id) {
      document.getElementById("shared-with").innerHTML = linkup.name;

      let links = "";
      for (var link of linkup.links) {
        links += `<div class="p-2"><a target="_blank" href="` + link.linkTo + `" class="btn btn-dark">` + link.name + `</a></div>`
        document.getElementById("links").innerHTML = links;
      }
    }
  }
}

function getLinkupId() {
  if (window.location.search.split("q=").length == 1){
    return ""
  }

  return window.location.search.split("q=")[1];
}
