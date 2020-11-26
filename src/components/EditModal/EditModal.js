import React, { useState } from "react";
import "./EditModal.css";

const EditModal = (props) => {
  let [item, setItem] = useState(props.editTodo);

  function handleEditInput1(e) {
    let newObj = { ...item };
    newObj.name = e.target.value;
    setItem(newObj);
  }
  function handleEditInput2(e) {
    let newObj = { ...item };
    newObj.lastName = e.target.value;
    setItem(newObj);
  }
  function handleEditInput3(e) {
    let newObj = { ...item };
    newObj.number = e.target.value;
    setItem(newObj);
  }
  function handleSave() {
    props.handleSaveTask(item);
  }
  return (
    <div className="edit-modal">
      <div className="inner-modal">
        <div className="close">
          <button onClick={props.handleCloseModal} className="btn-closer">
            X
          </button>
        </div>
        <input
          onChange={handleEditInput1}
          value={item.name}
          type="text"
          className="inp-edit1"
        />
        <input
          onChange={handleEditInput2}
          value={item.lastName}
          type="text"
          className="inp-edit2"
        />
        <input
          onChange={handleEditInput3}
          value={item.number}
          type="text"
          className="inp-edit3"
        />
        <button onClick={handleSave} className="btn-save">
          Save
        </button>
      </div>
    </div>
  );
};

export default EditModal;
