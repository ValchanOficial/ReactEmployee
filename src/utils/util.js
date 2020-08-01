export const reverseList = (classList, list) => !classList.contains('is-selected') ? list : list.reverse();

export const filter = (value, list) => list.filter(({employee_name, employee_age, employee_salary}) => {
    return employee_name.toLowerCase().includes(value.toLowerCase()) || 
    employee_age.toString().includes(value.toString()) || 
    employee_salary.toString().includes(value.toString())
});

export const sortByTarget =  (list, target) => list.sort((a, b) => a[target].toString().localeCompare(b[target].toString()));

export const valueToBRL = (value) => Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
