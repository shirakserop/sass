


var btn = document.getElementsByClassName("menu_btn")[0],
    span1 = document.getElementsByClassName('menu_btn_span')[0],
    span2 = document.getElementsByClassName('menu_btn_span')[1],
    span3= document.getElementsByClassName('menu_btn_span')[2],

  menu = document.getElementsByTagName('ul')[0];



// btn.onclick = function(){
//     if(!menu.hasAttribute("style")){
//       menu.setAttribute("style"," transition: display .6s linear; display:block;");
//       console.log("list_on");
//     }else if(menu.hasAttribute("style")){
//       menu.setAttribute("style","transition: display .6s linear;  display:none;");
//       console.log("list_off");
//     }
//   }







var x = false;
  btn.addEventListener("click", function(){
    if(x == false){
      x = true;
      menu.setAttribute("class","list list_on");
    }else if (x == true){
      x = false;
      menu.setAttribute("class","list list_off");
    }
  });


  window.addEventListener("click",function(event){
    if(event.target != menu && event.target != btn && event.target != span1 && event.target != span2 && event.target != span3){
      x = false;
      menu.setAttribute("class","list list_off");
      //menu.setAttribute("style","transition: display .6s linear;  display:none;");
    }

  });
