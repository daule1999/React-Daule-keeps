import React from "react";

function Footer() {
  const dateer = new Date().getFullYear();
  return (
    <>
      <footer>
        <div id="footer" className="align-text-bottom">
          Copyright <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />{" "}
          {dateer}
        </div>
      </footer>
    </>
  );
}

export default Footer;
