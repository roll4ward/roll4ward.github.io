import React from "react";
import { Link } from "gatsby";

const Header = () => (
  <header style={{ background: '#333', padding: '10px 0' }}>
    <nav style={{ display: 'flex', justifyContent: 'space-around', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>홈</Link>
      <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>동아리 소개</Link>
      <Link to="/projects" style={{ color: '#fff', textDecoration: 'none' }}>프로젝트 소개</Link>
      <Link to="/join" style={{ color: '#fff', textDecoration: 'none' }}>가입 신청</Link>
    </nav>
  </header>
);

export default Header;
