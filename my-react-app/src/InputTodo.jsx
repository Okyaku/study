// src/components/InputTodo.jsx
export const InputTodo = ({ inputText, onChange, onClick }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="TODOを入力"
        value={inputText}
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};