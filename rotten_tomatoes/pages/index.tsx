import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import MainCarousel from "../components/MainCarousel";
import { Card } from "react-bootstrap";
import Filter from "../components/Filter";
import { GetStaticProps } from "next";
import { InferGetStaticPropsType } from "next";
import { useState } from "react";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default function Home({
  movies: moviesProp,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [movies, setMovies] = useState(moviesProp);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className={styles.container} id='up'>
      <Layout>
        <main >
          <MainCarousel />
        </main>
        <nav className="filter">
          <Filter setMovies={setMovies} />
        </nav>
        <article className={styles.mov}>
          {movies.map((movie) => (
            <Card style={{ width: "20rem" }}>
              <a href={`/movie/${movie.id}`}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/original${movie.image}`}
                />
              </a>
              <Card.Body>
                <Card.Title>
                  {movie.title}
                  <span>{movie.rating}</span>
                </Card.Title>
                <Card.Text>{movie.summary}</Card.Text>
              </Card.Body>
            </Card>

          ))}
        </article>
        <div className="arrow">
          <a href="#up">
            <button className="aw"><ArrowUpwardIcon/></button>
          </a>
        </div>
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/movies");
  const movies = await res.json();

  return {
    props: {
      movies,
    },
  };
};
