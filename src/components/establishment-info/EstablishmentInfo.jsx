import { Box, styled, Typography } from '@mui/material'

export const EstablishmentInfo = ({ data }) => {
  const {
    image,
    address,
    working_hours: { open, close },
    contacts: { phone, email },
    legal_info: { ip_number, seller, inn },
    categories,
  } = data

  return (
    <div>
      <StyledImageBox>
        <StyledImage src={image} alt="" />
      </StyledImageBox>

      <StyledH1 variant="h1">Информация о заведении</StyledH1>

      <StyledInfoBox>
        <div>
          <StyledH2 variant="h2">Адрес: </StyledH2>

          <StyledSpan component="span">{address}</StyledSpan>
        </div>

        <div>
          <StyledH2 variant="h2">График работы: </StyledH2>

          <StyledSpan component="span">
            с {open} до {close}
          </StyledSpan>
        </div>

        <StyledContactsBox>
          <StyledH2 variant="h2">Контакты: </StyledH2>

          <StyledSpan component="span">{phone}</StyledSpan>
          <StyledSpan component="span">{email}</StyledSpan>
        </StyledContactsBox>

        <div className="inline">
          <StyledH2 variant="h2">ИП: </StyledH2>
          <StyledSpan component="span">{ip_number}</StyledSpan>
        </div>

        <div>
          <StyledH2 variant="h2">Исполнитель (продавец): </StyledH2>
          <StyledSpan component="span">{seller}</StyledSpan>{' '}
        </div>

        <div>
          <StyledH2 variant="h2">Идентификационный номер налогоплатильщика: </StyledH2>
          <StyledSpan component="span">{inn}</StyledSpan>
        </div>

        <StyledFoodBox>
          <StyledH2 variant="h2">Категории еды: </StyledH2>
          {categories.map((cat) => (
            <StyledSpan component="span" key={cat}>
              {cat},
            </StyledSpan>
          ))}
        </StyledFoodBox>
      </StyledInfoBox>

      <div>
        <button>На доп. проверку</button>
        <button>Отклонить!</button>
        <button>Одобрить!</button>
      </div>
    </div>
  )
}

const StyledImageBox = styled(Box)({
  width: '900px',
  height: '364px',
})

const StyledImage = styled('img')({
  maxWidth: '900px',
  maxHeight: '364px',
  width: '100%',
  borderRadius: '10px',
  objectFit: 'cover',
})

const StyledH1 = styled(Typography)({
  width: '517px',
  height: '46px',
  marginTop: '40px',

  fontFamily: 'Helvetica',
  fontWeight: 700,
  fontSize: '40px',
  lineHeight: '100%',
})

const StyledInfoBox = styled(Box)({
  margin: '60px 0 80px',
  display: 'grid',
  gap: '20px',

  '& > .inline': {
    '& > h2': {
      display: 'inline',
    },
  },
})

const StyledH2 = styled(Typography)({
  height: '28px',

  fontFamily: 'Helvetica',
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '100%',
})

const StyledSpan = styled(Typography)({
  height: '28px',

  fontFamily: 'Helvetica',
  fontWeight: 400,
  fontSize: '24px',
  lineHeight: '100%',
})

const StyledContactsBox = styled(Box)({
  display: 'grid',
})

const StyledFoodBox = styled(Box)({
  display: 'flex',
  gap: '10px',
})
