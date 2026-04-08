import { useState } from 'react'
import { styled } from '@mui/material/styles'
import { List, ListItemButton, ListItemIcon, ListItemText, Box, Collapse } from '@mui/material'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import BannersIcon from '../../assets/icons/svgs/banners.svg'
import CategoriesIcon from '../../assets/icons/svgs/categories.svg'
import DishesIcon from '../../assets/icons/svgs/dishes.svg'
import EstablishmentsIcon from '../../assets/icons/svgs/establishments.svg'
import HomePageIcon from '../../assets/icons/svgs/home-page.svg'
import LogoIcon from '../../assets/icons/svgs/logo.svg'
import OrdersIcon from '../../assets/icons/svgs/orders.svg'
import ReviewsIcon from '../../assets/icons/svgs/reviews.svg'
import SettingsIcon from '../../assets/icons/svgs/settings.svg'
import IconamoonIcon from '../../assets/icons/svgs/iconamoon_discount-fill.svg'
import ModerationIcon from '../../assets/icons/svgs/moderation.svg'
import VectorIcon from '../../assets/icons/svgs/Vector (4).svg'

const adminMenu = [
  { text: 'Главная', icon: <Box component="img" src={HomePageIcon} alt="homepage" /> },
  { text: 'Заведения', icon: <Box component="img" src={EstablishmentsIcon} alt="establishment" /> },
]

const userMenu = [
  { text: 'Главная', icon: <Box component="img" src={HomePageIcon} alt="homepage" /> },
  {
    text: 'Мои заведения',
    icon: <Box component="img" src={EstablishmentsIcon} alt="establishment" />,
  },
  { text: 'Блюда', icon: <Box component="img" src={DishesIcon} alt="dishes" /> },
  { text: 'Баннеры', icon: <Box component="img" src={BannersIcon} alt="banner" /> },
  { text: 'Заказы', icon: <Box component="img" src={OrdersIcon} alt="order" /> },
  { text: 'Категории', icon: <Box component="img" src={CategoriesIcon} alt="categorie" /> },
  { text: 'Отзывы', icon: <Box component="img" src={ReviewsIcon} alt="review" /> },
  { text: 'Настройки', icon: <Box component="img" src={SettingsIcon} alt="setting" /> },
  { text: 'Промокод', icon: <Box component="img" src={IconamoonIcon} alt="iconamoon" /> },
]

const moderationChildren = [
  { text: 'Баннеры', icon: <Box component="img" src={BannersIcon} alt="banner" /> },
  { text: 'Отзывы', icon: <Box component="img" src={ReviewsIcon} alt="review" /> },
  { text: 'Блюда', icon: <Box component="img" src={DishesIcon} alt="dishes" /> },
]

const Sidebar = ({ role = 'admin', active, onChange, chaildren }) => {
  const [open, setOpen] = useState(false)

  const menu = role === 'admin' ? adminMenu : userMenu

  return (
    <SidebarWrapper>
      <Header>
        <Div>
          <Avatar>{chaildren}</Avatar>
          <Box component="img" src={VectorIcon} alt="logo" />
        </Div>
        <Logo src={LogoIcon} alt="logo" />
      </Header>

      <List>
        {menu.map((item) => (
          <MenuItem
            key={item.text}
            active={active === item.text ? 1 : 0}
            onClick={() => onChange(item.text)}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </MenuItem>
        ))}

        {role === 'admin' && (
          <>
            <MenuItem onClick={() => setOpen(!open)}>
              <ListItemIcon>
                <Box component="img" src={ModerationIcon} alt="moderation" />
              </ListItemIcon>
              <ListItemText primary="Модерация" />
              <RotateIcon open={open ? 1 : 0} />
            </MenuItem>

            <Collapse in={open} timeout="auto" unmountOnExit>
              <List>
                {moderationChildren.map((item) => (
                  <SubItem
                    key={item.text}
                    active={active === item.text ? 1 : 0}
                    onClick={() => onChange(item.text)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </SubItem>
                ))}
              </List>
            </Collapse>
          </>
        )}
      </List>
    </SidebarWrapper>
  )
}

export default Sidebar

const SidebarWrapper = styled(Box)({
  width: '280px',
  height: '100vh',
  backgroundColor: '#F5F4F2',
})

const Header = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #BDBDBD',
})

const MenuItem = styled(ListItemButton)(({ active }) => ({
  marginTop: '40px',
  paddingLeft: '20px',

  '&:hover': {
    backgroundColor: '#FFD600',
  },
  ...(active && {
    backgroundColor: '#FFD600',
  }),
}))

const SubItem = styled(ListItemButton)(({ active }) => ({
  paddingLeft: '60px',
  marginTop: '30px',

  '&:hover': {
    backgroundColor: '#FFD600',
  },
  ...(active && {
    backgroundColor: '#FFD600',
  }),
}))

const RotateIcon = styled(ExpandMoreIcon)(({ open }) => ({
  marginLeft: '80px',
  transition: '0.3s',
  transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
}))

const Avatar = styled(Box)({
  width: '34px',
  height: '34px',
  borderRadius: '10px',
  border: '1px solid #000000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Logo = styled('img')({
  display: 'flex',
  width: '80px',
  height: '42px',
})

const Div = styled(Box)({
  display: 'flex',
  gap: '4px',
  margin: '20px 60px 18px 20px',
})
