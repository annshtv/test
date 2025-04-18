import Navbar from "../components/Navbar/Navbar";
import styled from "styled-components";
import ButtonSubscribe from "../UI/Buttons/ButtonSubscribe";
import Listeners from "../components/Listeners";

const HeaderWrapper = styled.div`
  .header {
    background-color: #f7ede8;
    padding: 0px;
    max-width: 100%;
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
    padding: 12px 10px;
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
    font-size: 76px;
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
  text-align: center;
  .b1 {
    font-family: Montserrat Alternates;
    border: 2px solid #000;
    font-weight: bold;
    border-radius: 8px;
    width: 188px;
    height: 41px;
    background-color: #f7ede8;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 70px;
  }

  .carts {
    display: flex;
    justify-content: center;
    gap: 20px;
    position: relative;
    top: 120px;
  }

  .cart {
    border: 1.5px solid #000;
    border-radius: 8px;
    width: 373px;
    height: 235px;
    box-shadow: 6px 6px 0 0 #cd4631;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .cart h3 {
    font-family: Montserrat Alternates;
    font-weight: 700;
    font-size: 59px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #cd4631;
    margin: 0;
  }

  .cart p {
    font-family: Montserrat Alternates;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    text-align: center;
    color: #4d4d4d;
  }

  .highlight {
  color: #000;
}

`;

function About() {
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
    <>
      <HeaderWrapper>
        <Navbar />
        <div className="header">
          <h1
            dangerouslySetInnerHTML={lastWordStyling(`About 
            Pod of Cast`)}
          ></h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
            tempor incididunt<br></br>
            ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.
          </p>
          <div className="button">
            <button className="b1">BECOME SPONSOR</button>
            <ButtonSubscribe
              children={"SUBSCRIBE"}
              styles={undefined}
            ></ButtonSubscribe>
          </div>
          <div className="carts">
            <div className="cart">
            <h3>76<span className="highlight">K</span></h3>
              <p>Community Members</p>
            </div>
            <div className="cart">
            <h3>128<span className="highlight">K</span></h3>
              <p>Podcast Subscribers</p>
            </div>
            <div className="cart">
            <h3>59<span className="highlight">K</span></h3>
              <p>Daily Listeners</p>
            </div>
          </div>
        </div>
      </HeaderWrapper>
      <Listeners/>
    </>
  );
}

export default About;
