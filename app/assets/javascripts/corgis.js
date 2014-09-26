var OkCorgiApp = function() {

  function createCorgiThumbnail() {
    // Create new thumbnail list item from active corgi
    var corgiEl = $("li.corgi.active");
    var img = corgiEl.find("img").attr("src");
    var name = corgiEl.find("h3").text();

    var newEl = $("<li class=\"corgi\"><h4>" + name + "</h4><img src=\"" + img + "\" class=\"pic\" /></li>");

    return newEl;
  }

  function showNextCorgi() {
    var currentCorgiEl = $("li.corgi.active");

    if (currentCorgiEl.next().length > 0) {
      // Remove the class of hidden from the next corgi
      currentCorgiEl.next().removeClass("hidden").addClass("active");
    }
    else {
      alert("No more Corgis!");
    }

    // Remove active corgi from candidates
    currentCorgiEl.remove();
  }

  $(".choose-corgi").on("click", function() {

    var elId = $(this).attr("id");
    var containerSelector = "";
    var corgi = $('li.corgi.active');
    var corgiId = corgi.attr('id');
    var status = "";
    var data = { name: $('h3', corgi).text(), bio: $('.bio', corgi).text(), profile_img: $('img', corgi).attr('src'), match: status }

    if (elId === "paw-left") {
      containerSelector = "#misses";
      status = false;
      $.ajax({
        type: 'PUT',
        url: '/corgis/'+ corgiId,
        data: { corgi: data},
        success: $('ul', containerSelector).append(createCorgiThumbnail())
      })
    }
    else {
      containerSelector = "#matches";
      status = true;
      $.ajax({
        type: 'PUT',
        url: '/corgis/'+ corgiId,
        data: { corgi: data },
        success: $('ul', containerSelector).append(createCorgiThumbnail())
      })
    }
    
    showNextCorgi();
  });

  //adding corgi
  $('a.new_corgi').on('click', function(event){
    event.preventDefault();

    $.ajax({
      type: 'GET',
      url: '/corgis/new',

    })
  })
}


$(document).ready(function() {

  OkCorgiApp();

});
