let spareDiv = document.getElementById("spare-div");
let spareDiv2 = document.getElementById("spare-div2");
let spareDiv3 = document.getElementById("spare-div3");
let spareDiv4 = document.getElementById("spare-div4");
let spareDiv5 = document.getElementById("spare-div5");
let spareDiv6 = document.getElementById("spare-div6");
let spareDiv7 = document.getElementById("spare-div7");
let spareDiv8 = document.getElementById("spare-div8");
let spareDiv9 = document.getElementById("spare-div9");
let spareDiv10 = document.getElementById("spare-div10");
let spareDiv11 = document.getElementById("spare-div11");
let spareDiv12 = document.getElementById("spare-div12");

let content4 = document.getElementById("content4");

let body = document.getElementsByTagName("body");

/*let newNode = spareDiv;
//newNode.style.display = "flex";

let referenceNode = content4;

console.log(referenceNode);
console.log(newNode);

referenceNode.after(newNode.style.display);*/

let count = 0;

window.onscroll = bottomScroll;

let scrolling = false;

let count1 = 0;

function bottomScroll() {
  //spareDiv.style.display = "flex";

  scrolling = true;

  let scrollable = document.documentElement.scrollHeight - window.innerHeight;
  let scrolled = Math.ceil(window.scrollY);

  console.log(body[0].scrollTop);
  console.log(document.documentElement.scrollTop);

  if (document.documentElement.scrollTop > 70) {
    spareDiv.style.display = "flex";
    spareDiv.style.animation = "right2left 0.25s";
  } else if (document.documentElement.scrollTop < 150) {
    spareDiv.style.animation = "right2leftreverse 0.25s forwards";
  }
  if (document.documentElement.scrollTop > 220) {
    spareDiv2.style.display = "flex";
    spareDiv2.style.animation = "left2right 0.25s";
  } else if (document.documentElement.scrollTop < 300) {
    spareDiv2.style.animation = "left2rightreverse 0.25s forwards";
  }
  if (document.documentElement.scrollTop > 370) {
    spareDiv3.style.display = "flex";
    spareDiv3.style.animation = "right2left 0.25s";
  } else if (document.documentElement.scrollTop < 450) {
    spareDiv3.style.animation = "right2leftreverse 0.25s forwards";
  }
  if (document.documentElement.scrollTop > 520) {
    spareDiv4.style.display = "flex";
    spareDiv4.style.animation = "left2right 0.25s";
  } else if (document.documentElement.scrollTop < 600) {
    spareDiv4.style.animation = "left2rightreverse 0.25s forwards";
  }
  if (document.documentElement.scrollTop > 670) {
    spareDiv5.style.display = "flex";
    spareDiv5.style.animation = "right2left 0.25s";
  } else if (document.documentElement.scrollTop < 750) {
    spareDiv5.style.animation = "right2leftreverse 0.25s forwards";
  }
  if (document.documentElement.scrollTop > 820) {
    spareDiv6.style.display = "flex";
    spareDiv6.style.animation = "left2right 0.25s";
  } else if (document.documentElement.scrollTop < 900) {
    spareDiv6.style.animation = "left2rightreverse 0.25s forwards";
  }
  if (document.documentElement.scrollTop > 970) {
    spareDiv7.style.display = "flex";
    spareDiv7.style.animation = "right2left 0.25s";
  } else if (document.documentElement.scrollTop < 1050) {
    spareDiv7.style.animation = "right2leftreverse 0.25s forwards";
  }
  if (document.documentElement.scrollTop > 1120) {
    spareDiv8.style.display = "flex";
    spareDiv8.style.animation = "left2right 0.25s";
  } else if (document.documentElement.scrollTop < 1200) {
    spareDiv8.style.animation = "left2rightreverse 0.25s forwards";
  }
  if (document.documentElement.scrollTop > 1270) {
    spareDiv9.style.display = "flex";
    spareDiv9.style.animation = "right2left 0.25s";
  } else if (document.documentElement.scrollTop < 1350) {
    spareDiv9.style.animation = "right2leftreverse 0.25s forwards";
  }
  if (document.documentElement.scrollTop > 1420) {
    spareDiv10.style.display = "flex";
    spareDiv10.style.animation = "left2right 0.25s";
  } else if (document.documentElement.scrollTop < 1500) {
    spareDiv10.style.animation = "left2rightreverse 0.25s forwards";
  }
  if (document.documentElement.scrollTop > 1570) {
    spareDiv11.style.display = "flex";
    spareDiv11.style.animation = "right2left 0.25s";
  } else if (document.documentElement.scrollTop < 1650) {
    spareDiv11.style.animation = "right2leftreverse 0.25s forwards";
  }
  if (document.documentElement.scrollTop >= 1720) {
    spareDiv12.style.display = "flex";
    spareDiv12.style.animation = "left2right 0.25s";
  } else if (document.documentElement.scrollTop < 1800) {
    spareDiv12.style.animation = "left2rightreverse 0.25s forwards";
  }

  console.log(scrolled);
  console.log(document.documentElement.scrollHeight);

  console.log(window.innerHeight);
  console.log(scrollable);
}

/*setInterval(() => {
  if (scrolling) {
    scrolling = false;

    if (window.innerHeight + window.pageYOffset >= content4.offsetHeight) {
      console.log(window.innerHeight);
      console.log(window.pageYOffset);
      console.log(content4.offsetHeight);
      count++;
      if (count == 1) {
        spareDiv.style.display = "flex";
      } else if (count == 2) {
        spareDiv2.style.display = "flex";
      }
    }
0    console.log(count);
  }
}, 500);*/
