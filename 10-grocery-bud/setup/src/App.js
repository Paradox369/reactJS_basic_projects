import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import { FaMandalorian } from "react-icons/fa";

// function to pull data from the browser's local storage
const getLocalStorage = () => {
  let list = localStorage.getItem("list");

  if (list) return (list = JSON.parse(localStorage.getItem("list")));
  else return [];
};

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) showAlert(true, "danger", "enter a value man, come on!");
    else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) return { ...item, title: name };

          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "entry updated successfully");
    } else {
      showAlert(true, "success", "item added successfully");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  // function to check alert values
  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show: show, type: type, msg: msg });
  };

  const clearList = () => {
    showAlert(true, "danger", "list cleared");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  // stores the grocery list to the browser's local storage
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>grocery list</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. Garri"
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
