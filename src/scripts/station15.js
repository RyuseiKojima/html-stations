async function getData() {
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];
  return await Promise.all(userList.map(buildFullName));
}

// 待つ秒数を指定する関数
function wait(sec) {
  return new Promise((resolve) => {
    // setTimeout(時間経過後のプログラム, 開始までの時間[ミリ秒])
    setTimeout(resolve, sec*1000);
  });
};

// フルネームを作成する関数
async function buildFullName(data) {
  try {
    await wait(3); // 3秒止める
    data.full_name = data.family_name + ' ' + data.first_name;
    return data;
  } catch (err) {
    console.error(err);
  }
}