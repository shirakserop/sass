


var btn = document.getElementsByClassName("menu_btn")[0],
  menu = document.getElementsByTagName('ul')[0];



  /*  btn.onclick = function(){
      if(!menu.hasAttribute("style")){
        menu.setAttribute("style","display:block;");
        console.log("list_on");
      }else if(menu.hasAttribute("style")){
        menu.setAttribute("style","display:none;")
        menu.removeAttribute("style");
        console.log("list_off");
      }

      console.log("clicked");
    }
*/


var x = true;
  btn.onclick = function(){
    if(x == true){
      x = false;
      menu.setAttribute("style","display:block;");
    }else if (x == false){
      x = true;
      menu.removeAttribute("style");
    }
  }


  window.addEventListener("click",function(event){
    if(event.target != menu && event.target != btn){
      x = true;
      menu.removeAttribute("style");
    }

  });
