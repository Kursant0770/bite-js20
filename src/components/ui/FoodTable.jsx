import { useState } from 'react'
import { styled } from '@mui/material/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  Typography,
  Box,
} from '@mui/material'
import deleteIcon from '../../assets/icons/svgs/clean-basket.svg'
import editIcon from '../../assets/icons/svgs/pencil-square.svg'

const initialFoods = [
  {
    id: 1,
    name: 'Картошка фри',
    price: 100,
    oldPrice: null,
    inStock: true,
    img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=120&h=90&fit=crop',
  },
  {
    id: 2,
    name: 'Самсы с картошкой',
    price: 130,
    oldPrice: null,
    inStock: true,
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=120&h=90&fit=crop',
  },
  {
    id: 3,
    name: 'Класический бургер',
    price: 210,
    oldPrice: null,
    inStock: true,
    img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=120&h=90&fit=crop',
  },
  {
    id: 4,
    name: 'Курица в панировке',
    price: 320,
    oldPrice: 400,
    inStock: true,
    img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=120&h=90&fit=crop',
  },
  {
    id: 5,
    name: 'Самсы с курицей',
    price: 130,
    oldPrice: null,
    inStock: false,
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=120&h=90&fit=crop',
  },
  {
    id: 6,
    name: 'Самсы с сыром',
    price: 130,
    oldPrice: null,
    inStock: true,
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=120&h=90&fit=crop',
  },
  {
    id: 7,
    name: 'Самсы с мясом',
    price: 130,
    oldPrice: null,
    inStock: true,
    img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=120&h=90&fit=crop',
  },
]

export default function FoodTable() {
  const [foods, setFoods] = useState(initialFoods)

  const deleteFood = (id) => setFoods((prev) => prev.filter((f) => f.id !== id))
  const toggleStock = (id) =>
    setFoods((prev) => prev.map((f) => (f.id === id ? { ...f, inStock: !f.inStock } : f)))

  return (
    <TableContainer sx={{ borderRadius: 1, boxShadow: '0 1px 4px rgba(0,0,0,0.1)' }}>
      <Table>
        <TableHead size="small">
          <TableRow>
            <HeaderCell padding="checkbox" />
            <HeaderCell>Товар</HeaderCell>
            <HeaderCell sx={{ textAlign: 'left' }}>Название товара</HeaderCell>
            <HeaderCell>Цена</HeaderCell>
            <HeaderCell>Статус</HeaderCell>
            <HeaderCell>Прочие</HeaderCell>
            <HeaderCell />
          </TableRow>
        </TableHead>

        <TableBody>
          {foods.map((food, index) => (
            <BodyRow key={food.id} index={index}>
              <BodyCell padding="checkbox">
                <Checkbox size="small" sx={{ '&.Mui-checked': { color: '#cc2222' } }} />
              </BodyCell>

              <BodyCell>
                <FoodImage src={food.img} alt={food.name} />
              </BodyCell>

              <BodyCell sx={{ textAlign: 'left' }}>{food.name}</BodyCell>

              <BodyCell>
                {food.oldPrice ? (
                  <Box>
                    <Typography fontSize={14} fontWeight={600} color="#e67e00">
                      {food.price} сом
                    </Typography>
                    <Typography fontSize={12} color="#999" sx={{ textDecoration: 'line-through' }}>
                      {food.oldPrice} сом
                    </Typography>
                  </Box>
                ) : (
                  `${food.price} сом`
                )}
              </BodyCell>

              <BodyCell>
                <StatusText instock={String(food.inStock)} onClick={() => toggleStock(food.id)}>
                  {food.inStock ? 'В наличии' : 'Нет в наличии'}
                  <p style={{ marginBottom: '5px', marginLeft: '5px' }}>⌄</p>
                </StatusText>
              </BodyCell>

              <BodyCell>
                <CompositionBtn>
                  Состав продукта
                  <p style={{ marginBottom: '5px', marginLeft: '5px' }}>⌄</p>
                </CompositionBtn>
              </BodyCell>

              <BodyCell>
                <Box display="flex" justifyContent="center" gap={1}>
                  <IconButton
                    size="small"
                    onClick={() => deleteFood(food.id)}
                    sx={{ color: '#bbb', '&:hover': { color: '#cc2222' } }}
                  >
                    <img src={deleteIcon} alt="Delete" fontSize="small" />
                  </IconButton>
                  <IconButton size="small" sx={{ color: '#bbb', '&:hover': { color: '#2255cc' } }}>
                    <img src={editIcon} alt="Edit" fontSize="small" />
                  </IconButton>
                </Box>
              </BodyCell>
            </BodyRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

const HeaderCell = styled(TableCell)({
  background: '#cc2222',
  color: '#fff',
  fontWeight: 600,
  fontSize: 13,
  textAlign: 'center',
  padding: '10px 12px',
  borderBottom: 'none',
})

const BodyRow = styled(TableRow)(({ index }) => ({
  background: index % 2 === 0 ? '#fafafa' : '#f2f2f2',
  '&:hover': { background: '#e8e8e8' },
}))

const BodyCell = styled(TableCell)({
  padding: '8px 12px',
  borderBottom: '1px solid #e8e8e8',
  textAlign: 'center',
  fontSize: 14,
})

const FoodImage = styled('img')({
  width: 80,
  height: 60,
  objectFit: 'cover',
  borderRadius: 6,
  display: 'block',
})

const StatusText = styled(Typography)(({ instock }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 2,
  fontSize: 13,
  fontWeight: 500,
  cursor: 'pointer',
  color: instock === 'true' ? '#27ae60' : '#e67e00',
}))

const CompositionBtn = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 2,
  fontSize: 13,
  color: '#333',
  cursor: 'pointer',
})
