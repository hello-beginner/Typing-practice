// 封装的生成内容，点击、按键 状态--关卡时调用
function addContent(code, id) {
  // var num1=[]
  // for(var i=0;i<20;i++){
  //   num1.push( Math.floor(Math.random() * 11))
  num1 = Math.floor(Math.random() * 11);
  // }
  // console.log(num1);
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
    newArr.push(Small_letter[Math.floor(Math.random() * Small_letter.length)]);
  }
  // 调用函数打乱数组
  newArr = shuffle(newArr);
  var str = "";
  // 遍历生成标签
  newArr.forEach((e) => {
    str += `<span class=${style_data.className[3]}>${e}</span>`;
  });
  // 调用函数初始化字母等内容样式，并添加生成标签到 第一个aside标签内
  contInit_style(str, id);
}
