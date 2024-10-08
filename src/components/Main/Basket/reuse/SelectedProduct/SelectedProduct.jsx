import './SelectedProduct.scss';

const SelectedProduct = ({ data }) => {
  return (
    <section className='selectedProducts'>
      {data.map((item) => (
        <section className='selectedProduct'>
          {/* <img src='' alt='' /> */}
          <div className='selectedProduct-delete'>&#10006;</div>
          <div className='selectedProduct-content'>
            <div className='selectedProduct-img'></div>
            <div className='selectedProduct-info'>
              <div className='selectedProduct-info_name'>{item.name}</div>
              <div className='selectedProduct-info_title'>
                <div className='selectedProduct-info_color'>
                  <span>Цвет: </span>
                  <span> {item.color}</span>
                </div>
                <div className='selectedProduct-info_taste'>
                  <span>Вкус:</span>
                  <span> {item.taste}</span>
                </div>
              </div>
            </div>
            <div className='selectedProduct-btn'>
              <div className='selectedProduct-btn_c'>-</div>
              <div className='selectedProduct-btn_count'>{item.count}</div>
              <div className='selectedProduct-btn_c'>+</div>
            </div>
            <div className='selectedProduct-price'>
              <div className='selectedProduct-price_count'>1990</div>
              <div>₽</div>
            </div>
          </div>
        </section>
      ))}
    </section>
  );
};

export default SelectedProduct;
