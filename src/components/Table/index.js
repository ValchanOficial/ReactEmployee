import React from "react";

import { valueToBRL } from '../../utils/util';

import './styles.css';

const Table = ({ list }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
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
                        <td colspan="3">Employer not found!</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default Table;
