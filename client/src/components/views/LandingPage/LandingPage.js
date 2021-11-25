import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate,Link } from "react-router-dom"

function LandingPage(props) {

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/hello')
        .then(response => {console.log(response)})
    }, [])

    const onClickLogout = ()=> {
        axios.get('/api/users/logout')
        .then(response => {
            if(response.data){
            navigate("/login")
            }else{
                alert("로그아웃실패")
            }
        })
    }
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}>
            <h2>LandingPage</h2>
            <Link to="/login">
            <button>로그인</button>
            </Link>
            <button onClick={onClickLogout}>로그아웃</button>
        </div>
    )
}

export default LandingPage
