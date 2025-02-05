import { React, useState } from "react";
import { Link } from "react-router-dom";
function Form() {
  const [title, setTitle] = useState();

  const handleTitle = (e) => {
    setTitle(e.currentTarget.value);
  };

  return (
    <>
      <h1>form</h1>
      <input type="text" onChange={handleTitle} />
      <br />
      {title}
      <Link to="/"> Go Back</Link>
    </>
  );
}

export default Form;
