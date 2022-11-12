import styled from "styled-components";
import { DOCKER_LINK, GITHUB_LINK, TWITTER_LINK } from "../lib/links";

interface SocialType {
  name: string;
  image: string;
  link: string;
}

const socials: SocialType[] = [
  {
    name: "Github",
    image: "https://img.icons8.com/ios-filled/50/FFFFFF/github.png",
    link: GITHUB_LINK,
  },
  {
    name: "Twitter",
    image: "https://img.icons8.com/ios-filled/50/FFFFFF/twitter.png",
    link: TWITTER_LINK,
  },
  {
    name: "Docker",
    image: "https://img.icons8.com/ios-filled/50/FFFFFF/docker.png",
    link: DOCKER_LINK,
  },
];

const StyledSocials = styled.div`
  display: flex;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  margin-left: 2.3rem;
  width: 2.7rem;
  @media (max-width: 768px) {
    margin-left: 1.4rem;
    width: 2.1rem;
  }
`;

const SocialImage = styled.img`
  width: 100%;
`;

const Socials = () => {
  return (
    <StyledSocials>
      {socials.map((social, index) => {
        return (
          <SocialLink
            key={index}
            href={social.link}
            target="_blank"
            rel="noreferrer"
          >
            <SocialImage src={social.image} />
          </SocialLink>
        );
      })}
    </StyledSocials>
  );
};

export default Socials;
