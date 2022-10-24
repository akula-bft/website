import styled from "styled-components";

interface SocialType {
  name: string;
  image: string;
  link: string;
}

const socials: SocialType[] = [
  {
    name: "Github",
    image: "https://img.icons8.com/ios-filled/50/000000/github.png",
    link: "https://github.com/akula-bft/akula",
  },
  {
    name: "Twitter",
    image: "https://img.icons8.com/ios-filled/50/000000/twitter.png",
    link: "https://twitter.com/AkulaApp",
  },
  {
    name: "Docker",
    image: "https://img.icons8.com/ios-filled/50/000000/docker.png",
    link: "",
  },
  {
    name: "Telegram",
    image: "https://img.icons8.com/ios-filled/50/000000/telegram-app.png",
    link: "",
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
  width: 2rem;
  height: 2rem;
  margin: 0 0.5rem;
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
