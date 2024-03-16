let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(employee => {
      if (employee.profession === "developer") {
        console.log(employee);
      }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    let employee = {
      id : 4,
      name : "susan",
      age : 20,
      profession : "intern"
    }
    arr.push(employee);
    console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter(employee => employee.profession !== "admin");
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [
      { id: 4, name: "Raj", age: "19", profession: "inter" },
      { id: 5, name: "Roy", age: "29", profession: "admin" },
      { id: 6, name: "Henry", age: "18", profession: "developer" },
    ];
  
    let a = arr.concat(arr2);
    console.log(a);
  }

  PrintDeveloperbyMap();
  PrintDeveloperbyForEach();
  addData();
  removeAdmin();
  concatenateArray();