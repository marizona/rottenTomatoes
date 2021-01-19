import React from "react";
import Layout from "../components/Layout";
import { useRef, useState } from "react";
import Link from "next/link";

const signup = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const passwordConfRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<any>(null);
  async function handleSignup() {
    const resp = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nameRef.current?.value,
        email: emailRef.current?.value,
        password: passRef.current?.value,
        passwordConf: passwordConfRef.current?.value,
      }),
    });
    const json = await resp.json();
    setMessage("Logged in");
  }

  return (
    <Layout>
      <div className="join">
        <h2>Sign up</h2>
        <h2>{message}</h2>
        <br />
        <form action="#">
          <p>Name:</p>
          <input type="text" placeholder="name" ref={nameRef} />
          <br />
          <p>Email:</p>
          <input type="text" placeholder="email" ref={emailRef} />
          <br />
          <p>Password:</p>
          <input type="password" placeholder="password" ref={passRef} />
          <br />
          <p>Confirm password</p>
          <input
            type="password"
            placeholder="confirm password"
            ref={passwordConfRef}
          />
          <br />
          <Link href="/login">
            <a>
              <input
                onClick={handleSignup}
                className="btn"
                type="submit"
                value="Sign up"
              />
            </a>
          </Link>
          <br />
          <p>
            You have already an account? <a href="/login">Sign in here</a>
          </p>
        </form>
        <style jsx>
          {`
            .join {
              color: #0a0924;
              display: block;
              margin: auto;
              width: 30%;
              max-width: 80%;
              border: 1px solid white;
              margin-top: 3%;
              border-radius: 8px;
              background: white;
              margin-bottom: 5%;
            }
            h2 {
              text-align: center;
              margin-top: 5%;
              color: #0093e9;
            }

            form {
              margin-left: 3%;
            }
            input {
              display: block;
              margin: auto;
            }
            p {
              text-align: center;
            }
            .btn {
              border: none;
              border-radius: 5px;
              padding: 15px;
              background: black;
              color: white;
            }
            .btn:hover {
              background: #0093e9;
              color: black;
            }
            input {
              background: #33abdb;
              border-radius: 5px;
              color: black;
              border: none;
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default signup;
