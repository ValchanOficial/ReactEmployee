import React, { useState, useEffect } from "react";
import "./styles.css";

import Api from "../src/services/api";

import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Table from "../src/components/Table";

const App = () => {
  const [employerList, setEmployerList] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    Api.getAll()
      .then(({ data }) => {
        setEmployerList(data);
        setList(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header employerList={employerList} setList={setList} />
      <Table list={list} />
      <Footer />
    </div>
  );
};

export default App;
