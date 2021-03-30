import React from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Form({ input, setinput, fetchData, edit, setedit, id }) {
  const history = useHistory();

  //function for add url
  const addUrl = () => {
    if (input.includes("flickr") || input.includes("vimeo")) {
      setTimeout(() => {
        fetchData(input);
      }, 2000);
      setinput("");
      history.push("/");
    } else {
      alert("please fill in a flicker/vimeo URL");
    }
  };

  //function for add edit url
  const editUrl = () => {
    setTimeout(() => {
      fetchData(input, id);
    }, 2000);

    setinput("");
    setedit(false);
    history.push("/");
  };

  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header"></section>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {/* left column */}
            <div className="col-md-6">
              {/* general form elements */}
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">URL Form</h3>
                </div>
                {/* /.card-header */}
                {/* form start */}
                <div>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">URL</label>
                      <input
                        type="url"
                        className="form-control"
                        value={input}
                        onChange={(e) => setinput(e.target.value)}
                        placeholder="enter URL"
                      />
                      <div style={{ fontSize: "12", color: "red" }}></div>
                    </div>
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={edit ? editUrl : addUrl}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </section>
      {/* /.content */}
    </div>
  );
}

export default Form;
