
// 封装的生成内容，点击、按键 状态--关卡时调用

function addNum(code, id) {
  var arr = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];

  var num1 = Math.ceil(Math.random() * 10);
  // 随机生成不等位数字和字母
  // var num2 = parseInt(code / num1);
  // var num3 = parseInt(code - num2);
  var num3 = parseInt(code);
  var arr2 = [];
  // 生成数字
  // for (var i = 0; i < num2; i++) {
  //   arr2.push(Math.floor(Math.random() * 10));
  // }
  for (var i = 0; i < num3; i++) {
    arr2.push(arr[Math.floor(Math.random() * arr.length)]);
  }
  // console.log(num1, num2, num3);
  // console.log(arr2);
  arr2 = shuffle(arr2);
  var str = "";
  arr2.forEach((e) => {
    str += `<span class="cont-span">${e}</span>`;
  });
  $("#content").html(str).addClass("content");
  $(".cont-span").css("height", `${100 / id}%`);
  $("#content").children().eq(0).css({background:'black',color:'#fff'})
  // console.log(this);
  // console.log(arr2);
}
// 封装的打乱数组
function shuffle(arr) {
  var l = arr.length;
  var index, temp;
  while (l > 0) {
    index = Math.floor(Math.random() * l);
    temp = arr[l - 1];
    arr[l - 1] = arr[index];
    arr[index] = temp;
    l--;
  }
  return arr;
}
// num(10);
