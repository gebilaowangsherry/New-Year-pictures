// 第一行轮播图
let container1 = document.querySelector("#container1");
let ul1 = container1.querySelector("ul");
ul1.innerHTML = ul1.innerHTML + ul1.innerHTML;
let lis1 = container1.querySelectorAll("li");
let spa1 = -2;
ul1.style.width = lis1[0].offsetWidth * lis1.length + "px";
let timer1 = null; // 定义一个定时器变量
function move1() {
  if (ul1.offsetLeft < -ul1.offsetWidth / 2) {
    ul1.style.left = "0";
  }
  if (ul1.offsetLeft > 0) {
    ul1.style.left = -ul1.offsetWidth / 2 + "px";
  }
  ul1.style.left = ul1.offsetLeft + spa1 + "px";
}
timer1 = setInterval(move1, 100); 

ul1.addEventListener("mousemove", function () {
  clearInterval(timer1);
  timer1 = null; // 将定时器变量设为null
});
ul1.addEventListener("mouseout", function () {
  if(!timer1) { // 判断定时器变量是否为null
    timer1 = setInterval(move1,100);
  }
});

// 第二行轮播图
let container2 = document.querySelector("#container2");
let ul2 = container2.querySelector("ul");
ul2.innerHTML = ul2.innerHTML + ul2.innerHTML;
let lis2 = container2.querySelectorAll("li");
let spa2 = 2;
ul2.style.width = lis2[0].offsetWidth * lis2.length + "px";
let timer2 = null;
function move2() {
    if (ul2.offsetLeft < -ul2.offsetWidth / 2) {
      ul2.style.left = "0";
    }
    if (ul2.offsetLeft > 0) {
      ul2.style.left = -ul2.offsetWidth / 2 + "px";
    }
    ul2.style.left = ul2.offsetLeft + spa2 + "px";
}
timer2 = setInterval(move2, 100); 

ul2.addEventListener("mousemove", function () {
  clearInterval(timer2);
  timer2 = null;
});
ul2.addEventListener("mouseout", function () {
  if(!timer2) {
    timer2 = setInterval(move2,100);
  }
});

// 第三行轮播图
let container3 = document.querySelector("#container3");
let ul3 = container3.querySelector("ul");
ul3.innerHTML = ul3.innerHTML + ul3.innerHTML;
let lis3 = container3.querySelectorAll("li");
let spa3 = -2;
ul3.style.width = lis3[0].offsetWidth * lis3.length + "px";
let timer3 = null;
function move3() {
  if (ul3.offsetLeft < -ul3.offsetWidth / 2) {
    ul3.style.left = "0";
  }
  if (ul3.offsetLeft > 0) {
    ul3.style.left = -ul3.offsetWidth / 2 + "px";
  }
  ul3.style.left = ul3.offsetLeft + spa3 + "px";
}
timer3 = setInterval(move3, 100); 

ul3.addEventListener("mousemove", function () {
  clearInterval(timer3);
  timer3 = null;
});
ul3.addEventListener("mouseout", function () {
  if(!timer3) {
    timer3 = setInterval(move3,100);
  }
});

// 第四行轮播图
let container4 = document.querySelector("#container4");
let ul4 = container4.querySelector("ul");
ul4.innerHTML = ul4.innerHTML + ul4.innerHTML;
let lis4 = container4.querySelectorAll("li");
let spa4 = 2;
ul4.style.width = lis4[0].offsetWidth * lis4.length + "px";
let timer4 = null;
function move4() {
    if (ul4.offsetLeft < -ul4.offsetWidth / 2) {
      ul4.style.left = "0";
    }
    if (ul4.offsetLeft > 0) {
      ul4.style.left = -ul4.offsetWidth / 2 + "px";
    }
    ul4.style.left = ul4.offsetLeft + spa4 + "px";
}
timer4 = setInterval(move4, 100); 

ul4.addEventListener("mousemove", function () {
  clearInterval(timer4);
  timer4 = null;
});
ul4.addEventListener("mouseout", function () {
  if(!timer4) {
    timer4 = setInterval(move4,100);
  }
});