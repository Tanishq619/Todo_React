import image from "./notebook.jpg";

export default function Header() {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-3xl font-mono font-extrabold ">TodoList</h1>
      <img src={image} className="w-[40px] ml-5"></img>
    </div>
  );
}
