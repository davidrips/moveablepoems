
$(".line right").on('click', function(){
  if (this.hasClass("line")===true){
    this.switchClass("line","right", 1000, "")
  }else{
    this.switchClass("right","line", 1000, "")
  };
})
