import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(172, 192, 216, 1) 100%
  );

  /* робимо фон на всю ширину */
  width: 100%;
`;
