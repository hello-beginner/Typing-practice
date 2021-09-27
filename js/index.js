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
