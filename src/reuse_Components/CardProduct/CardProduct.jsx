import Heart from './../../images/header/Heart.svg';
import ArrowsClockwise from './../../images/header/ArrowsClockwise.svg';
import ChatCircle from './../../images/header/ChatCircle.svg';
import Shopping from './../../images/header/Shopping.svg';
import { NavLink } from 'react-router-dom';
import './CardProduct.scss';
import ColorCount from '../ColorCount/ColorCount';

const CardProduct = ({ date }) => {
  return (
    <section className='cardProducts'>
      {date.map((item) => (
        <section className='cardProduct'>
          <div className='cardProduct_img'>
            <div className='cardProduct_right'>
              <div className='cardProduct_icon'>
                <img src={Heart} alt='image' />
              </div>
              <div className='cardProduct_icon'>
                <img src={ArrowsClockwise} alt='image' />
              </div>
            </div>
          </div>
          <div className='cardProduct_comments'>
            <div className='cardProduct_comments_info'>
              <img src={ChatCircle} alt='image' />
              <div className='cardProduct_comments_count'>
                {item.countMessage}
              </div>
            </div>
            <ColorCount />
          </div>
          <div className='cardProduct_name'>
            <NavLink className='cardProduct_name-link' to='/product'>
              {item.name}
            </NavLink>
          </div>
          <div className='cardProduct_pay'>
            <div className='cardProduct_pay_num'>{item.sum} ₽</div>
            <div className='cardProduct_icon_shop'>
              <NavLink to='/new'>
                <img src={Shopping} alt='image' />
              </NavLink>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default CardProduct;
