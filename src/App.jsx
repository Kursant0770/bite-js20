import { UserCard } from './components/ui/UserCard'
import styled from '@emotion/styled'

export const App = () => {
  const products = [
    {
      id: 1,
      title: 'Самсы с картошкой',
      price: 130,
      weight: 150,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCYUJrRg5_CplzwWwcgEucgWrk2EL5HCMKeQ&s',
    },
    {
      id: 2,
      title: 'Курица в панировке',
      price: 320,
      oldPrice: 400,
      weight: 550,
      image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92',
    },
  ]

  const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
  `

  return (
    <Wrapper>
      {products.map((item) => (
        <UserCard
          key={item.id}
          title={item.title}
          price={item.price}
          oldPrice={item.oldPrice}
          weight={item.weight}
          image={item.image}
        />
      ))}
    </Wrapper>
  )
}
