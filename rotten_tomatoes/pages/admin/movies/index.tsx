import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import Table from 'react-bootstrap/Table';
import Edit from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';
import axios from 'axios';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';


export const getStaticProps: GetStaticProps = async (context) => {
  
    const res = await fetch('http://localhost:3000/api/movies');
    const movies = await res.json();

    return {
      props: {
        movies,
      },
    }
}

const index = ({ movies }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const onSubmit = async (id) => {
        axios.delete("http://localhost:3000/api/movie/" + id).then((response) => {
          console.log(response);
          window.location.reload();
        });
      };

    return (
        <Layout>
            <a href="/admin" id="up"><button className='back'>Back</button></a>
            <a href="/admin/movies/add"><button className="add"><AddCircleIcon/></button></a>
            <div className='tbmovie'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Producer</th>
                        <th>Release</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {movies.map((movie: { id: React.ReactNode; title: React.ReactNode; producer: React.ReactNode; date: React.ReactNode; }) => (
                        <tr>
                        <td>{movie.id}</td>
                        <td>{movie.title}</td>
                        <td>{movie.producer}</td>
                        <td>{movie.date}</td>
                        <td>
                            <a href={`movies/${movie.id}`}>
                                <button className='see'>
                                    <VisibilityIcon/>
                                </button>
                            </a> 
                        
                            <a href={`movies/edit/${movie.id}`}>
                                <button className='edit'>
                                    <Edit/>
                                </button>
                            </a> 
                        
                            <a href="#">
                                <button className='del' onClick={() => onSubmit(movie.id)}>X</button>
                            </a>
                        </td>
                        </tr>
                        ))} 
                    </tbody>
                </Table>

                <div className="arrow">
          <a href="#up">
            <button className="aw"><ArrowUpwardIcon/></button>
          </a>
        </div>
            </div>
            <style jsx>{`
                    .see {
                        height: 50px;
                        width: 50px;
                        border-radius: 50%;
                        font-weight: bold;
                        border: none;
                        background: #EBD807;
                        color: white;
                        
                    }
                    .see:hover {
                        background:#E5F507;
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
                    .tbmovie {
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
};

export default index;
