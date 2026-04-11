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
      <div>
        <img src={image} alt="" />
      </div>

      <h1>Информация о заведении</h1>

      <div>
        <div>
          <h2>Адрес:</h2>

          <span>{address}</span>
        </div>

        <div>
          <h2>График работы:</h2>

          <span>
            с {open} до {close}
          </span>
        </div>

        <div>
          <h2>Контакты:</h2>

          <span>{phone}</span>
          <span>{email}</span>
        </div>

        <h2>ИП:{ip_number}</h2>

        <div>
          <h2>Исполнитель (продавец):</h2>
          <span>{seller}</span>
        </div>

        <div>
          <span>Идентификационный номер налогоплатильщика: </span>
          <span>{inn}</span>
        </div>

        <h1>
          Категории еды:
          {categories.map((cat) => (
            <span key={cat}>{cat},</span>
          ))}
        </h1>
      </div>

      <div>
        <button>На доп. проверку</button>
        <button>Отклонить!</button>
        <button>Одобрить!</button>
      </div>
    </div>
  )
}
