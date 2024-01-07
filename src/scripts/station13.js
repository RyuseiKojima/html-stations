data = "global data";

// このreturnDataに代入される関数の形をアロー関数に変えて"global data"が表示されるようにしてください
// ↓関数の中の処理は変更しないでください
const returnThisData = () => {
  console.log(this);
  return this.data;
};
// ↑関数の中の処理は変更しないでください
// function returnThisData() {
//   console.log(this);
//   return this.data;
// };

const object = {
  // 普通の関数：呼び出し時に処理を実行
  // アロー関数：既に処理を実行済み
  data: "object data",
  func: returnThisData,
};

function getData() {
  return object.func();
}
