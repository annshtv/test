import styled from "styled-components";
import Navbar from "../components/Navbar/Navbar";
import styles from './Blog.module.css'
import Posts from "../components/Posts";
import DownLoad from "../components/DownLoad";
import Footer from "../components/Footer";
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
    align-items: center;
    padding-bottom: 120px;
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
    justify-content: center;
    margin-top: 120px;
    overflow: hidden;
    gap: 20px;
  }
`;

function BlogPage() {
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
            dangerouslySetInnerHTML={lastWordStyling(`Article and News`)}
          ></h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod
            tempor incididunt<br></br>
            ut labore et dolore magna aliqua. Ut enim ad minim veniam–quis.
          </p>
        </div>
      </HeaderWrapper>
      {/* <input className={styles.input} type="text" placeholder="Search..." /> */}
      <Posts/>
      <DownLoad/>
      <Footer/>
    </>
  );
}

export default BlogPage;