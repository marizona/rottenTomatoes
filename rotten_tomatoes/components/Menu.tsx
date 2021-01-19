import React, { useState } from 'react';
import Head from 'next/head';
import logo from '../public/logo.png';
import profile from '../public/profile.png';
import Dropdown from 'react-bootstrap/Dropdown';


const Menu = () => {

    return (
        <div className="Menu">
                <nav>
                    <ul>
                        <li><a href="/"><img src={logo} alt="logo"/></a></li>
                        {/* <li><a href="/favorite">Favorites</a></li> */}
                        <section className="login">
                            
                            <button className='signin'><a href='/login'>Login</a></button>
                            <button className='signup'><a href='/signup'>Join</a></button>  
                                        {/* WHEN LOGIN  */}
                            {/* <Dropdown>
                                <Dropdown.Toggle className='icon'>
                                    <img src={profile} alt="profile-icon"/> 
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/favorite">Favorite</Dropdown.Item>
                                    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                    <Dropdown.Item href="/profileupdate">Profile Update</Dropdown.Item>
                                    <Dropdown.Item href="#">Log Out</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>                          */}
                    </section>
                    </ul> 
                    
                </nav>
                <div className='line'></div>
            <style jsx>{`
                nav {
                    width:100%;
                    margin-top: 4%;
                    margin-bottom: 3%;
                }
                ul {
                    display: flex; 
                    list-style-type: none;
                    float: center;
                    color: white;
                    font-size: 20px;
                    justify-content: space-between;
                }

                ul a {
                    color: white;
                    text-decoration: none;
                }

                li {
                    margin-right: 20%;
                }

                li:hover {
                    color:#F21B42;
                    text-decoration: underline;
                }

                .login {
                    display: flex;
                    margin-right: 10%;
        
                }
                .signin {
                    border: none;
                    border-radius: 5px;
                    background: black;
                    padding: 15%;
                    color:#ffffff;
                    font-size:20px;
                    text-decoration:none;
                    margin-right: 8%;
                    
                }
                .signin:hover {
                    background-color:#0378A6;
                    color:black;
                }
                .signup {
                    border: none;
                    border-radius: 5px;
                    background: black;
                    color: white;
                    padding: 15%;
                    cursor:pointer;
                    font-size:20px;
                    text-decoration:none;
                }
                .signup:hover {
                    background:#025373;
                    color:black;
                }
                .line {
                    border-top: 1px solid white;
                    width: 100px;
                    float: center;
                }

                .icon {
                    background: transparent;
                    border: none;
                }
             `}    
            </style>
        </div>
    );
};

export default Menu;