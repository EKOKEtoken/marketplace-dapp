import * as React from 'react';

import Container from '../../../reusable/Container';
import Heading from '../../../reusable/Heading';

import LelioImg from '../../../../../assets/images/team/lelio.webp';
import VeesoImg from '../../../../../assets/images/team/veeso.webp';
import ChiaraImg from '../../../../../assets/images/team/chiara.webp';
import Member from './Team/Member';
import Paragraph from '../../../reusable/Paragraph';
import Link from '../../../reusable/Link';

const Team = () => (
  <Container.FlexCols className="justify-center items-center">
    <Heading.H2>Meet the team</Heading.H2>
    <Container.Container className="justify-between grid sm:grid-cols-1 grid-cols-2 gap-8">
      <Member
        image={LelioImg}
        name={'Lelio Pellegrini'}
        role={'Founder & Real Estate Agent'}
      >
        <Paragraph.Default
          href={'https://www.milanhouses.com/'}
          target={'_blank'}
        >
          I am the creator of the EKOKE DAO project. I am a Real Estate Agent
          and founder of{' '}
          <Link.Paragraph
            href={'https://www.milanhouses.com/'}
            target={'_blank'}
          >
            Milan Houses
          </Link.Paragraph>
          . I have been working in the real estate sector for over 20 years, and
          I am passionate about technology and innovation. I am a strong
          supporter of blockchain technology and I believe that it can
          revolutionize the real estate sector.
        </Paragraph.Default>
      </Member>
      <Member
        image={VeesoImg}
        name={'Christian "veeso" Visintin'}
        role={'CTO & Software Engineer'}
      >
        <Paragraph.Default>
          I am a freelancer and a tech blogger. Throughout my life, I have
          worked on software and web development in a variety of sectors, but
          currently I mainly work with <strong>Rust, React and Solidity</strong>{' '}
          as a Freelancer on different projects. Usually I work on web services,
          Blockchain applications and embedded systems.
        </Paragraph.Default>
      </Member>
      <Member image={ChiaraImg} name={'Chiara Rovis'} role={'Web developer'}>
        <Paragraph.Default>
          I am a freelancer Web Developer and Designer based in Udine, Italy. I
          am passionate about web development and design. I have experience in
          developing and designing websites and e-commerce.
        </Paragraph.Default>
      </Member>
      <Member
        image={'http://placekittens.com/150/150'}
        name={'Michele Sessa'}
        role={'Marketing manager & Real Estate Agent'}
      >
        <Paragraph.Default>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        </Paragraph.Default>
      </Member>
      <Member
        image={'http://placekittens.com/150/150'}
        name={'Silvia...'}
        role={'Graphic designer'}
      >
        <Paragraph.Default>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
        </Paragraph.Default>
      </Member>
    </Container.Container>
  </Container.FlexCols>
);

export default Team;
