import React from 'react';
import Layout from '../components/Layout';

const passwordforget = () => {
    return (
       <Layout>
           <div className="pwdfgt">
               <h2>Password forgotten?</h2>
               <br/>
               <form action="" method="post">
                   <p>Please enter your email:</p>
                   <input type="text" name="email" placeholder="Email"/>
                   <br/>
                   <input className='btn' type="submit" value="Send"/>
               </form>
               <style jsx>{ `
                 .pwdfgt {
                        color: #0A0924;
                        display: block;
                        margin: auto;
                        width:30%;
                        max-width: 80%; 
                        border: 1px solid white;
                        margin-top: 5%;
                        border-radius: 8px;
                        background: white; 

                    }
                    h2 {
                        text-align: center;
                        margin-top: 5%;
                        color: #0093E9;
                    }

                    form {
                        margin-left: 3%
                    }
                    input {
                        display: block;
                        margin: auto;
                        
                    }
                    p {
                        text-align: center;
                        
                    }
                    .btn{
                        border: none;
                        border-radius: 5px;
                        padding: 10px;
                        background: black;
                        color: white;
                        margin-bottom: 5%;
                    }
                    .btn:hover{
                        background:#0093E9;
                        color:black;
                    }
                    input {
                        background:#8BC6EC;
                        border-radius: 5px;
                        color:white;
                        border:none;
                    }
                    `}

                </style>

           </div>
       </Layout>
    );
};

export default passwordforget;