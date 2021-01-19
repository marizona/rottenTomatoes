import React from 'react';
import Layout from '../components/Layout';

const profileupdate = () => {
    return (
        <Layout>
             <div className="profile-user">
                    <h2>Update Profile</h2>
                    <form action="#" method='post'>
                        <p>Username:</p>
                        <input type="text" name='username' placeholder="Username" /><br/>
                        <p>Email:</p>
                        <input type="text" name='email' placeholder="Email" /><br/>
                        <p>Password:</p>
                        <input type="password" name='pwd' placeholder="password" /><br/>
                        <input type="submit" value="update" className='smb'/>
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
                    .profile-user {
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

export default profileupdate;