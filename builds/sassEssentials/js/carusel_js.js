//carusel_items --------------Variables-------
var    carusel = document.getElementById('carusel'),
       carusel_items = document.getElementsByClassName('carusel_item'),
       carusel_item_left_btn = document.querySelector('.carusel_item_left_btn'),
       carusel_item_right_btn = document.querySelector('.carusel_item_left_btn'),
       carusel_item_caption = document.getElementsByClassName('carusel_item_caption'),
       carusel_list_item = document.getElementsByClassName('carusel_list_item'),
       carusel_background = document.getElementById('carusel_background');
//End of carusel_items -------Variables-------

//carusel_functions --------------------------functions------
var x = 0;
var size = 1000;
carusel_add_dots();
carusel_list_item_selection(x);
carusel_caption(x);
carusel_add_background(x,size);

function carusel_control(x){  // next , prev buttons function
  this.x += x;
  if(this.x > carusel_items.length -1 ){this.x = 0;}
  if(this.x < 0){this.x = carusel_items.length -1;}
  console.log("Which image:",this.x);
  carusel_show(this.x);
  carusel_list_item_selection(this.x);
  carusel_caption(this.x);
  carusel_add_background(this.x,size);
}
function carusel_add_background(backgrounds, size){ //blurry background add and remove by resizing
  var check;
  check = true;
  this.backgrounds = backgrounds;
  if(check == true && window.innerWidth > size){
    check = false;
    carusel_background.style.backgroundImage = "url(" + carusel_items[this.backgrounds].src + ")";
    carusel_background.style.backgroundSize = "cover";
  }else if(check == false && window.innerWidth < size){
    check = true;
    carusel_background.style.backgroundImage = "none";
  }
  window.addEventListener('resize', function(){
    if(check == true && window.innerWidth > size){
      check = false;
      carusel_background.style.backgroundImage = "url(" + carusel_items[this.backgrounds].src + ")";
      carusel_background.style.backgroundSize = "cover";
    }else if(check == false && window.innerWidth < size){
      check = true;
      carusel_background.style.backgroundImage = "none";
    }
  });
  console.log("width:",window.innerWidth);
}
function carusel_add_dots(){ // add dots automaticlly same time new image has been added
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
function carusel_list_item_selection(x_num){ // dots selection
  this.num = x_num;
  for(var i=0; i < carusel_items.length; i++){
    carusel_list_item[i].classList.remove('carusel_list_active');
  }
  carusel_list_item[this.num].classList.add('carusel_list_active');
  console.log("list_sel:",this.num);
}
function carusel_caption(captions){
    var i;
    this.captions = captions;
    for(i=0; i< carusel_items.length; i++){
      carusel_item_caption[i].style.display = "none";
    }
    carusel_item_caption[this.captions].style.display = "block";
    console.log("captions:", this.captions);
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
