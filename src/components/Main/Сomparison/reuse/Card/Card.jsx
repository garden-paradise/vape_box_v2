import './Card.scss';
import HeartRed from '../../../../../images/header/HeartRed.svg';
import Shopping from '../../../../../images/header/Shopping.svg';
import AspectRatio from 'react-aspect-ratio';

const Card = ({ info }) => {
  return info.map((info) => (
    <section className='card'>
      <div className='card-1block'>
        <div className='card-1blockHeart'>
          <img src={HeartRed} alt='HeartRedIMG' />
        </div>
        <div className='card-1blockDelete'>&#10006;</div>
      </div>
      <AspectRatio className='card-aspectRatio'>
        {/* <img src={} alt='productIMG' /> */}
      </AspectRatio>
      <div className='card-title'>{info.title}</div>
      <div className='card-2block'>
        <div>{info.count} ₽</div>
        <div className='card-2blockShop'>
          <img src={Shopping} alt='ShoppingIMG' />
        </div>
      </div>
    </section>
  ));
};

export default Card;
