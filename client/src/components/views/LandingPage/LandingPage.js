import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from "../../../_actions/user_action";

function LandingPage(props) {
  const dispatch = useDispatch();
  const [isAuth, setisAuth] = useState(false);

  dispatch(auth()).then((response) => {
    setisAuth(response.payload.isAuth);
  });
  console.log(isAuth);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/hello").then((response) => {
      console.log(response);
    });
  }, []);

  const onClickLogout = () => {
    axios.get("/api/users/logout").then((response) => {
      if (response.data) {
        alert("로그아웃성공");
        navigate("/");
      } else {
        alert("로그아웃실패");
      }
    });
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
      <h2>LandingPage</h2>
      {isAuth ? (
        <>
          <button onClick={onClickLogout}>로그아웃</button>
          <Link to="/cart">
            <button>장바구니</button>
          </Link>
        </>
      ) : (
        <Link to="/login">
          <button>로그인</button>
        </Link>
      )}
    </div>
  );
}

export default LandingPage;
