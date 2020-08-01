import React, { useCallback } from "react";
import { filter } from '../../utils/util';

import "./styles.css";

const Filter = ({employerList, setList}) => {

  const handleTyping = useCallback((value) => setList(filter(value, employerList)), [employerList, setList]);

  return (
    <div className="filter">
      <input type="text" placeholder="Search.." 
        onChange={e => handleTyping(e.target.value)}
        onPaste={e => handleTyping(e.target.value)}
			/>
    </div>
  );
};

export default Filter;
