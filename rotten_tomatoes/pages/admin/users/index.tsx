import React from "react";
import Layout from "../../../components/Layout";
import Table from "react-bootstrap/Table";
import Edit from "@material-ui/icons/Edit";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";
import axios from "axios";

export default function index({
  users,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const onSubmit = async (id) => {
    axios.delete("http://localhost:3000/api/user/" + id).then((response) => {
      console.log(response);
      window.location.reload();
    });
  };
  return (
    <Layout>
      <div className="tbuser">
        <a href="/admin">
          <button className="back">Back</button>
          </a>
          <a href="/admin/users/add">
                    <button className="add">
                      <AddCircleIcon />
                    </button>
          </a>
        
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.admin}</td>
                <td>
                  
                  <a href={`/admin/users/edit/${user.id}`}>
                    <button className="edit">
                      <Edit />
                    </button>
                  </a>

                  <a href="#">
                    <button
                      type="submit"
                      className="del"
                      onClick={() => onSubmit(user.id)}
                    >
                      X
                    </button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <style jsx>{`
        .edit {
          height: 50px;
          width: 50px;
          border-radius: 50%;
          font-weight: bold;
          border: none;
          background: green;
          color: white;
        }

        .edit:hover {
          background: #00c716;
        }

        .add {
          height: 50px;
          width: 50px;
          border-radius: 50%;
          font-weight: bold;
          border: none;
          background: blue;
          color: white;
          margin-left:3%;
        }

        .add:hover {
          background: #00c716;
        }

        .del {
          height: 50px;
          width: 50px;
          border-radius: 50%;
          font-weight: bold;
          border: none;
          background: #e13900;
          color: white;
        }

        .del:hover {
          background: #ad1800;
        }

        .back {
          margin-top: 1%;
          margin-left: 3%;
          margin-bottom: 3%;
          border: none;
          padding: 1%;
          border-radius: 5px;
          background: black;
          color: white;
        }

        .back:hover {
          background: #0093e9;
          color: white;
        }
        .tbuser {
          margin-top: 2%;
        }
        th {
          color: white;
        }
        td {
          color: white;
        }
      `}</style>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/users");
  const users = await res.json();
  return {
    props: {
      users,
    },
  };
};

// export default index;
