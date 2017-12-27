
//menu button and menu list activity __ variables------------------------
var    btn = document.getElementsByClassName("menu_btn")[0],
       menu = document.getElementsByClassName('list')[0],
       span1 = document.getElementsByClassName('menu_btn_span1')[0],
       span2 = document.getElementsByClassName('menu_btn_span2')[0],
       span3 = document.getElementsByClassName('menu_btn_span3')[0];
//EndOf menu button and menu list activity __ variables-------------------------

//carusel_items --------------Variables-------
var    carusel = document.querySelector('#carusel'),
       carusel_items = document.getElementsByClassName('carusel_item'),
       carusel_item_left_btn = document.querySelector('.carusel_item_left_btn'),
       carusel_item_right_btn = document.querySelector('.carusel_item_left_btn'),
       carusel_item_caption = document.querySelector('.carusel_item_caption'),
       carusel_list_item = document.getElementsByClassName('carusel_list_item');
//End of carusel_items -------Variables-------


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


//carusel_functions --------------------------functions------
var x = 0;
add_dots();
list_item_selection(x);
function carusel_control(x){  // next , prev buttons function
  this.x += x;
  if(this.x > carusel_items.length -1 ){this.x = 0;}
  if(this.x < 0){this.x = carusel_items.length -1;}
  console.log("Which image:",this.x);
  carusel_show(this.x);
  list_item_selection(this.x);
}
function add_dots(){ // add dots automaticlly same time new image has been added
  for(var j=0; j < carusel_items.length; j++){
    var dot = document.createElement("LI"),
        div = document.createElement("DIV"),
        list = document.getElementById("carusel_list");
        dot.appendChild(div);
        div.setAttribute("class", "carusel_list_item");
    list.appendChild(dot);
    console.log("dots_number", carusel_items.length);
      }
}
function list_item_selection(x_num){ // dots selection
  this.num = x_num;
  for(var i=0; i < carusel_items.length; i++){
    carusel_list_item[i].classList.remove('carusel_list_active');
  }
  carusel_list_item[this.num].classList.add('carusel_list_active');
  console.log("list_sel:",this.num);
}
function carusel_show(num){ // display images in the carousel
  this.num = num;
  for(var i=0;i<carusel_items.length; i++){
      carusel_items[i].style.display = "none";
  }
  carusel_items[this.num].style.display = "block";
  console.log("show:",this.num);
}
//End of carusel_functions -------------------functions------
