const addText = document.getElementById("add-text");
const addButton = document.getElementById("add-button");
const incompleteList = document.getElementById("incomplete-list");
const completeList = document.getElementById("complete-list"); // 完了リストを取得

const onClickAdd = () => {
  const inputText = addText.value;
  if (inputText === "") return;
  addText.value = "";

  const li = document.createElement("li");
  li.innerText = inputText;

  // --- 【1. 完了ボタンの作成と起爆スイッチ】 ---
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 押された完了ボタンの親要素(li)を未完了リストから消す
    const moveTarget = completeButton.parentNode;
    incompleteList.removeChild(moveTarget);

    // 完了リスト用に「戻す」ボタンを作り直して差し替える
    completeButton.remove(); // 完了ボタン自体は消す
    deleteButton.remove();   // 削除ボタンも消す

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 「戻す」が押されたら完了リストから消して未完了に戻す処理（後ほど実装）
      completeList.removeChild(backButton.parentNode);
    });

    moveTarget.appendChild(backButton);
    completeList.appendChild(moveTarget); // 完了リスト(ul)へ移動！
  });

  // --- 【2. 削除ボタンの作成と起爆スイッチ】 ---
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode;
    incompleteList.removeChild(deleteTarget);
  });

  // 未完了リストに追加
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
  incompleteList.appendChild(li);
};

addButton.addEventListener("click", onClickAdd);