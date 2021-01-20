import React from "react";

function Footer()
{
  const currentYear = new Date().getFullYear();

  return (
    <footer >
    copyright © {currentYear} 
    </footer>
  )
}

export default Footer;