import React, { useState } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import Favorite from "@material-ui/icons/Favorite";
import { GetStaticProps } from "next";
import { GetStaticPaths } from "next";
import { InferGetStaticPropsType } from "next";
import axios from "axios";

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/movies");
  const movies = await res.json();

  const paths = movies.map((movie: { id: { toString: () => any } }) => ({
    params: { id: movie.id.toString() },
  }));

  return { paths, fallback: false };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/movie/${params.id}`);
  const movie = await res.json();

  return {
    props: {
      movie,
    },
  };
};

const Movieid = ({ movie }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
 

  const onSubmit = async () => {
    var id = window.location.pathname.replace("/movie/", "");
    
    axios
      .post("http://localhost:3000/api/postRating", {
        rating: rating,
        id_movies:id,
        id_users:1,
      
      })
      .then((response) => {
        console.log(response);
        window.location.reload()
      });
  };

  const addReview = async () => {
    var id = window.location.pathname.replace("/movie/", "");

    axios
        .post("http://localhost:3000/api/postReview", {
            review:review,
            id_movies:id,
            id_users:5,
        })
        .then((response) => {
            console.log(response);
            window.location.reload()
        });
};

  return (
    <Layout>
      <a href="/">
        <button className="back">Back</button>
      </a>
      <div className="movie">
        <div className="main">
          <h2>
            {movie.title} <span className='rt'>{movie.rating}</span>{" "}
          </h2>
          <div className="fav">
            <Favorite />
          </div>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.image}`}
            alt="movie-poster"
          />
        </div>
        <div className="plot">
          <p className="sum">{movie.summary}</p>
          <p>
            <span>Genre:</span> {movie.genre}
          </p>
          <p>
            <span>Producer:</span> {movie.producer}{" "}
          </p>
          <p>
            <span>Release:</span> {movie.date}
          </p>
          <label for="pet-select">Rate me:</label>

          <select name="pets" id="pet-select"  onChange={(event) => setRating(event.target.value)}>
            <option value="">stars</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select><br/>
          <input type="submit" value="Rate this movie" className="btn-rt" onClick={()=> onSubmit()} />
          
        </div>
      </div>
      <section className="comment">
        <a href="/movie/Comment"><h4>Review</h4></a>
        {/* <div className="display-comment">
          <p>Author</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            Morbi a bibendum metus.{" "}
          </p>
        </div> */}
        <div className="add-comment">
        <form action="#" method='post'>
                        <textarea 
                            name="review" 
                            id="review" 
                            cols="100" 
                            rows="10"
                            onChange={(event)=> setReview(event.target.value)}
                        >
                        </textarea>
                        
                        <input type="submit" value="Comment" className='btn-cmt' onClick={()=> addReview()} />
                    </form>
        </div>
      </section>

      
      <style jsx>
        {`
          .back {
            margin-top: 3%;
            margin-left: 3%;
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

          .movie {
            color: white;
            display: flex;
            width: 100%;
            max-width: 960px;
            margin: 0 auto;
          }
          .sum {
            padding-right: 5em;
          }
          .comment {
            display: block;
            width: 100%;
            max-width: 960px;
            margin: 0 auto;
            margin-top: 3%;
          }

          .display-comment {
            padding: 3%;
            border-radius: 15px;
            background: ghostwhite;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
            margin-bottom: 3%;
          }

          h4 {
            text-align: center;
            font-size: 20px;
            border-top: 1px solid;
            margin-bottom: 3%;
            font-weight: bold;
            color: white;
          }

          select {
            height: 50px;
            width: 50px;
            border-radius: 50%;
            font-weight: bold;
            border: none;
            background: yellow;
            color: black;
          }

          textarea {
            border-radius: 15px;
            background: ghostwhite;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
            margin-bottom: 3%;
            border: none;
          }

          .btn-cmt {
            float: right;
            border: none;
            padding: 1%;
            border-radius: 5px;
            background: black;
            color: white;
            margin-bottom: 3%;
          }

          .btn-rt {
            float: right;
            border: none;
            padding: 1%;
            border-radius: 5px;
            background: yellow;
            color: black;
            margin-bottom: 3%;
          }
          
          .btn-rt:hover {
            background:black;
            color:white;
          }

          .rt {
            font-size: 25px;
            font-weight:bold;
            color:yellow;
          }

          span {
            font-size:20px;
          }

          .fav {
            float: right;
            margin-right: 10%;
          }
          img {
            width: 80%;
          }
          .plot {
            margin-top: 20%;
          }
        `}
      </style>
    </Layout>
  );
};

export default Movieid;
