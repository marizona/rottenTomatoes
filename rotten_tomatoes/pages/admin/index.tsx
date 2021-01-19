import React from 'react';
import Layout from '../../components/Layout';

const index = () => {
    return (
        <Layout>
            <h2>Administration</h2>
            <section className='index'>
                <div className='user'>
                    <a href="admin/users" >Users</a>
                </div>
                <div className='movie'>
                    <a href="admin/movies">Movies</a>
                </div>
                
            </section>
            <style jsx>{ `
                h2 {
                    text-align:center;
                    margin-top:3%;
                    color:white;
                }
                 .index {
                        color: #0A0924;
                        display: flex;
                        justify-content:space-between;
                        margin: auto;
                        width:30%;
                        max-width: 80%; 
                        border: 1px solid white;
                        margin-top: 5%;
                        border-radius: 8px;
                        background: white;
                        padding: 5%;
                        font-size: 25px;
                    }

                    a {
                        text-decoration:none;
                        color:black
                        
                    }

                    .user {
                        padding: 20px;
                        background:white;
                    }

                    .user:hover {
                        background:#80D0C7;
                        color:white;
                    }

                    .movie {
                        padding: 20px;
                        background:white;
                    }

                    .movie:hover {
                        background:#80D0C7;
                        color:white;
                    }

                    `}

                </style>
           
        </Layout>
    );
};

export default index;