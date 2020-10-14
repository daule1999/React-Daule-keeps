import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

function Adde(props) {
  const [note, seteNote] = useState({
    title: "",
    notes: "",
  });
  const inputEvent = (event) => {
    const { name, value } = event.target;
    seteNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const addNote = () => {
    props.passNote(note);
    seteNote({
      title: "",
      notes: "",
    });
  };
  const [expand, setExpand] = useState(false);
  const changeExpand = () => {
    setExpand(true);
  };
  const reverseExpand = () => {
    setExpand(false);
  };
  return (
    <>
      <div className="main_notes" onDoubleClick={reverseExpand}>
        <form>
          {expand ? (
            <input
              type="text"
              placeholder="Title"
              autoComplete="off"
              name="title"
              value={note.title}
              onChange={inputEvent}
            />
          ) : null}

          <textarea
            rows=" "
            column=" "
            name="notes"
            placeholder="Write A Note"
            value={note.notes}
            onClick={changeExpand}
            onChange={inputEvent}
          ></textarea>
          {expand ? (
            <Button onClick={addNote} className="MuiButton-root">
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
}
export default Adde;
