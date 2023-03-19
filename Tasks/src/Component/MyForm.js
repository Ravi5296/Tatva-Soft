import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";

const MyForm = () => {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [inputThree, setInputThree] = useState("");
  const [inputFour, setInputFour] = useState("");
  const [renderCount, setRenderCount] = useState(1);

  const [debouncedInputOne] = useDebounce(inputOne, 1000);
  const [debouncedInputTwo] = useDebounce(inputTwo, 1000);
  const [debouncedInputThree] = useDebounce(inputThree, 1000);
  const [debouncedInputFour] = useDebounce(inputFour, 1000);

  useEffect(() => {
    setRenderCount(renderCount + 1);
  }, [inputOne, inputTwo, inputThree, inputFour, debouncedInputOne, debouncedInputTwo, debouncedInputThree, debouncedInputFour]);

  const handleInputChangeOne = (event) => {
    setInputOne(event.target.value);
  };

  const handleInputChangeTwo = (event) => {
    setInputTwo(event.target.value);
  };

  const handleInputChangeThree = (event) => {
    setInputThree(event.target.value);
  };

  const handleInputChangeFour = (event) => {
    setInputFour(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Input values:", debouncedInputOne, debouncedInputTwo, debouncedInputThree, debouncedInputFour);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputOne">Input One: </label>
          <input type="text" id="inputOne" value={inputOne} onChange={handleInputChangeOne} />
        </div>
        <div>
          <label htmlFor="inputTwo">Input Two: </label>
          <input type="text" id="inputTwo" value={inputTwo} onChange={handleInputChangeTwo} />
        </div>
        <div>
          <label htmlFor="inputThree">Input Three: </label>
          <input type="text" id="inputThree" value={inputThree} onChange={handleInputChangeThree} />
        </div>
        <div>
          <label htmlFor="inputFour">Input Four: </label>
          <input type="text" id="inputFour" value={inputFour} onChange={handleInputChangeFour} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <div>Render Count: {renderCount}</div>
    </div>
  );
};

export default MyForm;