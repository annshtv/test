import styled from "styled-components";

interface ButtonSubscribeProps {
  children: React.ReactNode;
  className?: string;
}

const ButtonStyled = styled.button`
  font-family: 'Montserrat Alternates', sans-serif;
  border-radius: 8px;
  padding: 12px 10px;
  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.25);
  background: #000;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  border: none;
  cursor: pointer;
`;

function ButtonSubscribe({ children, className }: ButtonSubscribeProps) {
  return (
    <ButtonStyled type="submit" className={className}>
      {children}
    </ButtonStyled>
  );
}

export default ButtonSubscribe;
