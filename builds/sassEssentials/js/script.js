
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


//carusel
var slide = document.getElementsByClassName('carusel_item');
var btn2 = document.getElementsByClassName('title')[0];

    var num = 0;
    var i;

      btn2.onclick = function (){
        for(i=0; i < slide.length; i++){
          slide[i].style.display = "none";
        }
        num++;
        if(num > slide.length - 1){
          num = 0;
        }else if(num < 0){
          num = slide.length -1;
        }
        console.log(num);
        slide[num].style.display = "block";
      }
