'use client'

import media from 'styled-media-query'
import Image from 'next/image'
import styled, { css } from 'styled-components'

import Blob from 'assets/images/Blob'
import * as TaskCardStyles from 'components/TaskCard/styles'
import * as CustomDotsSliderStyles from 'components/CustomDotsCarousel/styles'

export const Wrapper = styled.div``

export const TeachSection = styled.section`
  ${({ theme }) => css`
    display: Grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.grid.containerGutter};

    ${media.lessThan('medium')`
      grid-template-columns: none;
      grid-template-rows: repeat(2, 1fr);
      gap: calc(${theme.spacings.xmedium} * 2);
      `}
  `}
`

export const TeachSectionLeft = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.spacings.xhuge} 0;
    flex-direction: column;
    gap: ${theme.spacings.huge};

    ${media.lessThan('medium')`
      margin:  0;
      margin-top: ${theme.spacings.xlarge};
      gap: ${theme.spacings.medium};
      `}
  `}
`

export const TeachSectionLeftContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};

    ${media.lessThan('medium')`
      gap: ${theme.spacings.xmedium};
      `}
  `}
`

export const TeachSectionLeftParagraph = styled.p`
  ${({ theme }) => css`
    margin: 0;
    display: flex;
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.darkGray};
    line-height: 1.6;

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
      `}
  `}
`

export const TeachSectionLeftButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacings.medium};

    ${media.lessThan('medium')`
      gap: ${theme.spacings.xmedium};
      `}
  `}
`

export const TeachLeftSectionBelow = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xlarge};
    flex-direction: row;
    align-items: center;

    ${media.lessThan('medium')`
      flex-direction: column;
      gap: calc(${theme.spacings.xxsmall} * 2);
      align-items: flex-start;
      `}
  `}
`

export const TeachLeftSectionBelowCompanies = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.blueGray600};
    width: 13.5rem;

    ${media.lessThan('medium')`
     font-size: ${theme.font.sizes.medium};
     width: 36.1rem;
    `}
  `}
`

export const TeachLeftSectionBelowIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xlarge};

    ${media.lessThan('medium')`
      gap: ${theme.spacings.xmedium};
      `}
  `}
`

export const TeachSectionRight = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.spacings.huge} 0;

    ${media.lessThan('medium')`
      margin: 0;
      margin-bottom: ${theme.spacings.xlarge};
      align-items: center;
      justify-content: center;
    `}
  `}
`

export const ImageContainer = styled.div`
  position: relative;
  width: 62.46rem;
  height: 41.5rem;

  ${media.lessThan('medium')`
  width: 36.1rem;
  height: 32.9rem;
`}
`

export const StyledImage = styled(Image)`
  object-fit: fill;
`

export const MoreAboutSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.grid.containerGutter};
    position: relative;

    ${media.lessThan('medium')`
      flex-direction: column;
      gap: ${theme.spacings.medium};
      max-width: 36.1rem;
      overflow: hidden;
      `}
  `}
`

export const MoreAboutLeftSectionContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: calc(${theme.spacings.huge} * 2);
    width: 54.4rem;
    height: 35.2rem;
    gap: ${theme.spacings.medium};

    ${media.lessThan('medium')`
      margin-top: ${theme.spacings.xlarge};
      gap: none;
      width: 36.1rem;
      height: auto;
      z-index: 3;
      `}
  `}
`

export const MoreAboutLessDescription = styled.p`
  ${({ theme }) => css`
    display: none;
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.normal};
    line-height: 1.4;
  `}

  ${media.lessThan('medium')`
    display: flex;
  `}
`

export const MoreAboutLeftSectionParagraph = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.327rem;
  align-items: center;

  ${media.lessThan('medium')`
    position: relative;

  `}
`

export const MoreAboutIconWrapper = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;

  ${media.lessThan('medium')`
    position: absolute;
    top: 3px;
    `}
`

export const MoreAboutParagraph = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xlarge};
    line-height: 1.8;
    margin: 0;

    ${media.lessThan('medium')`
      margin-left: 3.2rem;
      `}
  `}
`

export const MoreAboutCenterSection = styled.div`
  display: inline-block;
  position: absolute;
  top: 4.7rem;
  box-sizing: border-box;
  left: 59.6rem;
  transform: translate(-50%);
  z-index: -1;

  ${media.lessThan('medium')`
    top: 61.3%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`

export const ResponsiveBlob = styled(Blob)`
  width: 100%;
  height: auto;
  max-width: 36.1rem;
`

export const MoreAboutBlobSection = styled.div`
  display: flex;
  position: absolute;
  width: 36.1rem;
  left: 55.6rem;
  top: 11rem;
  z-index: -2;

  ${media.lessThan('medium')`
    left: 31%;
    top: 69%;
    transform: translate(-50%, -50%);


    svg {
      width: 100%;
      height: 31rem;
    }
  `}
`

export const MoreAboutRightSection = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.spacings.huge} 0;
    position: relative;
    width: 65.6rem;
    height: 54.7rem;

    ${media.lessThan('medium')`
       margin: 0;
       width: 36.1rem;
    `}
  `}
`

