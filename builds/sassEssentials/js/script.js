
//menu button and menu list activity __ variables------------------------
var   btn = document.getElementsByClassName("menu_btn")[0],
      menu = document.getElementsByClassName('list')[0],
      span1 = document.getElementsByClassName('menu_btn_span1')[0],
      span2 = document.getElementsByClassName('menu_btn_span2')[0],
      span3 = document.getElementsByClassName('menu_btn_span3')[0];
//EndOf menu button and menu list activity __ variables-------------------------

//menu button and menu list activity __ functions------------------------
btn.addEventListener('click', function(event){
    if(event.target = btn){
      menu.classList.toggle('list_on');
      X();
    }
});

window.addEventListener("click",function(x){
  if(event.target != btn && event.target != menu && event.target != span1 && event.target != span2 && event.target != span3){
    menu.classList.remove('list_on');
    btn.classList.remove('change_btn');
  }
});


function X(){
  btn.classList.toggle('change_btn');
}//EndOf menu button and menu list activity __ functions------------------------
