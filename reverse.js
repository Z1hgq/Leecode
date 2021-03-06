/**
 * 7.给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * @param {number} x
 * @return {number}
 */
// var reverse = function(x) {
//     if ((typeof x) !== "number") {
//         return 0;
//     }
//     let str = String(x);
//     let arr;
//     if (str.startsWith("-")) {
//         str = str.replace("-", "");
//     }
//     arr = str.split("");
//     arr.reverse();
//     str = arr.join("");
//     str = Number(str);
//     if (str > 2147483648) {
//         return 0;
//     }
//     if (String(x).startsWith("-")) {
//         return 0 - str;
//     }
//     return str;
// };
const reverse = function (x) {
  let ans = 0;
  while (x != 0) {
    if ((ans * 10) / 10 != ans) {
      ans = 0;
      break;
    }
    ans = ans * 10 + x % 10;
    x = x / 10;
  }
  return ans;
};