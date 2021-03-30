import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Rowtab({
  e,
  tabmark,
  settabmark,
  setinput,
  setedit,
  setkeywordinput,
}) {
  //function for delete url
  const deleteitem = (index) => {
    let newtab = tabmark.filter((e) => e.id !== index);
    settabmark([...newtab]);
  };
  //function for get url when click on edit button
  const getinputurl = (lien) => {
    setinput(lien.url);
    setedit(true);
    setkeywordinput(lien.keyword);
  };

  return (
    <tr>
      <td>{e.url}</td>
      <td>{e.title}</td>
      <td>{e.author_name}</td>
      <td>{e.d}</td>
      <td>{e.width}</td>
      <td>{e.height}</td>
      <td>{e.keyword}</td>
      <td>
        <Link to={`/form/edit/${e.id}`}>
          <button
            className="btn btn-info btn-sm a"
            onClick={() => getinputurl(e)}
          >
            {" "}
            <i className=" fas fa-pencil-alt"></i>
          </button>
        </Link>
        <button
          className="btn btn-danger btn-sm btn1"
          onClick={() => deleteitem(e.id)}
        >
          <i className=" fas fa-trash"></i>
        </button>
      </td>
    </tr>
  );
}

export default Rowtab;
