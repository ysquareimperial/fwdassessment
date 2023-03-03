import { AiOutlineEllipsis } from 'react-icons/ai'
import profileImage from './images/Yasir.png'

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
          src={profileImage}
          className="profile_image"
          alt="profile_picture"
        />
      </div>
    </>
  )
}
