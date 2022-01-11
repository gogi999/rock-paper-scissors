import React from 'react';

const Footer = () => {
  return (
    <footer 
        style={{
            position: "fixed",
            width: "100%",
            left: 0,
            bottom: 0
        }}
    >
        <p style={{ textAlign: "center", fontSize: "18px"}}>
          Copyright &copy; paragon.ba
        </p>
    </footer>
  );
}

export default Footer;
