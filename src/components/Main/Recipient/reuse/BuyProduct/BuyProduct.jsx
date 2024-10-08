import './BuyProduct.scss';

const BuyProduct = ({ data }) => {
  return (
    <section className='buyProducts'>
      {data.map((item) => (
        <section className='buyProduct'>
          {/* <img src='' alt='' /> */}
          <div className='buyProduct-content'>
            <div className='buyProduct-img'></div>
            <div className='buyProduct-info'>
              <div className='buyProduct-info_name'>{item.name}</div>
              <div className='buyProduct-info_title'>
                <div className='buyProduct-info_color'>
                  <span>Цвет: </span>
                  <span> {item.color}</span>
                </div>
                <div className='buyProduct-info_taste'>
                  <span>Вкус:</span>
                  <span> {item.taste}</span>
                </div>
              </div>
            </div>
            <div className='buyProduct-btn'>
              <div className='buyProduct-btn_count'>{item.count}</div>
            </div>
            <div className='buyProduct-price'>
              <div className='buyProduct-price_count'>1990</div>
              <div>₽</div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default BuyProduct;
