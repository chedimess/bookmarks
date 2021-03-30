import React, { useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import axios from "axios";
import Table from "./components/Table";
import Form from "./components/Form";
import FormEdit from "./components/FormEdit";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  //state array  url
  const [tabmark, settabmark] = useState([]);
  //state input url
  const [input, setinput] = useState("");
  //state for edit
  const [edit, setedit] = useState(false);
  //state for keyword
  const [keywordinput, setkeywordinput] = useState("");

  //function fetchdata of api when enter url
  const fetchData = async (input, index) => {
    //url of flickr
    if (input.includes("flickr")) {
      const result = await axios.get(
        `https://cors-anywhere.herokuapp.com/http://www.flickr.com/services/oembed/?format=json&url=${input}`
      );
      //create date and put it in the resut data
      let d = new Date();
      let n;
      let m;
      let y = d.getFullYear();

      if (d.getDate() < 10) {
        n = "0" + d.getDate();
      } else {
        n = d.getDate();
      }

      if (d.getMonth() < 10) {
        m = "0" + (d.getMonth() + 1);
      } else {
        m = d.getMonth();
      }

      result.data.d = n + "/" + m + "/" + y;
      //put input url in result data
      result.data.url = input;
      //put keyword in result data
      result.data.keyword = "no keyword";

      if (edit) {
        let elementedit = tabmark.find((e) => e.id === index);
        result.data.id = index;
        let newtab = tabmark.slice();
        newtab[newtab.indexOf(elementedit)] = result.data;
        settabmark(newtab);
      } else {
        result.data.id = uuidv4();
        settabmark([...tabmark, result.data]);
      }
    }
    //url of flickr
    if (input.includes("vimeo")) {
      const result = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://vimeo.com/api/oembed.json?url=${input}`
      );

      let d = new Date();
      let n;
      let m;
      let y = d.getFullYear();

      if (d.getDate() < 10) {
        n = "0" + d.getDate();
      } else {
        n = d.getDate();
      }

      if (d.getMonth() < 10) {
        m = "0" + (d.getMonth() + 1);
      } else {
        m = d.getMonth();
      }

      result.data.d = n + "/" + m + "/" + y;
      result.data.keyword = "no keyword";
      result.data.url = input;

      if (edit) {
        let elementedit = tabmark.find((e) => e.id === index);
        result.data.id = index;
        let newtab = tabmark.slice();
        newtab[newtab.indexOf(elementedit)] = result.data;
        settabmark(newtab);
      } else {
        result.data.id = uuidv4();
        settabmark([...tabmark, result.data]);
      }
    }
  };
  //fetch data of api when add keyword
  const fetchDatakeyword = async (input, index) => {
    if (input.includes("flickr")) {
      const result = await axios.get(
        `https://cors-anywhere.herokuapp.com/http://www.flickr.com/services/oembed/?format=json&url=${input}`
      );

      let d = new Date();
      let n;
      let m;
      let y = d.getFullYear();

      if (d.getDate() < 10) {
        n = "0" + d.getDate();
      } else {
        n = d.getDate();
      }

      if (d.getMonth() < 10) {
        m = "0" + (d.getMonth() + 1);
      } else {
        m = d.getMonth();
      }

      result.data.d = n + "/" + m + "/" + y;

      result.data.url = input;
      result.data.keyword = "no keyword";
      //update array tabmark with keyword entred
      let editelem = tabmark.find((e) => e.id === index);
      result.data.id = index;
      result.data.keyword = keywordinput;
      let newtab = tabmark.slice();
      newtab.splice(newtab.indexOf(editelem), 1, result.data);
      settabmark(newtab);
    }

    if (input.includes("vimeo")) {
      const result = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://vimeo.com/api/oembed.json?url=${input}`
      );

      console.log(result.data);

      let d = new Date();
      let n;
      let m;
      let y = d.getFullYear();

      if (d.getDate() < 10) {
        n = "0" + d.getDate();
      } else {
        n = d.getDate();
      }

      if (d.getMonth() < 10) {
        m = "0" + (d.getMonth() + 1);
      } else {
        m = d.getMonth();
      }

      result.data.d = n + "/" + m + "/" + y;

      result.data.keyword = "no keyword";
      result.data.url = input;

      //update array tabmark with keyword entred
      let editelem = tabmark.find((e) => e.id === index);
      result.data.id = index;
      result.data.keyword = keywordinput;
      let newtab = tabmark.slice();
      newtab.splice(newtab.indexOf(editelem), 1, result.data);
      settabmark(newtab);
    }
  };
  //fetch data of api when delete keyword
  const fetchDatadeletekeyword = async (input, index) => {
    if (input.includes("flickr")) {
      const result = await axios.get(
        `https://cors-anywhere.herokuapp.com/http://www.flickr.com/services/oembed/?format=json&url=${input}`
      );

      let d = new Date();
      let n;
      let m;
      let y = d.getFullYear();

      if (d.getDate() < 10) {
        n = "0" + d.getDate();
      } else {
        n = d.getDate();
      }

      if (d.getMonth() < 10) {
        m = "0" + (d.getMonth() + 1);
      } else {
        m = d.getMonth();
      }

      result.data.d = n + "/" + m + "/" + y;

      result.data.url = input;
      result.data.keyword = "no keyword";

      let editelem = tabmark.find((e) => e.id === index);
      result.data.id = index;
      let newtab = tabmark.slice();
      newtab.splice(newtab.indexOf(editelem), 1, result.data);
      settabmark(newtab);
    }

    if (input.includes("vimeo")) {
      const result = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://vimeo.com/api/oembed.json?url=${input}`
      );

      let d = new Date();
      let n;
      let m;
      let y = d.getFullYear();

      if (d.getDate() < 10) {
        n = "0" + d.getDate();
      } else {
        n = d.getDate();
      }

      if (d.getMonth() < 10) {
        m = "0" + (d.getMonth() + 1);
      } else {
        m = d.getMonth();
      }

      result.data.d = n + "/" + m + "/" + y;

      result.data.keyword = "no keyword";
      result.data.url = input;

      let editelem = tabmark.find((e) => e.id === index);
      result.data.id = index;
      let newtab = tabmark.slice();
      newtab.splice(newtab.indexOf(editelem), 1, result.data);
      settabmark(newtab);
    }
  };

  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        render={() => (
          <Table
            settabmark={settabmark}
            tabmark={tabmark}
            setinput={setinput}
            setedit={setedit}
            setkeywordinput={setkeywordinput}
          />
        )}
      />

      <Route
        path="/form/url/add"
        render={() => (
          <Form
            input={input}
            setinput={setinput}
            fetchData={fetchData}
            edit={edit}
            setedit={setedit}
          />
        )}
      />
      <Route
        path="/form/edit/:id"
        render={(props) => (
          <FormEdit
            input={input}
            setinput={setinput}
            fetchDatakeyword={fetchDatakeyword}
            edit={edit}
            setedit={setedit}
            keywordinput={keywordinput}
            setkeywordinput={setkeywordinput}
            tabmark={tabmark}
            settabmark={settabmark}
            fetchData={fetchData}
            fetchDatadeletekeyword={fetchDatadeletekeyword}
            {...props}
          />
        )}
      />
    </BrowserRouter>
  );
}

export default App;
