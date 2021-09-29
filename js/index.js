// 初始化界面
_state(state);
// i点击事件
$("#content").on("click", "i", function () {
  state_i(date_id($(this)));
});
// span点击事件
// $("#content").on("click", "span", function () {
//   if ($("#content").children()[0] == this) {
//     state_span();
//   } else {
//     alert("错误");
//     var code = localStorage.getItem("code");
//     var id = localStorage.getItem("id");
//     addNum(code, id);
//   }
// });
// 按键事件
$(document).on("keyup", function (e) {
  // 获取到的i标签
  var i_tabName = $("#content").children()[0];
  // 获取到i 标签与span标签的值
  var i_span_val = $(i_tabName).text();
  // i标签的自定义属性
  var i_id = date_id($(i_tabName));
  if (i_span_val === e.key) {
    state_span();
  } else if (i_id == 1 || i_id == 2 || i_id == 3 || i_id == 4) {
    keyStyle(i_id);
  } else {
    alert("错误");
    var code = localStorage.getItem("code");
    var id = localStorage.getItem("id");
    addContent(code, id);
  }
});

// 点击选择难度
$(".dif-top div").click(function () {
  // 获取难度id
  let index = $(this).attr("data-id");
  Small_letter = "";
  // 初始化 选择框
  for (let i = 0; i < $(".checkbox div input").length; i++) {
    $(".checkbox div input")[i].checked = false;
  }
  // 便利生产不同难度随机内容
  for (let i = 0; i < index; i++) {
    let num = Math.floor(Math.random() * $(".dif-top div").length);
    // console.log(num);
    // 判断是否为符号 否则让用户重新选择
    if (num == 3) {
      alert("'符号'功能未完善，请重新选择");
      return;
    }
    // 给选中的打上勾 开关属性 true false
    $(".checkbox div input")[num].checked = true;
    // console.log(num);
    // 调用函数生产内容
    Small_letter += letter(num + 1);
    // 去重
    Small_letter=Array.from(new Set(Small_letter))
    // 去掉多余不相关内容
    Array.from(new Set(Small_letter)).forEach((e,index)=>{
      if(e==','){
        Small_letter.splice(index,1)
      }
    })
    console.log(Small_letter);
  }
});
