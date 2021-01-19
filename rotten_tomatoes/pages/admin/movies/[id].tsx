import React from 'react';
import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';
import Edit from '@material-ui/icons/Edit';
import { GetStaticPaths, GetStaticProps } from 'next';
import { InferGetStaticPropsType } from 'next';
import { Movie } from '@material-ui/icons';

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/movies')
    const movies = await res.json()

    const paths = movies.map((movie: { id: { toString: () => any; }; }) => ({
        params: { id: movie.id.toString() },
        
      }))
    
      return { paths, fallback:false}
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  
    const res = await fetch(`http://localhost:3000/api/movie/${params.id}`);
    const movie = await res.json();

    return {
      props: {
        movie,
      },
    }
}
const Movieid = ({ movie }: InferGetStaticPropsType<typeof getStaticProps>) => {
    const router = useRouter();
    return (
        <Layout> 
            <a href="/admin/movies"><button className='back'>Back</button></a>
            <a href={`movies/edit/${movie.id}`}><button className='edit'><Edit/></button></a>
            <div className="see-movie">
                <div className='content'>
                    <div className='main'>
                        <h2>{movie.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/original${movie.image}`} alt="movie-poster"/>
                    </div> 
                    <div className='plot'>
                        <p className='sum'>{movie.summary}</p>
                        <h3>Genre:</h3>
                        <p>{movie.genre}</p>
                        <h3>Producer:</h3>
                        <p>{movie.producer}</p>
                        <h3>Release:</h3>
                        <p>{movie.date}</p>
                        <h3>Average rating:</h3>
                        <p>{movie.rating}</p>
                    </div>
                </div>
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

                .edit {
                    margin-top: 3%;
                    margin-left:3%;
                    border: none;
                    padding : 1%;
                    border-radius: 5px;
                    background: green;
                    color: white;
                }

                .edit:hover {
                    background:#00C716;
                    color:white;
                }

                .see-movie {
                    display: flex;
                    margin-left: 3%;
                    margin-top:3%;
                    margin-bottom:3%;
                    color:white;
                }
                .sum {
                    width:80%;
                }
                .content {
                    display:flex;
                    width: 50%;
                }
                .content img {
                    width:80%;
                }
                .plot {
                    margin-top:10%;
                    margin-right:5%;
                }
                .rating img {
                    width: 50%;
                }

            `}</style>
        </Layout>
    );
};

export default Movieid;