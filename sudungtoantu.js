let inputwidth;
let inputheight;
inputwidth = prompt("Vui lòng nhập chiều dài !");
inputheight = prompt("Vui lòng nhập chiều rộng !");
let width = parseInt(inputwidth);
let height = parseInt(inputheight);
let area = width * height;
document.write("The area is: " + area);