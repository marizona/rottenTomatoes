import React from "react";
import Layout from "../../../../components/Layout";
import axios from "axios";

import { useState } from "react";

const edit = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [admin, setAdmin] = useState("");

  const onSubmit = async () => {
    var id = window.location.pathname.replace("/admin/users/edit/", "");
    axios
      .put("http://localhost:3000/api/user/" + id, {
        name: username,
        email: email,
        admin: admin,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <Layout>
      <a href="/admin/users">
        <button className="back">Back</button>
      </a>
      <div className="edit-user">
        <h2>Edit User</h2>
        <form action="javascript:void(0)" onSubmit={onSubmit}>
          <p>Username:</p>
          <input
            type="text"
            placeholder="Username"
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <p>Email:</p>
          <input
            type="text"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <div className="admin">
            <p>Admin:</p>
            <select
              name=""
              id=""
              onChange={(event) => setAdmin(event.target.value)}
            >
              <option value="0">No</option>
              <option value="1">Yes</option>
            </select>
          </div>
          <input type="submit" value="Add" className="smb" />
        </form>
      </div>
      <style jsx>{`

                    .back {
                        margin-top: 3%;
                        margin-left:3%;
                        border: none;
                        padding : 1%;
                        border-radius: 5px;
                        background: black;
                        color: white;
                    }

                    .back:hover {
                        background:#0093E9;
                        color:white;
                    }
                    h2 {
                        text-align:center;
                        margin-top: 5%;
                        color: #0093E9;
                    }
                    .edit-user {
                        color: #0A0924;
                        display: block;
                        margin: auto;
                        width:30%;
                        max-width: 80%; 
                        border: 1px solid white;
                        margin-top: 2%;
                        border-radius: 8px;
                        background: white;
                    }
                
                    th {
                        color:white;
                    }
                    td {
                        color:white;
                    }
                    p {
                        text-align:center;
                    }

                    input {
                        display: block;
                        margin: auto;
                        
                    }
                    .admin {
                        display: block;
                        margin: auto;
                    }
                }
                .smb{
                    border: none;
                    border-radius: 5px;
                    padding: 15px;
                    background: black;
                    color: white;
                    margin-bottom: 5%;
                }
                .smb:hover{
                    background:#0093E9;
                    color:black;
                }

                `}</style>
    </Layout>
  );
};

export default edit;
