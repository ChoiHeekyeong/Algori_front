import React, { useState } from 'react';
import './SignUpForm.scss';
import InputWithLabel from '../etc/InputWithLabel';
import Button from '../etc/Button';


function SignUpForm() {
    const [toSend, setToSend] = useState({
        // authlist: [],
        id: '',
        password: '',
        repassword: '',
        nickname: '',
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
        <div className="signUpFormWrapper">
          <form className="signUpFormContents">
            <div className="signUpForm-child">
                <InputWithLabel label="아이디" name="id" type="text" onChange={userIdChange}/>
                <Button onClick={onClick} bgColor="black" size="medium">중복</Button>
            </div>
            <div className="signUpForm-child">
                <InputWithLabel label="비밀번호" name="password" type="password"/>
            </div>
            <div className="signUpForm-child">
                <InputWithLabel label={["비밀번호",<br/>,"재확인"]} name="rePassword" type="password"/>
            </div>
            <div className="signUpForm-child">
                <InputWithLabel label="닉네임" name="nickname"/>
                <Button onClick={onClick} bgColor="black" size="medium">중복</Button>
            </div>
          </form>

          <div className="signUpButtonWrapper">
              <Button onClick={onClick} bgColor="black" size="large">회원가입</Button>
          </div>
        </div>
      </>
    );
  }
  
  export default SignUpForm;