export const ImageVideo = styled.div`
  display: flex;
  position: absolute;
  right: -7.7%;
  top: -2%;
  justify-content: flex-end;

  ${media.lessThan('medium')`
    top: -100px;
    bottom: 0px;
    right: 0;
    left: -10px;
    justify-content: none;

  `}
`

export const PlayerContainer = styled.div`
  position: relative;
  width: 62.46rem;
  height: 41.5rem;

  ${media.lessThan('medium')`
  width: 34.78rem;
  height: 275rem;
`}
`

export const StyledPlayerContainer = styled(Image)`
  object-fit: fill;
`

export const TaskCardSection = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.6rem;
  z-index: 1;

  ${media.lessThan('medium')`
    align-items: none;
    margin-left: 2.2rem;
    margin-bottom: 12rem;

  `}
`

export const CarouselSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    background-color: ${theme.colors.yellow};
    justify-content: center;
    align-items: center;
    padding: ${theme.grid.containerGutter} 0;
    z-index: 0;

    ${media.lessThan('medium')`
      padding: 0;
      height: 68.4rem;
      `}

    ${CustomDotsSliderStyles.Wrapper} {
      z-index: 1;
    }
  `}
`

export const CustomCarrouselContent = styled.div`
  display: flex;
  position: relative;
`

export const MeetSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    height: 81.1rem;
    gap: ${theme.grid.containerGutter};

    ${media.lessThan('medium')`
    padding: ${theme.spacings.xlarge};
      flex-direction: column-reverse;
      gap: ${theme.spacings.xlarge};
      `}
  `}
`

export const ImagesMeet = styled.div`
  display: flex;
  height: 81.1rem;
  justify-content: center;
  align-items: center;
`

export const MeetImageContainer = styled.div`
  ${({ theme }) => css`
    display: block;
    padding: ${theme.grid.containerGutter} 0;
    max-width: calc(${theme.spacings.xxsmall} * 75);
    position: relative;
    width: 60rem;
    height: 65.1rem;
  `}

  ${media.lessThan('medium')`
  width: 36.1rem;
  height: 30.9rem;
`}
`

export const StyledMeetImage = styled(Image)`
  object-fit: contain;
`

export const MeetDescription = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: calc(${theme.spacings.xxsmall} * 75);
    padding: 21.15rem 0;
    gap: ${theme.spacings.medium};

    ${media.lessThan('medium')`
      padding: 0;
      gap: ${theme.spacings.xmedium};
      max-width: 36.1rem;
      height: 26.3rem;
      `}
  `}
`

export const MeetDescriptionParagraph = styled.p`
  ${({ theme }) => css`
    margin: 0;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    line-height: 1.8;

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
      line-height: 1.4;
      `}
  `}
`

export const StatsSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    height: 37.3rem;
    align-items: center;
    background-color: ${theme.colors.darkBlue};
    margin-bottom: ${theme.spacings.huge};

    ${media.lessThan('medium')`
      justify-content: center;
      align-items: none;
height: auto;
      padding: ${theme.spacings.xlarge} 0;
      `}
  `}
`

export const StatsContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.grid.containerGutter};

    ${media.lessThan('medium')`
      flex-direction: column;
      gap: ${theme.spacings.xlarge};

      `}
  `}
`

export const FeedbackSection = styled.section`
  display: flex;
  margin-bottom: 6rem;
  flex-direction: column;
`

export const FeedbackHeaderSection = styled.div`
  display: flex;
  width: 128rem;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  margin-bottom: 6rem;
`

export const ArrowsSection = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xmedium};
    align-items: center;
    height: 6.2rem;
  `}
`

export const LeftArrow = styled.button`
  ${({ theme }) => css`
    display: flex;
    background: none;
    border: none;
    height: fit-content;
    color: ${theme.colors.orange};

    padding: fit-content;
    margin: fit-content;

    &:hover {
      cursor: pointer;
      color: ${theme.colors.lightOrange};

      > svg {
        color: inherit;
      }
    }
  `}
`
export const RightArrow = styled.button`
  ${({ theme }) => css`
    display: flex;
    background: none;
    border: none;
    height: fit-content;
    color: ${theme.colors.orange};

    &:hover {
      cursor: pointer;
      color: ${theme.colors.lightOrange};

      > svg {
        color: inherit;
      }
    }
  `}
`

