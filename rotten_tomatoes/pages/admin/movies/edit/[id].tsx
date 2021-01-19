import React, {useState} from 'react';
import Layout from '../../../../components/Layout';

import axios from 'axios';



const edit = () => {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [genre, setGenre] = useState("");
    const [producer, setProducer] = useState("");
    const [date, setDate] = useState("");
    const [poster, setPoster] = useState("");

    const onSubmit = async () => {

        var id = window.location.pathname.replace("/admin/movies/edit/", "");

        axios
            .put("http://localhost:3000/api/movie/" + id, {
                title:title,
                summary:summary,
                genre:genre,
                producer:producer,
                date:date,
                image:poster,
            })
            .then((response) => {
                console.log(response);
            });
    };



    
    return (
        <Layout>
            <a href="/admin/movies"><button className='back'>Back</button></a>
             <div className="edit-movie">
                    <h2>Edit Movie </h2>
                    <form action="javascript:void(0)" onSubmit={onSubmit}>
                        <p>Title:</p>
                        <input 
                            type="text" 
                            name="title"  
                            onChange={(event) => setTitle(event.target.value)}
                        />
                        <br/>
                        <p>Summary:</p>
                        <input 
                            type="text" 
                            name="summary" 
                            className='sum' 
                            onChange={(event) => setSummary(event.target.value)}
                        />
                        <br/>
                        <p>Genre:</p>
                        <input 
                            type="text" 
                            onChange={(event) => setGenre(event.target.value)}
                        />
                        <br/>
                        <p>Producer:</p>
                        <input 
                            type="text" 
                            name="producer" 
                            onChange={(event) => setProducer(event.target.value)}
                        />
                        <br/>
                        <p>Date:</p>
                        <input 
                            type="text" 
                            name="date" 
                            onChange={(event) => setDate(event.target.value)}
                        />
                        <br/>
                        <p>Poster:</p>
                        <input 
                            type="text" 
                            name="image" 
                            onChange={(event) => setPoster(event.target.value)}
                        />
                        <br/>

                        <input type="submit" name="edit" value="Edit" className='smb'/><br/>
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
                    .edit-movie {
                        color: #0A0924;
                        display: block;
                        margin: auto;
                        width:30%;
                        max-width: 80%; 
                        border: 1px solid white;
                        margin-top: 2%;
                        border-radius: 8px;
                        background: white;
                        margin-bottom:3%;
                    }
                    .sum {
                        height:100px;
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