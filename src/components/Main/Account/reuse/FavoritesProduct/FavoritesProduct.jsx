import './FavoritesProduct.scss';
import Shopping from './../../../../../images/header/Shopping.svg';
import { NavLink } from 'react-router-dom';

const FavoritesProduct = ({ data }) => {
  return (
    <section className='favoritesProducts'>
      {data.map((item) => (
        <section className='favoritesProduct'>
          {/* <img src='' alt='' /> */}
          <div className='favoritesProduct-delete'>&#10006;</div>
          <div className='favoritesProduct_info'>
            <div className='favoritesProduct_info-img'></div>
            <div className='favoritesProduct_info-name'>{item.name}</div>
            <div className='favoritesProduct_info-sum'>{item.sum} ₽</div>
            <NavLink to='/' >
              <img src={Shopping} alt='ShoppingImg' />
            </NavLink>
          </div>
        </section>
      ))}
    </section>
  );
};

export default FavoritesProduct;
