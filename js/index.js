// 生成i标签状态
var _state_num = 0;
// 生成i标签
function _state(arr) {
  if (_state_num >= 4) {
    // alert("通关");
    alert("恭喜你，通关了");
    $("#content").html("已通关");
    $("#content").css({
      background: "skyblue",
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
      "font-size": "30px",
    });
    return;
  }
  var str = "";

  str += `<i date-id="${arr[_state_num].id}"class="state">${arr[_state_num].name}</i>`;
  $("#content").html(str);
  _state_num++;
}
// 初始化界面
_state(state);
// i点击事件
$("#content").on("click", "i", function () {
  var id = parseInt($(this).attr("date-id"));
  state_i(id);
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
  var text = $("#content").children()[0];
  var num = $(text).text();
  var text2 = parseInt($(text).attr("date-id"));
  // console.log(num);
  if (num === e.key) {
    state_span();
  } else if (text2 == 1 || text2 == 2 || text2 == 3 || text2 == 4) {
    keyStyle(text2)
  } else {
    alert("错误");
    var code = localStorage.getItem("code");
    var id = localStorage.getItem("id");
    addContent(code, id);
  }
});
