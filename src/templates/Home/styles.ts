'use client'

import styled, { css } from 'styled-components'

import * as TaskCardStyles from 'components/TaskCard/styles'
import * as CustomDotsSliderStyles from 'components/CustomDotsCarousel/styles'

export const Wrapper = styled.div``

export const TeachSection = styled.section`
  ${({ theme }) => css`
    display: Grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.grid.containerGutter};
  `}
`

export const TeachSectionLeft = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.spacings.xhuge} 0;
    flex-direction: column;
    gap: ${theme.spacings.huge};
  `}
`

export const TeachSectionLeftContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.medium};
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
  `}
`

export const TeachSectionLeftButtons = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacings.medium};
  `}
`

export const TeachLeftSectionBelow = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xlarge};
    flex-direction: row;
    align-items: center;
    padding-right: ${theme.spacings.xlarge};
  `}
`

export const TeachLeftSectionBelowCompanies = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.blueGray600};
    width: 13.5rem;
  `}
`

export const TeachLeftSectionBelowIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xlarge};
  `}
`

export const TeachSectionRight = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.spacings.huge} 0;
  `}
`

export const MoreAboutSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.grid.containerGutter};
    position: relative;
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
  `}
`

export const MoreAboutLeftSectionParagraph = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.327rem;
`

export const MoreAboutParagraph = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.normal};
    font-size: ${theme.font.sizes.xlarge};
    line-height: 1.8;
    margin: 0;
  `}
`

export const MoreAboutCenterSection = styled.div`
  display: inline-block;
  position: absolute;
  top: 4.7rem;
  box-sizing: border-box;
  left: 59.6rem;
  transform: translate(-50%);
`

export const MoreAboutBlobSection = styled.div`
  display: block;
  position: absolute;
  left: 55.6rem;
  top: 11rem;
  z-index: -1;
`

export const MoreAboutRightSection = styled.div`
  ${({ theme }) => css`
    display: flex;
    margin: ${theme.spacings.huge} 0;
    position: relative;
    width: 65.6rem;
    height: 54.7rem;
  `}
`

export const ImageVideo = styled.div`
  display: flex;
  position: absolute;
  right: -7.7%;
  top: -2%;
  justify-content: flex-end;
`

export const TaskCardSection = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.6rem;
  z-index: 1;
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
  `}
`

export const ImagesMeet = styled.div`
  ${({ theme }) => css`
    padding: ${theme.grid.containerGutter} 0;
    max-width: calc(${theme.spacings.xxsmall} * 75);
  `}
`

export const MeetDescription = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    max-width: calc(${theme.spacings.xxsmall} * 75);
    padding: 21.15rem 0;
    gap: ${theme.spacings.medium};
  `}
`

export const MeetDescriptionParagraph = styled.p`
  ${({ theme }) => css`
    margin: 0;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    line-height: 1.8;
  `}
`

export const StatsSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    height: 37.3rem;
    align-items: center;
    background-color: ${theme.colors.darkBlue};
    margin-bottom: ${theme.spacings.huge};
  `}
`

export const StatsContent = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.grid.containerGutter};
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
  `}
`

export const CoolFeaturesInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: calc(${theme.grid.containerGutter} * 7.5);
    gap: ${theme.spacings.medium};
    margin: 15.6rem 0;
  `}
`

export const CoolFeaturesParagraph = styled.p`
  ${({ theme }) => css`
    margin: 0;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.normal};
    line-height: 1.8;
  `}
`

export const CoolFeaturesPictures = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    width: calc(${theme.grid.containerGutter} * 7.5);
    height: 55.4rem;
    margin-top: 3.75rem;
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
  display: flex;
  margin-left: 7rem;
  margin-top: 4.3rem;

  ${TaskCardStyles.Wrapper} {
    width: 22.5rem;
    z-index: 1;
  }

  ${TaskCardStyles.CustomButton} {
    width: 19.3rem;
  }
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
  `}
`

export const NextProjectSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    height: 67.9rem;
    padding: 8.6rem 0;
    background-color: ${theme.colors.orange};
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
  `}
`

export const WrapperFooter = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.darkBlue};
  `}
`
