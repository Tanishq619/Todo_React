import Body from "./Body";

import { useState } from "react";
import Input from "./input";
import Header from "./Header";
import Modal from "./Modal";

function App() {
  return (
    <div className="h-screen  flex justify-center items-center">
      <TodoBody />
    </div>
  );
}

function TodoBody() {
  const [items, setItems] = useState("");
  const [itemsArr, setItemsArr] = useState([]);
  const [checked, setChecked] = useState(false);
  const [id, setID] = useState();

  function handlCheck(id) {
    console.log(itemsArr);
    setItemsArr(
      itemsArr.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : { ...el }
      )
    );
  }

  function handleclick() {
    const item = {
      id: Date.now(),
      content: items,
      completed: false,
    };
    setItemsArr([...itemsArr, item]);
  }
  function handleClose(id) {
    const arr = itemsArr.filter((el) => el.id !== id);
    setItemsArr([...arr]);
  }
  function handleclosemodal() {
    setChecked(false);
  }

  function handleopenmodal(id) {
    setChecked(true);
    setID(id);
    console.log(id);
  }

  function handlemodal() {
    setChecked(false);
    setItemsArr(
      itemsArr.map((el) =>
        el.id === id ? { ...el, content: items } : { ...el }
      )
    );
  }
  return (
    <div className="w-[60%] min-h-[60%] h-auto bg-gray-400 p-10 rounded-xl">
      <Header />
      <Input
        setItems={setItems}
        setItemsArr={setItemsArr}
        items={items}
        itemsArr={itemsArr}
        handleclick={handleclick}
      />
      <Body
        itemsArr={itemsArr}
        handleClose={handleClose}
        handlCheck={handlCheck}
        handleopenmodal={handleopenmodal}
      />

      {checked && (
        <Modal
          items={items}
          handleopenmodal={handleopenmodal}
          handleclosemodal={handleclosemodal}
          setItems={setItems}
          handlemodal={handlemodal}
        />
      )}
    </div>
  );
}

export default App;
