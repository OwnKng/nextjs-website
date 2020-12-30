import React from "react";
import styled from "styled-components";
import { theme } from "../utilities";

const Footer = ({ className }) => (
  <footer className={className}>
    <p>
      Built with <a href='https://nextjs.org/'>Next.js</a> and{" "}
      <a href='https://vercel.com/'>Vercel</a>
    </p>
    <p>&#169; 2020 Owen King</p>
  </footer>
);

export default styled(Footer)`
  margin: 0 auto;
  width: 90%;
  max-width: 1400px;
  padding-top: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.paragraph};
  border-top: 1px solid ${({ theme }) => theme.colors.boxShadow};
  border-left: 1px solid ${({ theme }) => theme.colors.boxShadow};
  border-right: 1px solid ${({ theme }) => theme.colors.boxShadow};

  a {
    color: ${({ theme }) => theme.colors.paragraph};
  }

  p {
    font-size: 0.8rem;
    margin: 0px;
    padding: 0.2rem 0 0.8rem 0;
  }
`;
