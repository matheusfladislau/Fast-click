$(".countdown").hide();
$(".result").hide();
$("#btnPause").hide();

function Countdown(){
  var genNum = Math.floor(Math.random() * 10);
  $("#genNumb").text(genNum);
  $("#btnStart").prop("disabled",true);
  $(".countdown").show();

  var countDown = 3;
  var counterName = function(){
    if(countDown > 0) {
      $(".countdown").text(countDown);
      countDown--;
    } else {
      clearInterval(countDown);
      Start();
    }
  };
  var x = setInterval(counterName, 1000);
}

var countNumb;
var d;

function Start(){
  $(".result").text("");
  $(".countdown").text("NOW!");
  $("#countNumb").text("");

  $("#btnStart").hide();
  $("#btnPause").show();
  
  countNumb = 20;

  x = setInterval(function() {
    $("#countNumb").text(countNumb);
    countNumb--;
  }, 1000);
}

/*document.getElementById("pause").style.display = "none";
var value1 = Math.floor(Math.random() * 10);
document.getElementById("numero").innerHTML = value1;

var x;
var countDownDate;

function start(){
  document.getElementById("boa").innerHTML = "";
  document.getElementById("start").style.display = "none";
  document.getElementById("pause").style.display = "unset";
    
  countDownDate = 20;

  x = setInterval(function() {
    countDownDate--;
    document.getElementById("demo").innerHTML = countDownDate;
  }, 200);
}

function pause(){
	document.getElementById("start").style.display = "unset";
  document.getElementById("pause").style.display = "none";
    	
	clearInterval(x);
    if(value1 == countDownDate){
    	document.getElementById("boa").innerHTML = "parabéns!";
	  }else{
      document.getElementById("boa").innerHTML = "ruim!";
    }  
}*/