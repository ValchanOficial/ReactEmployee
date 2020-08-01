import React, { useState, useCallback } from "react";

import { filter, sortByTarget, reverseList } from '../../utils/util';

import "./styles.css";

const Filter = ({employerList, setList}) => {
  const [context, setContext] = useState('');

  const sortList = useCallback((targetContext) => ({
		"name": sortByTarget(employerList, 'employee_name').map(el => el),
		"age": sortByTarget(employerList, 'employee_age').map(el => el),
		"salary": sortByTarget(employerList, 'employee_salary').map(el => el),
		"": setList(employerList)
  })[targetContext], 
  [employerList, setList]);
  
  const handleTyping = useCallback((value) => setList(filter(value, employerList)), [employerList, setList]);
  const handleClick = useCallback((textContent) => setContext(context !== textContent ? textContent: ''), [context]);
  const handleSortList = useCallback(({target: {classList}}, targetContext) => setList(reverseList(classList, sortList(targetContext))),[setList, sortList]);

  return (
    <div className="filter">
      <input type="text" className="filters__search__input" placeholder="Search.." 
        onChange={e => handleTyping(e.target.value)}
        onPaste={e => handleTyping(e.target.value)}
			/>
      <div className="filter__group">
        <button 
          className={`filter__item ${context === 'name' && 'is-selected'}`}
          onClick={(e) => {handleClick('name'); handleSortList(e, 'name');}}>
          Name
        </button>
        <button 
          className={`filter__item ${context === 'age' && 'is-selected'}`}
          onClick={(e) => {handleClick('age'); handleSortList(e, 'age');}}>
          Age
        </button>
        <button 
          className={`filter__item ${context === 'salary' && 'is-selected'}`}
          onClick={(e) => {handleClick('salary'); handleSortList(e, 'salary');}}>
          Salary
        </button>
      </div>
    </div>
  );
};

export default Filter;
