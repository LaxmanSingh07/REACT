import { styled } from "styled-components";

const StyleHeader = styled.header`
  background-color: orangered;
  padding: 1.2rem 4.8rem;
  background-color: var(--color-grey-0);
  border-radius: 1px solid var(--color-grehy-100);
`;

function Header() {
  return <StyleHeader>Header</StyleHeader>;
}

export default Header;
