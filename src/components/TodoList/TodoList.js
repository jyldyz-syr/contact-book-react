import React from "react";
import Avatar from '@material-ui/core/Avatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



const TodoList = (props) => {
  return (
    <ul className="ul_list">
      {props.todos.map((item, index) => (
        <li className="liStyle" key={item.id}>
          <Avatar alt="Julzy" src="julzReact.jpg"/>{item.name} ,  {item.lastName} , {item.number}
          <button onClick={() => props.handleDelete(item.id)}> Delete</button>
          <button className="btn-edit" onClick={() => props.handleEdit(index)}>
            Edit
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
