const imgList = new ImageList

$(document).ready(function(){

  $("#photo-form").submit( (event) => {
    event.preventDefault()
    var url = $("input[name=image_url]").val()
    var comment = $("input[name=comment]").val()
    var image = new Image(url, comment)
    imgList.images.push(image)
    clearForm()
    renderImages(imgList)
  })
})
