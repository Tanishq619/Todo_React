import ListItems from "./ListItems";
export default function Body({
  itemsArr,
  handleClose,
  handlCheck,
  handleopenmodal,
}) {
  return (
    <div className="w-full overflow-auto h-[30rem]  mt-5 p-4">
      {itemsArr.map((el) => (
        <ListItems
          items={el}
          handleClose={handleClose}
          handlCheck={handlCheck}
          handleopenmodal={handleopenmodal}
        />
      ))}
    </div>
  );
}
