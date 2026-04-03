import { styled } from '@mui/material'

import MapIcon from '../../assets/icons/svgs/map.svg'
import MagnifierIcon from '../../assets/icons/svgs/magnifier.svg'
import WorldIcon from '../../assets/icons/svgs/world.svg'
import BasketIcon from '../../assets/icons/svgs/basket.svg'
import UserIcon from '../../assets/icons/svgs/user.svg'
import LogoIcon from '../../assets/icons/svgs/logo.svg'

import { Button } from './Button'

export const Header = ({
  address = 'Проспект Чуй, 120',
  isAuth = false,
  cartCount = 0,
  leftChildren,
  rightChildren,
  bottomChildren,
}) => {
  return (
    <HeaderWrapper>4
      <Left>
        <img src={LogoIcon} alt="logo" />
        <Address>
          <img src={MapIcon} alt="map" style={{ width: '16px', marginRight: '4px' }} />
          {address}
        </Address>
        {leftChildren}
      </Left>

      <Right>
        <SearchContainer>
          <SearchInput placeholder="Найти ресторан/кафе" />
          <SearchIconImg src={MagnifierIcon} alt="search" />
        </SearchContainer>

        {isAuth ? (
          <>
            <WorldStyle src={WorldIcon} alt="world" />
            <CartButton>
              <img src={BasketIcon} alt="basket" /> Корзина {cartCount}
            </CartButton>
            <User src={UserIcon} alt="user" />
          </>
        ) : (
          <StyleButton>Войти</StyleButton>
        )}
        {rightChildren}
      </Right>

      {bottomChildren}
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled('div')({
  width: '100%',
  height: '44px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
  backgroundColor: '#fff',
})

const Left = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
})

const Address = styled('div')({
  padding: '8px 20px',
  border: '1px solid #000000',
  borderRadius: '10px',
  gap: '10px',
  fontSize: '16px',
  display: 'flex',
  fontWeight: '400',
  marginLeft: '42px',
})

const Right = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
})

const SearchContainer = styled('div')({
  position: 'relative',
})

const SearchInput = styled('input')(({ theme }) => ({
  color: theme.palette.primary.black,
  width: '360px',
  height: '34px',
  borderRadius: '10px',
  border: `1px solid ${theme.palette.primary.black}`,
  padding: '8px 20px 8px 20px',
  outline: 'none',
  fontSize: '16px',
  '&:hover': {
    borderColor: theme.palette.primary.black,
    color: '#444444',
  },
  '&:active': {
    borderColor: theme.palette.primary.black,
    color: '#444444',
  },
  '&:error': {
    borderColor: theme.palette.error.main,
    color: '#444444',
  },
}))

const User = styled('img')(({ theme }) => ({
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.black,
  },
  '&:active': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.black,
  },
}))

const WorldStyle = styled('img')(({ theme }) => ({
  marginLeft: '20px',
  borderRadius: '10px',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.black,
  },
  '&:active': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.black,
  },
}))

const SearchIconImg = styled('img')({
  position: 'absolute',
  right: '20px',
  top: '50%',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
})

const StyleButton = styled(Button)(({ theme }) => ({
  border: '1px solid #000000',
  padding: '8px 22px 8px 22px',
  width: '93px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: '700',
  color: '#444444',
  lineHeight: '100%',
  marginLeft: '20px',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.black,
  },
  '&:active': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.black,
  },
}))

const CartButton = styled(Button)(({ theme }) => ({
  padding: '8px 10px 8px 10px',
  gap: '10px',
  fontSize: '16px',
  marginLeft: '10px',
  marginRight: '10px',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.black,
  },
  '&:active': {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.black,
  },
}))
