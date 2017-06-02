function clearForm() {
  $("#photo-form")[0].reset()
}

function clearImages() {
  $("#photo-list").html("")
}

function renderImages(list){
  clearImages()
  list.images.forEach( (img)=> {
    $("#photo-list").append('<div><img src="' + img.url + '" style="width:300px;height:300px;"><br>' + `${img.comment}` + '</div>')
  })
}
