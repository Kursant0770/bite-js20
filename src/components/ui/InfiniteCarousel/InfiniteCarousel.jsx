import { useState } from 'react'
import { styled, keyframes } from '@mui/material'
import { LeftArrowIcon, RightArrowIcon } from '../../../assets/icons'

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-25%); } 
`

export const InfiniteCarousel = ({ data, speed = 25 }) => {
  const [paused, setPaused] = useState(false)

  if (!data || data.length === 0) return null

  const displayData = [...data, ...data, ...data, ...data]

  return (
    <StyleOuterContainer>
      <StyledArrow className="left" onClick={() => setPaused((p) => !p)}>
        <img src={LeftArrowIcon} />
      </StyledArrow>

      <StyledArrow className="right" onClick={() => setPaused((p) => !p)}>
        <img src={RightArrowIcon} />
      </StyledArrow>

      <StyleWrapper speed={speed} paused={paused}>
        {displayData.map((item, index) => (
          <StyleImageBox key={`${item.id}-${index}`}>
            <StyleImage src={item.image} alt="" />
          </StyleImageBox>
        ))}
      </StyleWrapper>
    </StyleOuterContainer>
  )
}

const StyleOuterContainer = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  margin: '20px 0 0',
})

const StyledArrow = styled('button')({
  position: 'absolute',
  top: '49%',
  zIndex: 10,
  transform: 'translateY(-50%)',
  transition: '0.3s',

  width: '38px',
  height: '38px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,

  '&.left': {
    left: '0',
  },

  '&.right': {
    right: '0',
  },

  '&:hover': {
    opacity: 0.8,
    transform: 'translateY(-50%) scale(1.1)',
  },
})

const StyleWrapper = styled('div', {
  shouldForwardProp: (prop) => prop !== 'speed' && prop !== 'paused',
})(({ speed, paused }) => ({
  width: 'max-content',
  display: 'flex',
  gap: '20px',

  animation: `${scroll} ${speed}s linear infinite`,

  animationPlayState: paused ? 'paused' : 'running',

  '&:hover': {
    animationPlayState: 'paused',
  },
}))

const StyleImageBox = styled('div')(() => ({
  flexShrink: 0,
}))

const StyleImage = styled('img')(() => ({
  width: '555px',
  height: '152px',
  borderRadius: '10px',
  objectFit: 'cover',
}))
