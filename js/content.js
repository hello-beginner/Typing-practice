
// 封装的生成内容，点击、按键 状态--关卡时调用

function addContent(code, id) {
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
  var newArr = [];
  // 生成数字
  // for (var i = 0; i < num2; i++) {
  //   newArr.push(Math.floor(Math.random() * 10));
  // }
  for (var i = 0; i < num3; i++) {
    newArr.push(arr[Math.floor(Math.random() * arr.length)]);
  }
  // console.log(num1, num2, num3);
  // console.log(newArr);
  newArr = shuffle(newArr);
  var str = "";
  newArr.forEach((e) => {
    str += `<span class="cont-span">${e}</span>`;
  });
  $("#content").html(str).addClass(`${style_data.className[3]}`);
  $(".cont-span").css("height", `${100 / id}%`);
  $("#content").children().eq(0).addClass(`${style_data.className[4]}`)
  // console.log(this);
  // console.log(newArr);
}
// 封装的打乱数组
function shuffle(shuffle_arr) {
  var l = shuffle_arr.length;
  var index, temp;
  while (l > 0) {
    index = Math.floor(Math.random() * l);
    temp = shuffle_arr[l - 1];
    shuffle_arr[l - 1] = shuffle_arr[index];
    shuffle_arr[index] = temp;
    l--;
  }
  return shuffle_arr;
}
// num(10);
