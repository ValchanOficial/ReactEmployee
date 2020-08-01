const url = "http://dummy.restapiexample.com/api/v1/employees";

class Api {
  static getAll = () => fetch(url).then(res => res.json());
}

export default Api;
