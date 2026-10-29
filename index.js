// 1. HTMLの要素を取得する
const addText = document.getElementById("add-text");
const addButton = document.getElementById("add-button");
const incompleteList = document.getElementById("incomplete-list");

// 2. 「追加」ボタンが押された時の処理
const onClickAdd = () => {
  // 入力欄のテキストを取得
  const inputText = addText.value;
  if (inputText === "") return; // 空文字なら何もしない

  // 入力欄をリセット
  addText.value = "";

  // 3. liタグを作成
  const li = document.createElement("li");
  li.innerText = inputText;

  // 4. 「削除」ボタンを作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親要素（li）を未完了リストから削除する
    const deleteTarget = deleteButton.parentNode;
    incompleteList.removeChild(deleteTarget);
  });

  // 5. liタグの中に削除ボタンを入れ、未完了リスト(ul)に追加する
  li.appendChild(deleteButton);
  incompleteList.appendChild(li);
};

// 6. 追加ボタンにクリックイベントを登録
addButton.addEventListener("click", onClickAdd);