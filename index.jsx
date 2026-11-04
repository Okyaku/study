import { useState } from "react";

export const TodoApp = () => {
  // 1. 3つのStateを定義
  const [inputText, setInputText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // 入力欄の変更をStateに反映する関数
  const onChangeInputText = (e) => setInputText(e.target.value);

  // 追加ボタンが押されたときの関数
  const onClickAdd = () => {
    if (inputText === "") return;
    // スプレッド構文を使って、新しい配列を作成してStateを更新！
    setIncompleteTodos([...incompleteTodos, inputText]);
    setInputText(""); // 入力欄をクリア
  };

  return (
    <div style={{ padding: "16px" }}>
      {/* 入力エリア */}
      <div>
        <input
          type="text"
          placeholder="TODOを入力"
          value={inputText}
          onChange={onChangeInputText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>

      {/* 未完了リストエリア */}
      <div>
        <p>未完了のTODO</p>
        <ul>
          {/* 配列の .map を使ってJSXのリストを動的に出力！ */}
          {incompleteTodos.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <button>完了</button>
              <button>削除</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};