export const CustomContainer = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding-left: ${theme.grid.containerGutter};
    padding-right: 0;

    ${media.lessThan('medium')`
      max-width: 39.3rem;
      padding-left: calc(${theme.spacings.xxsmall} * 2);

      `}
  `}
`

export const FeedbackCarouselSection = styled.div`
  display: flex;
`

export const CoolFeaturesSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    height: 63.9rem;
    gap: ${theme.grid.containerGutter};
    flex-direction: row;

    ${media.lessThan('medium')`
      flex-direction: column;
      height: 81.3rem;
      gap: 2.85rem;
      `}
  `}
`

export const CoolFeaturesInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: calc(${theme.grid.containerGutter} * 7.5);
    gap: ${theme.spacings.medium};
    margin: 15.6rem 0;

    ${media.lessThan('medium')`
      margin: 0;
      gap: ${theme.spacings.xmedium};
      width: 36.1rem;
      height: 23.2rem;
      overflow: hidden;
      `}
  `}
`

export const CoolFeaturesParagraph = styled.p`
  ${({ theme }) => css`
    margin: 0;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    line-height: 1.8;

    ${media.lessThan('medium')`
        font-size: ${theme.font.sizes.medium};
        line-height: 1.4;
      `}
  `}
`

export const CoolFeaturesPictures = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    width: calc(${theme.grid.containerGutter} * 7.5);
    height: 55.4rem;
    margin-top: 3.75rem;

    ${media.lessThan('medium')`
      left: -20%;
      top: -5%;
      `}
  `}
`

export const CoolFeaturesBlob = styled.div`
  ${({ theme }) => css`
    display: block;
    position: absolute;
    right: calc(${theme.spacings.xxsmall} * 2);
    z-index: -2;
  `}
`

export const CoolFeaturesStars = styled.div`
  display: block;
  position: absolute;
  right: 9rem;
  top: -1.2rem;
  z-index: -1;
`

export const CoolFeaturesCardTask = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-left: 7rem;
    margin-top: 4.3rem;

    ${TaskCardStyles.Wrapper} {
      width: 22.5rem;
      z-index: 1;

      ${media.lessThan('medium')`
      width: 22.5rem;
      height: 22.16rem;
      `}
    }

    ${TaskCardStyles.CustomButton} {
      width: 19.3rem;

      ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.xxsmall} 4.6rem;
      width: 19.3rem;
      height: ${theme.spacings.large};
    `}
    }
  `}
`

export const CoolFeaturesStudentOnComputer = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin-top: 10.5rem;
    margin-left: calc(${theme.spacings.xxsmall} / 2);
  `}
`

export const CoolFeaturesStudentWidthFruit = styled.div`
  display: flex;
  margin-top: 16.5rem;
  margin-left: -7.8rem;
`

export const CoolFeaturesLoverStudents = styled.div`
  display: flex;
  position: absolute;
  top: 28.9rem;
  left: 5rem;
`

export const CoolFeaturesStudentOnCoach = styled.div`
  display: flex;
  position: absolute;
  top: 28.9rem;
  left: 37.8rem;
`

export const SignUpNowSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    height: 77.9rem;
    align-items: center;
    background-color: ${theme.colors.yellow};

    ${media.lessThan('medium')`
      height: 65.43rem;
      flex-direction: column;
      gap: ${theme.spacings.medium};
      `}
  `}
`

export const SignUpNowAvatarFirstGroup = styled.div`
  display: flex;
`

export const SignUpNowAvatarSecondGroup = styled.div`
  display: flex;
`

export const SignUpNowContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: ${theme.grid.columnGutter};
  `}
`

export const SignUpNowParagraph = styled.p`
  ${({ theme }) => css`
    margin: 0;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    line-height: 1.8;
    color: ${theme.colors.darkGray};

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.medium};
      line-height: 1.4;
      `}
  `}
`

export const NextProjectSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    height: 67.9rem;
    padding: 8.6rem 0;
    background-color: ${theme.colors.orange};

    ${media.lessThan('medium')`
      height: 61rem;
      padding: ${theme.spacings.xlarge} 0;
      /* align-items: center; */
      `}
  `}
`

export const NextProjectWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.medium};
    flex-direction: column;
  `}
`

export const NextProjectDescription = styled.p`
  ${({ theme }) => css`
    margin: 0;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxxlarge};
    font-weight: ${theme.font.small};
    line-height: 1.6;

    ${media.lessThan('medium')`
      font-size: ${theme.font.sizes.large};
      text-align: center;
      `}
  `}
`

export const WrapperFooter = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.darkBlue};
  `}
`
