import React from 'react';
import Layout from '../components/Layout';
import Edit from '@material-ui/icons/Edit';

const profile = () => {
    return (
        <Layout>
            <section className='profile'>
                <div className='detail'>
                    <a href="/profileupdate"><button className='update'><Edit/></button></a>
                    <h2>Profile</h2>
                    <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt="profile"/>
                    <p>Username</p>
                    <p>Email@mail.em</p>
                </div>
            </section>
            <style jsx>{ `
                 .profile {
                        color: #0A0924;
                        display: block;
                        margin: auto;
                        width:30%;
                        max-width: 80%; 
                        border: 1px solid white;
                        margin-top: 5%;
                        border-radius: 8px;
                        background: white; 
                        padding-top:2%;
                        padding-bottom:5%;
                        margin-bottom:2%;

                    }

                    p {
                        text-align:center;
                        

                    }

                    h2 {
                        text-align:center;
                    }

                    .update {
                        margin-top:3%;
                        margin-left:4%;
                        height: 50px;
                        width: 50px;
                        border-radius: 50%;
                        border: none;
                        background: green;
                        color: white;
                        
                    }

                    img {
                        width:40%;
                        display: block;
                        margin-left: auto;
                        margin-right: auto;
                    }
                   
                    `}
                </style>
        </Layout>
    );
};

export default profile;