import { AiOutlineEllipsis } from 'react-icons/ai'

export const Header = () => {
  return (
    <>
      <div>
        <h5>Welcome back Isabella!</h5>
        <p>Checkout today's weather information</p>
      </div>
      <div>
        <AiOutlineEllipsis size="2rem" style={{ marginRight: 20 }} />
        <img
          src='https://res.cloudinary.com/dx5ilizca/image/upload/v1677883696/yasir_zq8f4w.png'
          className="profile_image"
          alt="profile_picture"
        />
      </div>
    </>
  )
}
