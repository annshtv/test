import React from "react";
import styled from "styled-components";
import ButtonSubscribe from "../../UI/Buttons/ButtonSubscribe";
import Navbar from "../Navbar/Navbar";
import Episodes from "../../pages/Episodes";
import About from "../../pages/About";

const HeaderWrapper = styled.div`
  .header {
    background-color: #f7ede8;
    padding: 0px;
    min-height: 1448px;
    max-width: 1440px;
    background-image: url("pictures/Header.png");
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
  }

  .navigation p {
    font-family: Montserrat Alternates;
    font-weight: bold;
    font-size: 16px;
    line-height: 160%;
    color: #000;
  }

  .menus {
    display: flex;
    gap: 60px;
    max-width: 1160px;
    align-items: baseline;
  }
  .b1 {
    font-family: Montserrat Alternates;
    border: 2px solid #000;
    font-weight: bold;
    border-radius: 8px;
    padding: 12px 24px;
    width: 188px;
    height: 41px;
    background-color: #f7ede8;
  }
  .buttons {
    gap: 20px;
    display: flex;
  }
  h1 {
    font-family: Montserrat Alternates;
    font-weight: 700;
    font-size: 96px;
    line-height: 100%;
    letter-spacing: -0.04em;
    text-align: center;
    color: #000;
  }
  .last-word {
    color: #cd4631;
  }
  p {
    font-family: Montserrat Alternates;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    color: #4d4d4d;
  }
  .cover2 {
    border-radius: 12px;
    max-width: 373px;
    min-height: 373px;
  }
  .covers {
    display: flex;
    justify-content: space-between;
    margin-top: 120px;
  }
`;
function Header() {
  const lastWordStyling = (text: string) => {
    const words = text.split(" ");
    const lastWord = words.pop();
    return {
      __html: `${words.join(
        " "
      )}<br /><span class="last-word">${lastWord}</span>`,
    };
  };

  return (
    <HeaderWrapper>
      <Navbar />
      <div className="header">
        <h1
          dangerouslySetInnerHTML={lastWordStyling("Your Daily Podcast")}
        ></h1>
        <p>
          We cover all kinds of categories and <br />a weekly special guest.
        </p>
        <ButtonSubscribe styles="kek">subscribe</ButtonSubscribe>
        <div className="covers">
          <div className="cover1">
            <img src="pictures/cover1.png" alt="" />
          </div>
          <div className="cover22">
            <img src="pictures/cover22.png" alt="" />
          </div>
          <div className="cover3">
            <img src="pictures/cover3.png" alt="" />
          </div>
          <div className="cover4">
            <img src="pictures/cover4.png" alt="" />
          </div>
          <div className="cover5">
            <img src="pictures/cover55.png" alt="" />
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
