import styled from "styled-components";
import { DOCS_LINK } from "../lib/links";

const StyledGetInTouch = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  text-decoration: underline;
  cursor: pointer;

  font-size: 1.9rem;
  font-weight: 500;
`;

const GetInTouch = () => {
  return (
    <StyledGetInTouch href={DOCS_LINK} target="_blank">
      Get in touch 👋
    </StyledGetInTouch>
  );
};

export default GetInTouch;
