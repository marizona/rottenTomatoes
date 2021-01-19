import { useState } from "react";
import TuneIcon from "@material-ui/icons/Tune";
import axios from 'axios';


const Filter = ({setMovies}) => {
    const [genre, setGenre] = useState("");
    const [date, setDate] = useState("");
    const [producer, setProducer] = useState("");
  
    const onSubmit = async () => {
      axios
        .get(`http://localhost:3000/api/filter?date=${date}&genre=${genre}&producer=${producer}`)
        .then(({data}) => {
          setMovies(data)
        });
    };
  
  return (
    <div className="filter">
      <div className="">
        <form action="javascript:void(0)" onSubmit={onSubmit} className="flex" >
        <p>
          <TuneIcon />
          Filter by
        </p>

          <input type="date" placeholder="email" id="date" className="date" onChange={(event) => setDate(event.target.value)}/>
          <input type="text" placeholder="genre" id="genre" className="genre" onChange={(event) => setGenre(event.target.value)}/>
          <input type="text" placeholder="producer" id="producer" className="producer" onChange={(event) => setProducer(event.target.value)}/>
          <a>
            <input className="btnn" type="submit" value="Research" />
          </a>
        </form>
      </div>
      <style jsx>
        {`
          .filter {
            width: 80%;
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 3%;
            margin-top: 3%;
            padding-bottom: 1%;
            padding-top: 1%;
            border-radius: 10px;
            background:ghostwhite;
          }
          .flex {
            display: flex;
            justify-content: space-between;
            margin-right: 3%;
            
          }
          p {
            color: white;
            margin-top: 1rem;
            margin-left: 2rem;
            font-size: 20px;
            color: #000000;
          }
          .date {
            margin-right: 2rem;
            border-radius:10px;
            border:none;
            background: #80d0c7;
          }
          .genre {
            margin-right: 2rem;
            border-radius:10px;
            border:none;
            background: #80d0c7;
          }
          .producer {
            margin-right: 2rem;
            border-radius:10px;
            border:none;
            background: #80d0c7;
          }
          select {
            text-align: center;
            padding: 1%;
            border: none;
            border-radius: 7px;
            appearance: none;
            background: #80d0c7;
          }
          select:after {
            text-align: center;
            padding: 1%;
            border: none;
            border-radius: 7px;
            appearance: none;
            background: #80d0c7;
          }
          .btnn {
            height: 5rem;
            width: 6rem;
            border: none;
            background:#0093E9;
            border-radius:10px;
          }
          .btnn:hover {
            background:black;
            color:white;
          }
        `}
      </style>
    </div>
  );
};

export default Filter;
