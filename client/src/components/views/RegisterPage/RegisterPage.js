import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action'
import { useNavigate } from "react-router-dom"


function RegisterPage(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = (e) => {
        setEmail(e.currentTarget.value)
    }
    const onNameHandler = (e) => {
        setName(e.currentTarget.value)
    }
    const onPasswordHandler = (e) => {
        setPassword(e.currentTarget.value)
    }
    const onConfirmPasswordHandler = (e) => {
        setConfirmPassword(e.currentTarget.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호확인은 같아야합니다.')
        }
        if(Password.length < 4) {
            return alert('비밀번호는 4글자 이상이여야 합니다.')
        }
        let body = {
            email: Email,
            password: Password,
            name: Name
        }
        // console.log(body)
        dispatch(registerUser(body))
        .then((response) => {
            // console.log(response.payload.success)
            if (response.payload.success) {
              alert("회원가입성공");
              navigate("/login");
            } else {
              alert("회원가입실패");
            }
          });
    };

    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100vh'}}
        >
            <form style={{display:'flex',flexDirection:'column'}} onSubmit={onSubmitHandler}> 
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <label>Confirm Password</label>
                <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
                <br/>
                <button>회원가입</button>
            </form>
        </div>
    )
}

export default RegisterPage
