import Link from "next/link";
import styled from "styled-components";

const FourOhFour = ({ className }) => (
  <div className={className}>
    <h1>404 - Page Not Found :(</h1>
    <Link href='/'>
      <a>Go back home</a>
    </Link>
  </div>
);

export default styled(FourOhFour)`
  min-height: 100vh;
  margin: 0px;
  padding: 3rem;

  a {
    color: ${({ theme }) => theme.colors.paragraph};
    padding: 2px 0px 0px 0px;
    font-size: 1.2rem;

    :hover {
      color: ${({ theme }) => theme.colors.tertiary};
    }

    :vistied {
      color: ${({ theme }) => theme.colors.stroke};
    }
  }
`;
