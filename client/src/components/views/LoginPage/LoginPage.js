import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import { useNavigate } from "react-router-dom"

function LoginPage(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body))
    // .then((response) => {
    //   console.log("돌아온 값(body)", response);
    //   if (response.payload.loginSuccess) {
    //     console.log("안녕하세요");
    //     navigate("/");
    //   } else {
    //     alert("error");
    //   }
    // });
      .then((response) => {
        console.log(response.payload)
        alert("로그인성공")
        navigate("/");
      })
      .catch((err) => {
        console.log(err)
        alert("로그인실패")
      })

  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />
        <br />

        <button type="submit">Login</button>

      </form>
    </div>
  );
}

export default LoginPage;
