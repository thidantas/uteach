'use client'

import { useCallback, useRef } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'

import MediaPlayIcon from 'assets/icons/MediaPlay'
import Company1Icon from 'assets/icons/Company1'
import Company2Icon from 'assets/icons/Company2'
import Company3Icon from 'assets/icons/Company3'
import Company4Icon from 'assets/icons/Company4'
import Company5Icon from 'assets/icons/Company5'
import CheckIcon from 'assets/icons/Check'
import ArrowRightIcon from 'assets/icons/ArrowRight'
import Player from 'assets/images/Player'
import Blob from 'assets/images/Blob'
import Stars from 'assets/images/Stars'
import LikeHeartIcon from 'assets/icons/LikeHeart'
import DiamondIcon from 'assets/icons/Diamond'
import GraduationCapIcon from 'assets/icons/GraduationCap'
import CircleArrowLeftIcon from 'assets/icons/CircleArrowLeft'
import BlobVariation from 'assets/images/BlobVariation'
import CircleArrowRightIcon from 'assets/icons/CircleArrowRight'

import { Container } from 'components/Container'
import Tag from 'components/Tag'
import Menu from 'components/Menu'
import Heading from 'components/Heading'
import TaskCard from 'components/TaskCard'
import Button from 'components/Button'
import MetricCard from 'components/MetricCard'
import StarsVariation from 'assets/images/StarsVariation'
import ReviewHighlightSlider from 'components/ReviewHighlightSlider'
import CustomDotsCarousel from 'components/CustomDotsCarousel'
import SubmitProjectForm from 'components/SubmitProjectForm'
import Footer from 'components/Footer'

import * as S from './styles'

