import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.scss';
function Header() {
    let navigate = useNavigate();
    return (
      <>
        <div className="headerWrapper">
          <div className="headerTitleWrapper">
            <div onClick={() => navigate('/')} >
                <span>알고리</span>
            </div>
          </div>
          <div className="headerLoginWrapper">
            <div className="goLogin" onClick={() => navigate('/login')}>
              <span>로그인</span>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Header;