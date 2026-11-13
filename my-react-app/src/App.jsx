import { useState } from "react";
import { InputTodo } from "./InputTodo";
import { IncompleteTodos} from "./IncompleteTodos"
import { CompleteTodos } from "./CompleteTodos"

export const TodoApp = () => {
  const [inputText, setInputText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeInputText = (e) => setInputText(e.target.value);

  const onClickAdd = () => {
    if (inputText === "") return;
    setIncompleteTodos([...incompleteTodos, inputText]);
    setInputText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    const targetTodo = newIncompleteTodos.splice(index, 1)[0];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos([...completeTodos, targetTodo]);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    const targetTodo = newCompleteTodos.splice(index, 1)[0];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos([...incompleteTodos, targetTodo]);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <InputTodo
        inputText={inputText}
        onChange={onChangeInputText}
        onClick={onClickAdd}
      />
      <IncompleteTodos
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos
        todos={completeTodos}
        onClickBack={onClickBack}
      />
    </div>
  );
};