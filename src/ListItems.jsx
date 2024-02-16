export default function ListItems({
  items,
  handleClose,
  handlCheck,
  handleopenmodal,
}) {
  // console.log(items);

  return (
    <div className="w-70% flex gap-4 border-2 border-gray-700 bg-white rounded-xl p-4 mt-4 ">
      <input type="checkbox" onClick={() => handlCheck(items.id)}></input>
      <h1
        className={`grow text-center text-xl ${
          items.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {items.content}
      </h1>
      <button onClick={() => handleopenmodal(items.id)}>📝</button>
      <button onClick={() => handleClose(items.id)}>❌</button>
    </div>
  );
}
