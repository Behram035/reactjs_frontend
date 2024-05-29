import { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center top-12 inset-x-1 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-gray-300 px-3 py-2 rounded-3xl">
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
            className="outline-none px-4 py-4 rounded-full text-white shadow-3xl"
          ></button>
          <button
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
            className="outline-none px-4 py-4 rounded-full text-white shadow-3xl"
          ></button>
          <button
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-4 rounded-full text-white shadow-3xl"
          ></button>
          <button
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-4 rounded-full text-white shadow-3xl"
          ></button>
          <button
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-4 rounded-full text-white shadow-3xl"
          ></button>
          <button
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-4 rounded-full text-white shadow-3xl"
          ></button>
          <button
            style={{ backgroundColor: "gray" }}
            onClick={() => setColor("gray")}
            className="outline-none px-4 py-4 rounded-full text-white shadow-3xl"
          ></button>
          <button
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-4 rounded-full text-white shadow-3xl"
          ></button>
          <button
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
            className="outline-none px-4 py-4 rounded-full text-white shadow-3xl"
          ></button>
          <button
            style={{ backgroundColor: "cyan" }}
            onClick={() => setColor("cyan")}
            className="outline-none px-4 py-4 rounded-full text-white shadow-3xl"
          ></button>
          <button
            style={{ backgroundColor: "magenta" }}
            onClick={() => setColor("magenta")}
            className="outline-none px-4 py-4 rounded-full text-white shadow-3xl"
          ></button>
          <button
            style={{ backgroundColor: "gold" }}
            onClick={() => setColor("gold")}
            className="outline-none px-4 py-4 rounded-full text-white shadow-3xl"
          ></button>
          <button
            style={{ backgroundColor: "navy" }}
            onClick={() => setColor("navy")}
            className="outline-none px-4 py-4 rounded-full text-white shadow-3xl"
          ></button>
          <button
            style={{ backgroundColor: "teal" }}
            onClick={() => setColor("teal")}
            className="outline-none px-4 py-4 rounded-full text-white shadow-3xl"
          ></button>
          <button
            style={{ backgroundColor: "lime" }}
            onClick={() => setColor("lime")}
            className="outline-none px-4 py-4 rounded-full text-white shadow-3xl"
          ></button>
          <button
            style={{ backgroundColor: "maroon" }}
            onClick={() => setColor("maroon")}
            className="outline-none px-4 py-4 rounded-full text-white shadow-3xl"
          ></button>
          <button
            style={{ backgroundColor: "silver" }}
            onClick={() => setColor("silver")}
            className="outline-none px-4 py-4 rounded-full text-white shadow-3xl"
          ></button>
          <button
            style={{ backgroundColor: "indigo" }}
            onClick={() => setColor("indigo")}
            className="outline-none px-4 py-4 rounded-full text-white shadow-3xl"
          ></button>
        </div>
      </div>
    </div>
  );
}

export default App;
