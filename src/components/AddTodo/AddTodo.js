import React, { useState } from "react";

const AddTodo = (props) => {
  let [value1, setValue1] = useState("");
  let [value2, setValue2] = useState("");
  let [value3, setValue3] = useState("");
  let [isError, setError] = useState(false);

  function handleClick() {
    if (!value1 || !value2 || !value3) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    let newObj = {
      name: value1,
      lastName: value2,
      number: value3,
      id: Date.now(),
    };
    console.log(newObj);
    props.handleTask(newObj);
    setValue1("");
    setValue2("");
    setValue3("");
  }

  return (
    <div>
      <input
        style={isError ? { borderColor: "red" } : { borderColor: "white" }}
        value={value1}
        onChange={(e) => setValue1(e.target.value)}
        type="text"
        placeholder="Name"
        style={{ backgroundColor: "rgb(231, 214, 240)" }}
      />
      <input
        style={isError ? { borderColor: "red" } : { borderColor: "white" }}
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
        type="text"
        placeholder="Lastname"
        style={{ backgroundColor: "rgb(231, 214, 240)" }}
      />
      <input
        style={isError ? { borderColor: "red" } : { borderColor: "white" }}
        value={value3}
        onChange={(e) => setValue3(e.target.value)}
        type="text"
        placeholder="email"
        style={{ backgroundColor: "rgb(231, 214, 240)" }}
      />
      <button onClick={handleClick}>Add
      </button>
    </div>
  );
};

export default AddTodo;
