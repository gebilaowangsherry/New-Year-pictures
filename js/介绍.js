let videoList = document.querySelectorAll(".video-list-container .list");
videoList.forEach((vid) => {
  vid.onclick = () => {
    videoList.forEach((remove) => {
      remove.classList.remove("active");
    });
    vid.classList.add("active");
    let src = vid.querySelector(".list-video").src;
    let title = vid.querySelector(".list-title").innerHTML;
    document.querySelector(".main-video-container .main-video").src = src;
    document.querySelector(".main-video-container .main-video").play();
    document.querySelector(".main-video-container .main-vid-title").innerHTML =
      title;
  };
});


$(function () {
  $(".mydrawing").click(function () {
    //查看大图
    $(this).after("<div class='wrapper'></div>");
    var imgSrc = $(this).attr("src");
    $(".wrapper").css("background-image", "url(" + imgSrc + ")");
    $(".wrapper").fadeIn(1000);
    //关闭并移除图层
    $(".wrapper").click(function () {
      $(".wrapper").fadeOut(1000).remove();
    });
  });
});



