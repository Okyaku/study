export const IncompleteTodos = ({ todos, onClickComplete, onClickDelete }) => {
  return (
    <div>
      <h3>未完了のTODO</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            <span>{todo}</span>
            <button onClick={() => onClickComplete(index)}>完了</button>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};