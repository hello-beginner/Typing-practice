/* 
    本js函数内包含函数
        state_i(id)
        state_span()
        fun(arr)
*/

// 封装的事件内函数 简单  普通 。。。。等
function state_i(id) {
  state.forEach((e) => {
    if (e.id === id) {
      progress_bar(id);
      // 调用生成内容
      addContent(e.code, e.id);
      localStorage.setItem("code", e.code);
      localStorage.setItem("id", e.id);
    }
  });
}
// 封装的点击和按键事件内容
function state_span() {
  keyStyle()
  $("#content").children()[0].remove();
  if ($("#content").children().length <= 0) {
    alert("下一关");
    $("#content").removeClass("content");
    _state(state);
  }
}
// 进度条显示与 游戏关卡判断 ， state_i函数内使用
function progress_bar(arr) {
  $("#jdt").css({ width: ` ${25 * arr}%` });
}

function keyStyle(text2) {
  var text2 = text2 || 0;
  if (text2) {
    $(".state").addClass("state_hover");
    setTimeout(function () {
      $(".state").removeClass("state_hover");
    }, 10);
    setTimeout(function () {
      state_i(text2);
    }, 500);
  } else {
    $("#content").children().eq(1).addClass("cont-span-hover-one");
    $("#content").children().eq(1).removeClass("cont-span-hover-two");
    setTimeout(function () {
      $("#content").children().eq(1).addClass("cont-span-hover-two");
    }, 10);
  }
}