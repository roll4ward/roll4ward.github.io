// src/components/Footer.js
import React from "react";

const Footer = () => (
  <footer
    style={{
      marginTop: `var(--space-5)`,
      fontSize: `var(--font-sm)`,
      textAlign: "center", // 중앙 정렬
      padding: "1rem 0",   // 위아래 패딩 추가
      backgroundColor: "#333", // 배경색 추가
      color: "#fff", // 텍스트 색상 추가
    }}
  >
    © {new Date().getFullYear()} &middot; Built with
    {` `}
    <a href="https://www.gatsbyjs.com" style={{ color: "#fff" }}>Gatsby</a>
  </footer>
);

export default Footer;
