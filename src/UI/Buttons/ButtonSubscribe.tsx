import styled from "styled-components";
interface ButtonSubscribeProps {
  children: React.ReactNode;
  styles?: string;
  style?: React.CSSProperties;
}

function ButtonSubscribe({ children, styles, style }: ButtonSubscribeProps) {
  const ButtonStyled = styled.button`
    font-family: Montserrat Alternates;
    border-radius: 8px;
    padding: 12px 10px;
    box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.25);
    background: #000;
    font-weight: 700;
    font-size: 14px;
    color: #fff;
  `;
  return (
    <ButtonStyled className={styles} style={style}>
      {children}
    </ButtonStyled>
  );
}

export default ButtonSubscribe;