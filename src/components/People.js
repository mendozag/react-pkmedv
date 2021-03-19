import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import NavbarComponent from "./Navbar";

//https://jsonplaceholder.typicode.com/users

const People = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        console.log("Respuesta: ", res);
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>People</h1>
      <Table striped bordered hover>
        <tbody>
          {users.map(user => (
            <tr>
              <td>{user.name}</td>
              <td>{user.company.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default People;
