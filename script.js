let r = 0;

hoge(document.getElementById("hello"), 1, 1);
hoge(document.getElementById("hello2"), 1, -1);

function hoge(dom, dx, dy) {
  let str = "";
  r += 0.01; //*Math.random();
  let len = 70;
  for (let i = 0; i < len; i++) {
    let xx = i * dx;
    let yy = i * dy;
    let alpha = 1;

    if (i % 2 == 0) str += xx + "px " + yy + "px 0px #fff";
    else str += xx + "px " + yy + "px 0px #000";

    if (i != len - 1) str += ",";
  }
  dom.style.textShadow = str;
}
