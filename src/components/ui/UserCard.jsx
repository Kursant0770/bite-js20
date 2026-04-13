import { useState } from 'react'
import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { Button } from '../ui/Button'

export const UserCard = ({ title, price, oldPrice, weight, image }) => {
  const [count, setCount] = useState(0)

  const hasDiscount = !!(oldPrice && oldPrice > price)

  const handleAdd = () => setCount(1)
  const handleIncrement = () => setCount(count + 1)
  const handleDecrement = () => setCount(count - 1)

  return (
    <Card>
      <ImageWrapper>
        <img src={image} alt={title} />
        {hasDiscount && <Discount>-20%</Discount>}
      </ImageWrapper>

      <PriceRow>
        <CurrentPrice isDiscount={hasDiscount}>{price} сом</CurrentPrice>
        {hasDiscount && <OldPrice>{oldPrice} сом</OldPrice>}
      </PriceRow>

      <Title>{title}</Title>
      <Weight>{weight} г</Weight>

      {count === 0 ? (
        <AddButton onClick={handleAdd} variant="outlined">
          + Добавить
        </AddButton>
      ) : (
        <Counter>
          <CounterButton onClick={handleDecrement}>-</CounterButton>
          <Typography>{count}</Typography>
          <CounterButton onClick={handleIncrement}>+</CounterButton>
        </Counter>
      )}
    </Card>
  )
}

const Card = styled(Box)({
  width: '210px',
  backgroundColor: '#F5F4F2',
  borderRadius: '10px',
  padding: '10px',
})

const ImageWrapper = styled(Box)({
  position: 'relative',
  '& img': {
    width: '190px',
    height: '168px',
    borderRadius: '10px',
    objectFit: 'cover',
  },
})

const Discount = styled(Box)({
  position: 'absolute',
  bottom: '8px',
  right: '8px',
  backgroundColor: '#4caf50',
  color: 'white',
  padding: '2px 6px',
  borderRadius: '6px',
  fontSize: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const PriceRow = styled(Box)({
  display: 'flex',
  gap: '8px',
  alignItems: 'baseline',
  marginTop: '8px',
})

const CurrentPrice = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isDiscount',
})(({ isDiscount }) => ({
  fontSize: '18px',
  fontWeight: 400,
  color: isDiscount ? '#ff6b00' : '#000',
}))

const OldPrice = styled(Typography)({
  textDecoration: 'line-through',
  color: '#999',
})

const Title = styled(Typography)({
  marginTop: '6px',
  fontSize: '18px',
  fontWeight: 500,
})

const Weight = styled(Typography)({
  fontSize: '14px',
  color: '#000',
})

const Counter = styled(Box)({
  marginTop: '10px',
  height: '38px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid black',
  borderRadius: '10px',
  padding: '0 10px',
})

const CounterButton = styled(Button)({
  minWidth: 'auto',
  border: 'none',
  background: 'transparent',
  boxShadow: 'none',
  fontSize: '18px',
})

const AddButton = styled(Button)({
  width: '100%',
  marginTop: '10px',
  height: '38px',
})
