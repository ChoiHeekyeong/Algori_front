import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.scss';
import InputWithLabel from '../etc/InputWithLabel';
import Button from '../etc/Button';

function LoginForm() {
  let navigate = useNavigate();
  const [toSend, setToSend] = useState({
        // authlist: [],
        id: '',
        password: '',
    });
    //input part
  const userIdChange = (e) => {
    setToSend({
      ...toSend,
      id: e.target.value,
    });
  };
  const onClick = () => {
    
    console.log("CLICK");
  }
    return (
      <>
        <div className="loginFormWrapper">
          <form className="loginFormContents">
            <div className="loginForm-child">
                <InputWithLabel label="아이디" name="id" type="text" onChange={userIdChange}/>
            </div>
            <div className="loginForm-child">
                <InputWithLabel label="비밀번호" name="password" type="password"/>
            </div>
          </form>

          <div className="loginButtonWrapper">
            <div className="goSignUp" onClick={() => navigate('/signup')}>
              <span>회원가입하러 가기</span>
            </div>
            <Button onClick={onClick} bgColor="black" size="medium">로그인</Button>
          </div>
        </div>
      </>
    );
  }
  
  export default LoginForm;