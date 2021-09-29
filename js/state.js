// 关卡状态
const state = [
  {
    id: 1,
    name: "第一关",
    code: 10,
  },
  {
    id: 2,
    name: "第二关",
    code: 20,
  },
  {
    id: 3,
    name: "第三关",
    code: 30,
  },
  {
    id: 4,
    name: "第四关",
    code: 40,
  },
];
// 生成大小写字母 数字 符号
// let Small_letter =letter(1)
// 数字
let num_ber;
//小写
let Small_letter;
//  大写
var Large_letter;
// 生成i标签状态
let _state_num = 0;
// 存的样式 -- 类名 与 样式属性
const style_data = {
  className: [
    // 关卡开始时确认
    "state_hover",
    // 练字时当时按下字母与准备按下字母样式
    // 凸起
    "cont-span-hover-one",
    // 凹陷
    "cont-span-hover-two",
    // 生成内容时添加类名
    "cont-span",
    // 生成字母格式化
    "content",
    // 生成字母第一个聚焦样式初始化
    "content-eq-one",
  ],
  // 生成字母或数字等时，他们各自的高度
  styleName: ["height"],
};
// 绑定标签
const TabName = {
  // 绑定content
  content: `${$("#content")}`,
  // 绑定全部span
  content_span_all: `${$("#content").children()}`,
  // 绑定第一个span
  content_span_eq: `${$("#content").children().eq(1)}`,
  // 绑定进度条
  progress_bar_id: `${$("#progress_bar_id")}`,
  // 绑定关卡状态 --  简单...  困难...
  state: `${$(".state")}`,
};
