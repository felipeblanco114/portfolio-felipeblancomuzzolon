import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList >
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:felipeblanco114@gmail.com'>felipeblanco114@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>"<span style={{ color: 'white', fontWeight: 'bold' }}>Work</span> hard in silence, let <span style={{ color: 'white', fontWeight: 'bold' }}>success</span> make the <span style={{ color: 'white', fontWeight: 'bold' }}>noise</span>"</Slogan>
        </CompanyContainer>
        <SocialContainer >
          <SocialIcons target='_blank' href='https://github.com/felipeblanco114'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons target='_blank' href='https://www.linkedin.com/in/felipe-blanco-muzzol%C3%B3n-962a40185/'>
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
