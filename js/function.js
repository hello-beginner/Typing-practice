/* 
    本js函数内包含函数
        state_i(id)
        state_span()
        progress_bar(arr)
*/
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
// 生成大小写字母 数字 符号
function letter(if_else) {
  let num_ber=[]
  var Small_letter = [];
  let Large_letter=[]
  for (var i = 0; i < 10; i++) {
    num_ber.push(i);
  }
  for (var i = 97; i < 123; i++) {
    Small_letter.push(String.fromCharCode(i));
  }
 
  for (var i = 65; i < 91; i++) {
    Large_letter.push(String.fromCharCode(i));
  }
  if (if_else == 1) {
    return num_ber;
  } else if (if_else == 2) {
    return Small_letter;
  } else if (if_else == 3) {
    return Large_letter;
  } else {
  }
}
// 事件内函数 简单  普通 。。。。等
function state_i(id) {
  state.forEach((e) => {
    if (e.id === id) {
      // 调用显示进度条
      progress_bar(id);
      // 调用生成内容
      addContent(e.code, e.id);
      localStorage.setItem("code", e.code);
      localStorage.setItem("id", e.id);
    }
  });
}
// 点击和按键事件内容
function state_span() {
  keyStyle();
  $("#content").children()[0].remove();
  if ($("#content").children().length <= 0) {
    alert("下一关");
    $("#content").removeClass(`${style_data.className[4]}`);
    _state(state);
  }
}
// 进度条显示
function progress_bar(arr) {
  $("#progress_bar_id").css({ width: ` ${25 * arr}%` });
}
// 判断 内容添加样式
function keyStyle(text2) {
  var text2 = text2 || 0;
  if (text2) {
    $(".state").addClass(`${style_data.className[0]}`);
    setTimeout(function () {
      $(".state").removeClass(`${style_data.className[0]}`);
    }, 10);
    setTimeout(function () {
      state_i(text2);
    }, 500);
    return;
  } else {
    $("#content").children().eq(1).addClass(`${style_data.className[1]}`);
    $("#content").children().eq(1).removeClass(`${style_data.className[2]}`);
    setTimeout(function () {
      $("#content").children().eq(1).addClass(`${style_data.className[2]}`);
    }, 10);
  }
}
// 初始化生成字母等内容样式 并添加生成标签到 第一个aside标签内
function contInit_style(str, id) {
  $("#content").html(str).addClass(`${style_data.className[4]}`);
  $(".cont-span").css(`${style_data.styleName[0]}`, `${100 / id}%`);
  $("#content").children().eq(0).addClass(`${style_data.className[5]}`);
}
// 打乱数组
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
// 获取i标签身上的id
function date_id(id) {
  return parseInt(id.attr("date-id"));
}
