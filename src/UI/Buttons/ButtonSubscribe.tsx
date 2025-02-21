import styled from "styled-components";
function ButtonSubscribe({ children, styles }) {
  const ButtonStyled = styled.button`
    font-family: Montserrat Alternates;
    border-radius: 8px;
    padding: 12px 10px;
    width: 136px;
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.25);
    background: #000;
    font-weight: 700;
    font-size: 14px;
    color: #fff;
  `;
  return <ButtonStyled className={styles} >{children}</ButtonStyled>;
}

export default ButtonSubscribe;
