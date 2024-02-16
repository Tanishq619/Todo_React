export default function Modal({
  items,
  handlemodal,
  handleclosemodal,
  setItems,
}) {
  return (
    <div className="h-[40%] w-[40%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-black flex justify-center items-center">
      <input
        type="text"
        value={items}
        placeholder="hello"
        onChange={(e) => setItems(e.target.value)}
      ></input>

      <button onClick={handlemodal} className="text-white">
        submit
      </button>

      <button className="absolute top-2 right-2" onClick={handleclosemodal}>
        ❌
      </button>
    </div>
  );
}