export default function Home() {
  const sliderRef = useRef<Slider>(null)

  const incrementAndDecrement = useCallback(
    (btn: string) => {
      if (sliderRef.current) {
        if (btn === 'increment') {
          sliderRef.current.slickNext()
        } else if (btn === 'decrement') {
          sliderRef.current.slickPrev()
        }
      }
    },
    [sliderRef]
  )

  return (
    <S.Wrapper>
      <Container>
        <Menu />
      </Container>

      <Container>
        <S.TeachSection>
          <S.TeachSectionLeft>
            <S.TeachSectionLeftContent>
              <Heading underlineWord="teach" size="xhuge" color="darkBlue">
                Teach students worldwide
              </Heading>

              <S.TeachSectionLeftParagraph>
                Amet nunc diam orci duis ut sit diam arcu, nec. <br />
                Eleifend proin massa tincidunt viverra lectus pulvinar.
                <br /> Nunc ipsum est pellentesque turpis ultricies.
              </S.TeachSectionLeftParagraph>
              <S.TeachSectionLeftButtons>
                <Button size="xxlarge" bold>
                  Sign Up Now
                </Button>

                <Button
                  as="a"
                  href="#"
                  minimal
                  position="left"
                  color="thirdy"
                  semiBold
                  icon={<MediaPlayIcon />}
                >
                  View Demo
                </Button>
              </S.TeachSectionLeftButtons>
            </S.TeachSectionLeftContent>
            <S.TeachLeftSectionBelow>
              <S.TeachLeftSectionBelowCompanies>
                Trusted by
                <br /> leading companies
              </S.TeachLeftSectionBelowCompanies>
              <S.TeachLeftSectionBelowIcons>
                <Company1Icon />
                <Company2Icon />
                <Company3Icon />
                <Company4Icon />
                <Company5Icon />
              </S.TeachLeftSectionBelowIcons>
            </S.TeachLeftSectionBelow>
          </S.TeachSectionLeft>
          <S.TeachSectionRight>
            <Image
              src="images/teach-students.svg"
              alt="image of people studying"
              width={624.6}
              height={544.53}
            />
          </S.TeachSectionRight>
        </S.TeachSection>
      </Container>

      <Container>
        <S.MoreAboutSection>
          <S.MoreAboutLeftSectionContent>
            <Heading
              as="h2"
              size="huge"
              color="darkBlue"
              underlineWord="all-in-one"
            >
              An all-in-one app that makes it easier
            </Heading>

            <div>
              <S.MoreAboutLeftSectionParagraph>
                <CheckIcon />
                <S.MoreAboutParagraph>
                  Est et in pharetra magna adipiscing ornare aliquam.
                </S.MoreAboutParagraph>
              </S.MoreAboutLeftSectionParagraph>

              <S.MoreAboutLeftSectionParagraph>
                <CheckIcon />
                <S.MoreAboutParagraph>
                  Tellus arcu sed consequat ac velit ut eu blandit.
                </S.MoreAboutParagraph>
              </S.MoreAboutLeftSectionParagraph>

              <S.MoreAboutLeftSectionParagraph>
                <CheckIcon />
                <S.MoreAboutParagraph>
                  Ullamcorper ornare in et egestas dolor orci.
                </S.MoreAboutParagraph>
              </S.MoreAboutLeftSectionParagraph>
            </div>

            <Button
              as="a"
              href="#"
              color="thirdy"
              minimal
              semiBold
              icon={<ArrowRightIcon />}
            >
              Find more about the app
            </Button>
          </S.MoreAboutLeftSectionContent>
          <S.MoreAboutCenterSection>
            <Stars />
          </S.MoreAboutCenterSection>

          <S.MoreAboutBlobSection>
            <Blob />
          </S.MoreAboutBlobSection>

          <S.MoreAboutRightSection>
            <S.ImageVideo>
              <Player />
            </S.ImageVideo>

            <S.TaskCardSection>
              <TaskCard
                tag={<Tag tagType="featured" />}
                title="The map of mathematics"
                description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
                buttonText="Take Lesson"
              />
              <TaskCard
                tag={<Tag tagType="popular" />}
                title="Design for how people think"
                description="Aliquam ut euismod condimentum elementum ultricies volutpat sit non."
                buttonText="Take Lesson"
              />
              <TaskCard
                tag={<Tag tagType="new" />}
                title="International & commercial law"
                description="Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui."
                buttonText="Take Lesson"
              />
            </S.TaskCardSection>
          </S.MoreAboutRightSection>
        </S.MoreAboutSection>
      </Container>

      <S.CarouselSection>
        <Container>
          <S.CustomCarrouselContent>
            <CustomDotsCarousel
              ref={sliderRef}
              items={[
                {
                  authorName: 'Marie Poirot',
                  imageUrl: 'images/person-smiling.svg',
                  authorQuote:
                    'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.',
                  authoredIn: 'Bigapp'
                },
                {
                  authorName: 'Marie Poirot',
                  imageUrl: 'images/player.svg',
                  authorQuote:
                    'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.',
                  authoredIn: 'Bigapp'
                },
                {
                  authorName: 'Marie Poirot',
                  imageUrl: 'images/person-smiling.svg',
                  authorQuote:
                    'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.',
                  authoredIn: 'Bigapp'
                },
                {
                  authorName: 'Marie Poirot',
                  imageUrl: 'images/person-smiling.svg',
                  authorQuote:
                    'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.',
                  authoredIn: 'Bigapp'
                },
                {
                  authorName: 'Marie Poirot',
                  imageUrl: 'images/person-smiling.svg',
                  authorQuote:
                    'Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.',
                  authoredIn: 'Bigapp'
                }
              ]}
            />
          </S.CustomCarrouselContent>
        </Container>
      </S.CarouselSection>

      <Container>
        <S.MeetSection>
          <S.ImagesMeet>
            <Image
              src={'images/international-students.svg'}
              alt="people students from different cultures"
              width={600}
              height={651}
            />
          </S.ImagesMeet>

          <S.MeetDescription>
            <Heading
              as="h2"
              size="huge"
              color="darkBlue"
              iconWord="international"
            >
              Meet international students & teachers
            </Heading>

            <S.MeetDescriptionParagraph>
              Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
              senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
              facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
              urna, faucibus aenean lorem faucibus integer.
            </S.MeetDescriptionParagraph>

            <Button
              icon={<ArrowRightIcon />}
              minimal
              color="thirdy"
              semiBold
              as="a"
              href="#"
            >
              Explore teachers and students
            </Button>
          </S.MeetDescription>
        </S.MeetSection>
      </Container>

      <S.StatsSection>
        <Container>
          <S.StatsContent>
            <MetricCard
              icon={<LikeHeartIcon />}
              value={195}
              label="user countries"
            />
            <MetricCard
              icon={<DiamondIcon />}
              value="1M"
              label="valued teachers"
            />
            <MetricCard
              icon={<GraduationCapIcon />}
              value="17M"
              label="happy students"
            />
          </S.StatsContent>
        </Container>
      </S.StatsSection>

      <S.FeedbackSection>
        <Container>
          <S.FeedbackHeaderSection>
            <Heading as="h2" color="darkBlue">
              What everyone says
            </Heading>
            <S.ArrowsSection>
              <S.LeftArrow
                title="Left"
                onClick={() => incrementAndDecrement('decrement')}
              >
                <CircleArrowLeftIcon />
              </S.LeftArrow>
              <S.RightArrow
                title="Right"
                onClick={() => incrementAndDecrement('increment')}
              >
                <CircleArrowRightIcon />
              </S.RightArrow>
            </S.ArrowsSection>
          </S.FeedbackHeaderSection>
        </Container>

        <S.CustomContainer>
          <S.FeedbackCarouselSection>
            <ReviewHighlightSlider
              ref={sliderRef}
              items={[
                {
                  userName: 'Hellen Jummy',
                  image: '/images/user-1.svg',
                  profession: 'Financial Counselor',
                  userDepoiment:
                    ' Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non.Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitaequis cras vitae praesent morbi adipiscing purus consectetur mi.'
                },
                {
                  userName: 'Hellen Jummy',
                  image: '/images/user-1.svg',
                  profession: 'Financial Counselor',
                  userDepoiment:
                    ' Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non.Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitaequis cras vitae praesent morbi adipiscing purus consectetur mi.'
                },
                {
                  userName: 'Hellen Jummy',
                  image: '/images/user-1.svg',
                  profession: 'Financial Counselor',
                  userDepoiment:
                    ' Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non.Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitaequis cras vitae praesent morbi adipiscing purus consectetur mi.'
                },
                {
                  userName: 'Hellen Jummy',
                  image: '/images/user-1.svg',
                  profession: 'Financial Counselor',
                  userDepoiment:
                    ' Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non.Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitaequis cras vitae praesent morbi adipiscing purus consectetur mi.'
                },
                {
                  userName: 'Hellen Jummy',
                  image: '/images/user-1.svg',
                  profession: 'Financial Counselor',
                  userDepoiment:
                    ' Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non.Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitaequis cras vitae praesent morbi adipiscing purus consectetur mi.'
                },
                {
                  userName: 'Hellen Jummy',
                  image: '/images/user-1.svg',
                  profession: 'Financial Counselor',
                  userDepoiment:
                    ' Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non.Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitaequis cras vitae praesent morbi adipiscing purus consectetur mi.'
                },
                {
                  userName: 'Hellen Jummy',
                  image: '/images/user-1.svg',
                  profession: 'Financial Counselor',
                  userDepoiment:
                    ' Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non.Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitaequis cras vitae praesent morbi adipiscing purus consectetur mi.'
                }
              ]}
            />
          </S.FeedbackCarouselSection>
        </S.CustomContainer>
      </S.FeedbackSection>

      <Container>
        <S.CoolFeaturesSection>
          <S.CoolFeaturesInfo>
            <Heading as="h2" color="darkBlue" underlineWord="features">
              All the cool features
            </Heading>
            <S.CoolFeaturesParagraph>
              Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio
              ac. In et dolor eu donec maecenas nulla. Cum sed orci, sit
              pellentesque quisque feugiat cras ullamcorper. Ultrices in amet,
              ullamcorper non viverra a, neque orci.
            </S.CoolFeaturesParagraph>
            <Button
              as="a"
              href="#"
              minimal
              color="thirdy"
              semiBold
              icon={<ArrowRightIcon />}
            >
              View all the features
            </Button>
          </S.CoolFeaturesInfo>

          <S.CoolFeaturesPictures>
            <S.CoolFeaturesBlob>
              <BlobVariation />
            </S.CoolFeaturesBlob>

            <S.CoolFeaturesStars>
              <StarsVariation />
            </S.CoolFeaturesStars>

            <S.CoolFeaturesCardTask>
              <TaskCard
                tag={<Tag tagType="popular" />}
                title="Design for how people think"
                description="Aliquam ut euismod condimentum elementum ultricies volutpat sit non."
                buttonText="Take Lesson"
              />
            </S.CoolFeaturesCardTask>

            <S.CoolFeaturesStudentOnComputer>
              <Image
                src="images/student-on-computer.svg"
                alt="student on computer"
                width={226}
                height={208}
              />
            </S.CoolFeaturesStudentOnComputer>

            <S.CoolFeaturesStudentWidthFruit>
              <Image
                src="images/student-with-fruit.svg"
                alt="student with fruit"
                width={120}
                height={130}
              />
            </S.CoolFeaturesStudentWidthFruit>

            <S.CoolFeaturesLoverStudents>
              <Image
                src="images/lover-students.svg"
                alt="lovers students"
                width={344}
                height={229}
              />
            </S.CoolFeaturesLoverStudents>

            <S.CoolFeaturesStudentOnCoach>
              <Image
                src="images/student-on-coach.svg"
                alt="student on coach"
                width={272}
                height={229}
              />
            </S.CoolFeaturesStudentOnCoach>
          </S.CoolFeaturesPictures>
        </S.CoolFeaturesSection>
      </Container>

      <S.SignUpNowSection>
        <S.SignUpNowAvatarFirstGroup>
          <Image
            src="images/avatar-first-group.svg"
            alt="user profile mosaic"
            width={439}
            height={637}
          />
        </S.SignUpNowAvatarFirstGroup>

        <Container>
          <S.SignUpNowContent>
            <Heading color="darkBlue" as="h2">
              Join a world of learning
            </Heading>
            <S.SignUpNowParagraph>
              Malesuada ut aliquam at ac est nisi, interdum etiam dignissim.
              Risus elit et fringilla habitant ut facilisi.
            </S.SignUpNowParagraph>
            <Button bold size="xxlarge">
              Sign Up Now
            </Button>
          </S.SignUpNowContent>
        </Container>

        <S.SignUpNowAvatarSecondGroup>
          <Image
            src="images/avatar-second-group.svg"
            alt="user profile mosaic"
            width={467}
            height={636}
          />
        </S.SignUpNowAvatarSecondGroup>
      </S.SignUpNowSection>
      <S.NextProjectSection>
        <Container>
          <S.NextProjectWrapper>
            <Heading color="white" as="h2">
              Ready for your next project?{' '}
            </Heading>

            <S.NextProjectDescription>
              Sit elit feugiat turpis sed integer integer accumsan turpis.
            </S.NextProjectDescription>

            <div>
              <SubmitProjectForm />
            </div>
          </S.NextProjectWrapper>
        </Container>
      </S.NextProjectSection>

      <S.WrapperFooter>
        <Container>
          <Footer />
        </Container>
      </S.WrapperFooter>
    </S.Wrapper>
  )
}
