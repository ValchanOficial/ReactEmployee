import React, { useState, useCallback } from "react";
import { FaSort } from 'react-icons/fa';

import { valueToBRL, reverseList, sortByTarget } from '../../utils/util';

import './styles.css';

const Table = ({ list, employerList, setList }) => {
    const [context, setContext] = useState('');

    const sortList = useCallback((targetContext) => ({
        "name": sortByTarget(employerList, 'employee_name').map(el => el),
        "age": sortByTarget(employerList, 'employee_age').map(el => el),
        "salary": sortByTarget(employerList, 'employee_salary').map(el => el),
        "": setList(employerList)
    })[targetContext], 
    [employerList, setList]);

    const handleClick = useCallback((textContent) => setContext(context !== textContent ? textContent: ''), [context]);
    const handleSortList = useCallback(({target: {classList}}, targetContext) => setList(reverseList(classList, sortList(targetContext))),[setList, sortList]);

    return (
        <table>
            <thead>
                <tr>
                    <th
                        className={`${context === 'name' && 'is-selected'}`}
                        onClick={(e) => {handleClick('name'); handleSortList(e, 'name');}}
                    >Name <FaSort/></th>
                    <th
                        className={`${context === 'age' && 'is-selected'}`}
                        onClick={(e) => {handleClick('age'); handleSortList(e, 'age');}}
                    >Age <FaSort/></th>
                    <th
                        className={`${context === 'salary' && 'is-selected'}`}
                        onClick={(e) => {handleClick('salary'); handleSortList(e, 'salary');}}
                    >Salary <FaSort/></th>
                </tr>
            </thead>
            <tbody>
                {list.length !== 0 ? list.map(({id, employee_name, employee_salary, employee_age}) =>
                    <tr key={id}>
                        <td>{employee_name}</td>
                        <td>{employee_age}</td>
                        <td>{valueToBRL(employee_salary)}</td>
                    </tr>
                ) : (
                    <tr>
                        <td colSpan="3">Employer not found!</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default Table;
