import { useState } from "react";

export const TodoApp = () => {
  const [inputText,setinputText]=useState("");
  const [IncompleteTodos,setIncompleteTodos]=useState([]);
  const [completoTodos, setcompleteTodos]=useState([]);
  
  const onChangeInputText = (e) => setinputText(e.target.value);
  const onClickAdd = () => {
    if (inputText === "") return;
    setIncompleteTodos([...IncompleteTodos, inputText]);
    setinputText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...IncompleteTodos];
    newTodos.splice(index,1);
    setIncompleteTodos(newTodos);
  }
  const onComplete = (index) => { 
    const newIncompletetodos = [...IncompleteTodos];
    const targettodo = newIncompletetodos.splice(index,1)[0];
    const newcompletetodos = [...completoTodos, targettodo];
    setIncompleteTodos(newIncompletetodos);
    setcompleteTodos(newcompletetodos);
  }

    return(
        <>
        <input 
        type="text"
        placeholder="todoを入力"
        value={inputText}
        onChange={onChangeInputText}
        />
        <button onClick={onClickAdd}>追加</button>
        <p>未完了のTODO</p>
        <ul>
          {/* 配列の .map を使ってJSXのリストを動的に出力！ */}
          {IncompleteTodos.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <button onClick={() => onComplete}>完了</button>
              <button onClick={() => onClickDelete}>削除</button>
            </li>
          ))}
        </ul>
        
        </>
    )
}