
//alert('Hello World');
var deadlineDate = new Date('Dec 31,2019 00:00:00').getTime();
var x = setInterval(function(){
    var now= new Date().getTime();
    var time = deadlineDate- now;

    var days = Math.floor(time / (1000 * 60 * 60 * 24));
  var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s";

  if (time<0){
      clearInterval(x);
      document.getElementById('countdown').innerHTML = "EXPIRED";
  }

}, 1000)

deadlineDate()
