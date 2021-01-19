import React from "react";
import Layout from "../components/Layout";
import { useRef, useState } from "react";
import Link from "next/link";

const login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<any>(null);
  async function handleLogin() {
    const resp = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current?.value,
        password: passRef.current?.value,
      }),
    });
    const json = await resp.json();
    setMessage("Logged in");
  }

  return (
    <Layout>
      <div className="form-login">
        <h2>Login</h2>
        <h2>{message}</h2>
        <br />
        <form>
          <p>Email:</p>
          <input type="text" placeholder="email" ref={emailRef} />
          <br />
          <p>Password:</p>
          <input type="password" placeholder="password" ref={passRef} />
          <br />
          <Link href="/admin">
            <a>
              <input
                onClick={handleLogin}
                className="btn"
                type="submit"
                value="Log in"
              />
            </a>
          </Link>
          <br />
          <p>
            Aren't register yet? <a href="/signup">Please join us here</a>
          </p>
          <p>
            {" "}
            <a href="/passwordforget">Forgotten password?</a>
          </p>
        </form>
      </div>
      <style jsx>
        {`
          .form-login {
            color: #0a0924;
            display: block;
            margin: auto;
            width: 30%;
            max-width: 80%;
            border: 1px solid white;
            margin-top: 5%;
            border-radius: 8px;
            background: white;
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
            margin-bottom: 5%;
          }
          .btn:hover {
            background: #0093e9;
            color: black;
          }
          input {
            background: #80d0c7;
            border-radius: 5px;
            color: black;
            border: none;
          }
        `}
      </style>
    </Layout>
  );
};

export default login;
