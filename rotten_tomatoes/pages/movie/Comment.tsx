import React from 'react';
import { InferGetServerSidePropsType, InferGetStaticPropsType } from 'next';
import Layout from '../../components/Layout';



type Review = {
    review: string
    id_movies: number
    id_users: number
    name:string
    title: string 
}

export const getStaticProps = async () => {
    const res = await fetch("http://localhost:3000/api/reviews")
    const reviews: Review[] = await res.json()

    return {
        props: {
            reviews,
        },
    }
}

const Comment = ({reviews}: InferGetServerSidePropsType<typeof getStaticProps>) => {
    return (
        <Layout>
            <section className="comment">
                    <h4>Review</h4>
                    {reviews.map((review) => (
                    <div className="display-comment">
                        <h3>{review.title}</h3>
                        <p>{review.name}</p>
                        <p>{review.review}</p>
                    </div>
                    ))}
                    <style jsx>
                    {`
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
                        
                        .comment {
                            display: block;
                            width: 100%;
                            max-width: 960px;
                            margin: 0 auto;
                            margin-top:3%;
                        }
                        .display-comment {
                            padding: 3%;
                            border-radius: 15px;
                            background: ghostwhite;
                            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                            margin-bottom:3%; 
                        }
                        h4 {
                            text-align: center;
                            font-size: 20px;
                            border-top: 1px solid;
                            margin-bottom: 3%;
                            font-weight: bold;
                            color: white;
                        }
                        textarea {
                            border-radius: 15px;
                            background: ghostwhite;
                            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
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
                            margin-bottom:3%;
                        }
                    
                        `}
                </style>
                </section>
            </Layout>
    );
};

export default Comment;