import { useState, useEffect } from "react";

function Question3() {
  const obj = [
    {
      firstname: "John",
      lastname: "Doe",
      email: "j@example.com",
      gender: "male",
    },
    {
      firstname: "Sean",
      lastname: "Parker",
      email: "sean@example.com",
      gender: "male",
    },
    {
      firstname: "Tony",
      lastname: "Stark",
      email: "tony@example.com",
      gender: "male",
    },
    {
      firstname: "Sarah",
      lastname: "Smith",
      email: "sarah@example.com",
      gender: "female",
    },
  ];

  // Due "No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled". I am unable to fetch the data.
  // Since the changes to Blueprint Interative's API, I was able to fetch the data as text. However, I am unable to convert their data into json using the .json() method. In lieu, I opted to create an object with the data provided. Then, I made the table using object I created.
  const [data, setData] = useState(null);
  const URL = "https://blueprintinteractive.com/test.json/";
  const fetchData = async () => {
    const response = await fetch(URL);
    console.log(response);
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createTable = (people) => {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {people.map((person) => (
              <tr>
                <td>{person.firstname}</td>
                <td>{person.lastname}</td>
                <td>{person.email}</td>
                <td>{person.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <>
      <br />
      {createTable(obj)}
    </>
  );
}

export default Question3;
