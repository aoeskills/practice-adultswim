import React from 'react';
import H1 from '@/components/contentblock/h1';
import Section from '@/components/contentblock/section';
import PlayWipe from '@/components/container/playWipe';
import ListenContentScroll from '@/components/container/listenContentScroll';
import H2 from '@/components/contentblock/h2';
import Context from '@/components/contentblock/context';
import LightText from '@/components/contentblock/lightText';
import GuildLink from '@/components/contentblock/guildLink';
import PlayFade from '@/components/container/playFade';
import PlayFlyText from '@/components/container/playFlyText';
import Flex from '@/components/contentblock/flex';

import rickAndMortyCover from '@/images/rick-and-morty-cover.jpg';
import primalCover from '@/images/primal-cover.jpg';
import bobsBurgersCover from '@/images/bobs-burgers-cover.jpg';
import PhotoCover from '@/components/contentblock/photoCover';
import Title from '@/components/contentblock/title';
import CursorTrigger from '@/components/ui/cursorTrigger';
import SectionBackground from '@/components/contentblock/sectionBackground';
import SectionTitle from '@/components/contentblock/sectionTitle';

/**
 * 首頁
 */
const Home = () => {
  const listenStateToPlayProps = (listenState) => ({
    trans: listenState.isEnterScreen,
  });

  return (
    <div style={{ counterReset: 'section' }}>
      <Section padding={false}>
        <ListenContentScroll
          MidComponent={PlayFade}
          defMidProps={{ trans: false, duration: 0.5 }}
          stateToMidProp={(state) => ({ trans: state.contentScrollTop < 10 })}
        >
          <H1 style={{ textAlign: 'center' }} diff={false}>
            {['BOLD', 'FREE', 'WILD', 'UNIQUE'][Math.floor(Math.random() * 4)]}
            <p style={{
              opacity: '0',
              color: 'transparent',
              margin: '100px 0',
              padding: 0,
            }}
            >
              AS
            </p>
            WE SHOULD
          </H1>
        </ListenContentScroll>
      </Section>

      <Section title="What we have" alignV="top">
        <Flex.FullWide wrap alignH="left">
          <Flex.HalfWide alignH="left">
            <div>
              <ListenContentScroll
                MidComponent={PlayWipe}
                defMidProps={{
                  fromDirection: 'right', trans: false, delay: 0.2, duration: 0.8,
                }}
                stateToMidProp={listenStateToPlayProps}
              >
                <H2>
                  Hit me with your pet shark!!
                </H2>
              </ListenContentScroll>

              <ListenContentScroll
                MidComponent={PlayFade}
                defMidProps={{ trans: false, delay: 0.2, duration: 1.2 }}
                stateToMidProp={listenStateToPlayProps}
              >
                <Context>
                  He would only survive if
                  <br />
                  he kept the fire going and
                  he could hear thunder in the distance.
                </Context>
              </ListenContentScroll>

            </div>
          </Flex.HalfWide>
          <Flex.FullWide alignH="right">
            <LightText>
              <ListenContentScroll
                MidComponent={PlayFlyText}
                defMidProps={{ trans: false, delay: 0.2, duration: 0.2 }}
                stateToMidProp={listenStateToPlayProps}
              >
                {'What we have'.split('')}
              </ListenContentScroll>
            </LightText>
          </Flex.FullWide>
          <Flex.FullWide alignH="right">
            <GuildLink url="#service">View Service</GuildLink>
          </Flex.FullWide>

        </Flex.FullWide>
      </Section>

      <Section title="Contents" alignV="top">
        <SectionBackground>
          <LightText>
            <ListenContentScroll
              MidComponent={PlayFlyText}
              defMidProps={{ trans: false, delay: 0.2, duration: 0.2 }}
              stateToMidProp={listenStateToPlayProps}
            >
              {'Shows'.split('')}
            </ListenContentScroll>
          </LightText>

        </SectionBackground>
        <Flex.FullWide wrap>
          <Flex.FullWide alignH="left">
            <ListenContentScroll
              MidComponent={PlayWipe}
              defMidProps={{
                fromDirection: 'right', trans: false, delay: 0.2, duration: 0.8,
              }}
              stateToMidProp={listenStateToPlayProps}
            >
              <H2>SHOWS</H2>
            </ListenContentScroll>
          </Flex.FullWide>
          <Flex.FullWide wrap alignH="left" alignV="top">
            <PhotoCover
              url="#rick-and-morty"
              imgurl={rickAndMortyCover}
              title="RICK AND MORTY"
              context="Rick is a mad scientist who drags his grandson, Morty, on crazy sci-fi adventures. Their escapades often have potentially harmful consequences for their family and the rest of the world."
            />
            <PhotoCover url="#primal" imgurl={primalCover} title="PRIMAL" context="Gendy Tartakovsky's Primal" />
            <PhotoCover
              url="#bobs-burgers"
              imgurl={bobsBurgersCover}
              title="BOB&apos;S BURGERS"
              context="Bob’s Burgers is an animated show about the Belcher family and the burger restaurant they own and operate."
            />
          </Flex.FullWide>

          <Flex.FullWide alignH="right">
            <GuildLink url="#shows">View Shows</GuildLink>
          </Flex.FullWide>
        </Flex.FullWide>
      </Section>

      <Section title="About us" alignV="top">
        <Flex.FullWide wrap>
          <Flex.FullWide wrap alignH="left">
            <ListenContentScroll
              MidComponent={PlayWipe}
              defMidProps={{
                fromDirection: 'right', trans: false, delay: 0.2, duration: 0.8,
              }}
              stateToMidProp={listenStateToPlayProps}
            >
              <H2>
                Mary plays the piano.
              </H2>
            </ListenContentScroll>

            <Flex.FullWide alignH="right">
              <Flex.HalfWide alignH="left">
                <ListenContentScroll
                  MidComponent={PlayFade}
                  defMidProps={{ trans: false, delay: 0.2, duration: 1.2 }}
                  stateToMidProp={listenStateToPlayProps}
                >
                  <Title.Small>Let me help you with your baggage.</Title.Small>
                  <Context>
                    It would have been a better night
                    if the guys next to us weren&apos;t in the splash zone.
                  </Context>
                </ListenContentScroll>
              </Flex.HalfWide>
            </Flex.FullWide>
          </Flex.FullWide>

          <Flex.FullWide alignH="left">
            <LightText>
              <ListenContentScroll
                MidComponent={PlayFlyText}
                defMidProps={{ trans: false, delay: 0.2, duration: 0.2 }}
                stateToMidProp={listenStateToPlayProps}
              >
                {'About us'.split('')}
              </ListenContentScroll>
            </LightText>
          </Flex.FullWide>

          <Flex.FullWide alignH="right">
            <GuildLink url="#aboutus">View About us</GuildLink>
          </Flex.FullWide>
        </Flex.FullWide>
      </Section>

      <Section title="Support us" padding={false} size="half">
        <a href="#subscrib">
          <Title.Large>
            <CursorTrigger>
              <ListenContentScroll
                MidComponent={PlayFlyText}
                defMidProps={{ trans: false, delay: 0.2, duration: 0.2 }}
                stateToMidProp={listenStateToPlayProps}
              >
                {'Subscrib'.split('')}
              </ListenContentScroll>
            </CursorTrigger>

          </Title.Large>
        </a>
      </Section>

      <Section padding={false}>
        <Flex.FullWide wrap>
          <Flex.FullWide alignH="left">
            <SectionTitle number="01"> What we have </SectionTitle>
          </Flex.FullWide>
          <div style={{
            flex: '50% 0 0',
            width: '50%',
          }}
          >
            <Title>Service</Title>
          </div>
          <div style={{
            flex: '50% 0 0',
            width: '50%',
            textAlign: 'right',
          }}
          >
            <CursorTrigger>
              <a href="#service" style={{ textDecoration: 'none' }}>
                <Title>
                  Next
                </Title>
              </a>
            </CursorTrigger>
          </div>
        </Flex.FullWide>
      </Section>
    </div>
  );
};
export default Home;
