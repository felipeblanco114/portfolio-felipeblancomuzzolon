import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center >
        ¡Bienvenidos<br/>
        a mi portfolio!
      </SectionTitle>
      <SectionText>
        Mi nombre es Felipe Blanco Muzzolón. Tengo 22 años, soy un trainee Full Stack Javascript Developer con muchísimas ganas de conseguir mi primer trabajo en el mundo IT!
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Leer más</Button>
    </LeftSection>
  </Section>
);

export default Hero;