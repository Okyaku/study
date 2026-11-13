export const CompleteTodos = ({ todos, onClickBack }) => {
  return (
    <div>
      <h3>完了したTODO</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginBottom: "8px" }}>
            <span>{todo}</span>
            <button onClick={() => onClickBack(index)}>戻す</button>
          </li>
        ))}
      </ul>
    </div>
  );
};