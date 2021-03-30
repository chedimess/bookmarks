import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rowtab from "./Rowtab";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
$.DataTable = require("datatables.net");

function Table({ tabmark, settabmark, setinput, setedit, setkeywordinput }) {
  //destroy datatable before fetch data api
  useEffect(() => {
    setTimeout(() => {
      $("#example").DataTable().destroy();
    }, 2000);
  }, []);
  //initialise datatable when fetch data
  useEffect(() => {
    $("#example").DataTable({
      retrieve: true,
      bInfo: false,
      ordering: false,
      pageLength: 4,
    });

    if (tabmark.length === 0) {
      var table = $("#example").DataTable();

      table.clear().draw();
    }
  }, [tabmark]);

  return (
    <div className="container">
      <div className="container1">
        <Link to="/form/url/add">
          <button className="btn btn-primary"> + Add Url</button>
        </Link>
      </div>
      <table
        id="example"
        className="display table table-striped table-bordered"
      >
        <thead>
          <tr>
            <th>URL</th>
            <th>Title</th>
            <th>Auther</th>
            <th>Date</th>
            <th>Width</th>
            <th>Height</th>
            <th>Keyword</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tabmark.map((e) => (
            <Rowtab
              key={e.id}
              e={e}
              tabmark={tabmark}
              settabmark={settabmark}
              setinput={setinput}
              setedit={setedit}
              setkeywordinput={setkeywordinput}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
