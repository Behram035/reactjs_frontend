import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [character, setCharacter] = useState(false);
  const [numeric, setNumeric] = useState(false);
  const [password, setPassword] = useState("");
  const [copy, setCopy] = useState("Copy");

  const passwordref = useRef(null);
  const passwordGenerator = useCallback(() => {
    let passwordGen = "";
    let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (character) {
      alphabets += "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
    }
    if (numeric) {
      alphabets += "0123456789";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * alphabets.length + 1);
      passwordGen += alphabets.charAt(char);
    }
    setPassword(passwordGen);
    if (copy === "Copied") {
      setCopy("Copy");
    }
  }, [length, character, numeric, setPassword]);

  const CopyPassword = () => {
    setCopy((copy) => {
      if (copy) setCopy("Copied");
    });
  };

  const copyToClipboard = useCallback(() => {
    passwordref.current?.select();
    window.navigator.clipboard.writeText(password);
    CopyPassword();
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, character, numeric, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-5 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-3xl text-center my-3">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1.5 px-3 font-semibold"
          placeholder="Password"
          readOnly
          ref={passwordref}
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyToClipboard}
        >
          {copy}
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={32}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            className="cursor-pointer"
            defaultChecked={character}
            id="charInput"
            onChange={() => setCharacter((pre) => !pre)}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            className="cursor-pointer"
            defaultChecked={numeric}
            id="numberInput"
            onChange={() => setNumeric((pre) => !pre)}
          />
          <label htmlFor="numberInput">Numeric</label>
        </div>
      </div>
    </div>
  );
}

export default App;
