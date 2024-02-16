export default function Input({ setItems, items, handleclick }) {
  return (
    <div className="flex justify-center mt-6 gap-4">
      <input
        type="text"
        placeholder="Add your items here..."
        className="p-2 rounded-xl"
        value={items}
        onChange={(e) => setItems(e.target.value)}
      ></input>
      <button
        className="bg-indigo-500 rounded-xl p-2 text-white"
        onClick={handleclick}
      >
        Add
      </button>
    </div>
  );
}
