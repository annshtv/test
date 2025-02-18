import React from "react";
import styled from "styled-components";
import ButtonSubscribe from "../UI/Buttons/ButtonSubscribe";

const HeaderWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  font-family: 'Montserrat Alternates', sans-serif;
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
  }
  .navigation {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .navigation p {
    font-family: Montserrat Alternates;
    font-weight: bold;
    font-size: 16px;
    line-height: 160%;
    color: #000;
  }
  .logo img {
    width: 74px;
    height: 74px;
  }
  .menus {
    display: flex;
    gap: 60px;
    max-width: 1160px;
  }
  .b1 {
    font-family: Montserrat Alternates;
    border: 2px solid #000;
    border-radius: 8px;
    padding: 12px 24px;
    width: 188px;
    height: 41px;
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
  const lastWordStyling = (text:string) => {
    const words = text.split(" ");
    const lastWord = words.pop();
    return { __html: `${words.join(" ")}<br /><span class="last-word">${lastWord}</span>` };
  };

  return (
    <HeaderWrapper>
      <div className="header">
        <div className="navigation">
          <div className="logo">
            <img src="pictures/logo.png" alt="logo" />
          </div>
          <div className="menus">
            <span>Episodes</span>
            <span>About</span>
            <span>More</span>
          </div>
          <div className="buttons">
            <button className="b1">RECENT EPISODES</button>
            <ButtonSubscribe>subscribe</ButtonSubscribe>
          </div>
        </div>
        <h1 dangerouslySetInnerHTML={lastWordStyling("Your Daily Podcast")}></h1>
        <p>We cover all kinds of categories and <br/>
        a weekly special guest.</p>
        <ButtonSubscribe styles="kek">subscribe</ButtonSubscribe>
        <div className="covers">
          <div className="cover1">
          <img src="pictures/cover1.png" alt=""/>
          </div>
          <div className="cover2">
            <img src="pictures/cover22.png" alt=""/>
          </div>
          <div className="cover3">
          <img src="pictures/cover3.png" alt=""/>
          </div>
          <div className="cover4">
          <img src="pictures/cover4.png" alt=""/>
          </div>
          <div className="cover5">
          <img src="pictures/cover55.png" alt=""/>
          </div>
        </div>
      </div>

    </HeaderWrapper>
  );
}

export default Header;
