import { styled } from '@mui/material'
import { useState } from 'react'
import { NoteIcon, NoteStateIcon } from '../../assets/icons'
import { BagIcon } from '../../assets/icons'

export const Card = ({ data }) => {
  const { name, image, deliveryTime, discount } = data
  const [bookmarked, setBookmarked] = useState(false)

  return (
    <StyledCard>
      <StyledImageWrapper>
        <StyledImage src={image} alt={name} />
        <StyledBookmark bookmarked={bookmarked} onClick={() => setBookmarked((prev) => !prev)}>
          {bookmarked ? <img className="noteState" src={NoteStateIcon} /> : <img src={NoteIcon} />}
        </StyledBookmark>
      </StyledImageWrapper>

      <StyledInfo>
        <StyledName>{name}</StyledName>
        <StyledDelivery>
          <StyledDeliveryIcon src={BagIcon} />
          <StyledDeliveryTime>{deliveryTime} мин</StyledDeliveryTime>
        </StyledDelivery>
        {discount && <StyledDiscount>-{discount}% на ряд блюд</StyledDiscount>}
      </StyledInfo>
    </StyledCard>
  )
}

const StyledCard = styled('div')({
  maxWidth: '325px',
  maxHeight: '255px',
  width: '100%',
  height: '255px',
  overflow: 'hidden',
})

const StyledImageWrapper = styled('div')({
  position: 'relative',
})

const StyledImage = styled('img')({
  maxWidth: '325px',
  maxHeight: '182px',
  width: '100%',
  height: '182px',
  borderRadius: '10px',
  objectFit: 'cover',
  display: 'block',
})

const StyledBookmark = styled('button')({
  position: 'absolute',
  top: 10,
  right: 10,
  border: 'none',
  width: '34px',
  height: '34px',
  cursor: 'pointer',
  background: 'rgba(0, 0, 0, 0)',

  '& .noteState': {
    width: '17px',
  },
})

const StyledInfo = styled('div')({
  marginTop: '10px',
  maxHeight: '63px',
})

const StyledName = styled('h3')({
  fontFamily: 'Helvetica',
  fontWeight: '400',
  lineHeight: '100%',
  height: '18px',
  fontSize: '16px',
})

const StyledDelivery = styled('div')({
  marginTop: '6px',
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
  color: '#000000',
})

const StyledDeliveryIcon = styled('img')({
  width: '18px',
  height: '18px',
})

const StyledDeliveryTime = styled('span')({
  fontFamily: 'Helvetica',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '100%',
})

const StyledDiscount = styled('span')({
  marginTop: '10px',
  height: '11px',
  display: 'inline-block',
  background: '#48C60233',
  color: '#48C602',
  fontSize: '10px',
  padding: '0 8px',
  borderRadius: '10px',
  lineHeight: '100%',
  fontFamily: 'Helvetica',
  fontWeight: 400,
})
