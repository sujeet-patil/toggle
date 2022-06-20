var flag=true;
function myFunction() {
    if(flag){
      document.getElementById('btn_mode').innerHTML="Light";
      flag=false;
    }else{
      document.getElementById('btn_mode').innerHTML="Dark";
      flag=true
    }
    const ele = document.body;
    ele.classList.toggle("dark");
  }
  var header = document.getElementById("myDiv")
  var tg = header.getElementsByClassName("btn");
  for(var i=0;i<tg.length;i++){
    tg[i].addEventListener('click', function(){
        var cur = document.getElementsByClassName('active');
        cur[0].className = cur[0].className.replace(" active","");
        // this.className += " active";
        this.classList.add("active")
    });
  }