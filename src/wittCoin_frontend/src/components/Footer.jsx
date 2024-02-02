import React from "react";

const internetComputer = ("on the (Internet Computer Blockchain)");

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="footer">
      <p>Copyright INT'L WITTY {internetComputer}  ⓒ {year}</p>
    </footer>
  );
}

export default Footer;