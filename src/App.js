import React, { useState } from "react";
import "./App.css";
import Header from "./header";
import Footer from "./footer";
import Adde from "./inputer";
import Note from "./Note";

function App() {
  const [Items, addItem] = useState([]);
  const addNote = (note) => {
    addItem((prevData) => {
      return [...prevData, note];
    });
  };

  const onDelete = (id) => {
    addItem((prevData) => {
      return prevData.filter((currData, indx) => {
        return indx !== id;
      });
    });
  };

  return (
    <>
      <Header />
      <Adde passNote={addNote} />
      {Items.map((currData, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={currData.title}
            notes={currData.notes}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;
