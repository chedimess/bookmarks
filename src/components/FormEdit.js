import React from "react";
import Form from "./Form";
import { useHistory } from "react-router-dom";
function FormEdit(props) {
  const history = useHistory();

  //function for add keyword
  const addkeyword = () => {
    setTimeout(() => {
      props.fetchDatakeyword(props.input, props.match.params.id);
    }, 2000);

    props.setkeywordinput("");
    history.push("/");
    props.setinput("");
    props.setedit(false);
  };

  //function for delete keyword
  const deletekeyword = () => {
    setTimeout(() => {
      props.fetchDatadeletekeyword(props.input, props.match.params.id);
    }, 2000);

    props.setkeywordinput("");
    history.push("/");
    props.setinput("");
    props.setedit(false);
  };

  return (
    <div>
      <Form
        input={props.input}
        setinput={props.setinput}
        id={props.match.params.id}
        fetchData={props.fetchData}
        edit={props.edit}
        setedit={props.setedit}
      />

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
                    <h3 className="card-title">Keyword Form</h3>
                  </div>
                  {/* /.card-header */}
                  {/* form start */}
                  <div>
                    <div className="card-body">
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Keyword</label>
                        <input
                          type="text"
                          className="form-control"
                          value={props.keywordinput}
                          onChange={(e) =>
                            props.setkeywordinput(e.target.value)
                          }
                          placeholder="enter keyword"
                        />
                        <div style={{ fontSize: "12", color: "red" }}></div>
                      </div>
                    </div>
                    {/* /.card-body */}
                    <div className="card-footer">
                      <button
                        type="submit"
                        className="btn btn-primary btn3"
                        onClick={addkeyword}
                      >
                        Submit
                      </button>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={deletekeyword}
                      >
                        Delete
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
    </div>
  );
}

export default FormEdit;
