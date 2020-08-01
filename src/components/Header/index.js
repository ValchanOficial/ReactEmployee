import React from "react";

import Filter from '../Filter';

import './styles.css';

const Header = ({employerList, setList}) => {
  return (
    <div className="container">
      <h1 className="title">Employers</h1>
      <Filter employerList={employerList} setList={setList} />
    </div>
  );
};

export default Header;
