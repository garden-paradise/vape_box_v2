import './MyOrderProduct.scss';
import Caret from './../../../../../images/main/all/CaretW.svg';
import Collapsible from 'react-collapsible';

const MyOrderProduct = ({ data }) => {
  return (
    <section className='myOrderProducts'>
      {data.map((item) => (
        <Collapsible
          transitionTime={150}
          className='MyOrderProduct'
          triggerClassName='MyOrderProductCollapsible'
          triggerOpenedClassName='MyOrderProductCollapsible_open'
          trigger={[
            <section className='myOrderProduct'>
              {/* <img src='' alt='' /> */}
              <div className='myOrderProduct-img'></div>
              <div className='myOrderProduct-name'>{item.name}</div>
              <div className='myOrderProduct-count'>{item.count}</div>
              <div className='myOrderProduct-sum'>{item.sum} ₽</div>
              <div className='myOrderProduct-stasus'>{item.stasus}</div>
            </section>,
            <img className='arrowImg' src={Caret} alt='CaretImg' />,
          ]}
          triggerTagName='div'
        >
          <div className='myOrderProducts_info'>
            <div>
              <div className='myOrderProducts_info-title'>Дата заказа</div>
              <div className='myOrderProducts_info-subTitle'>{item.date}</div>
            </div>
            <div>
              <div className='myOrderProducts_info-title'>Адрес магазина</div>
              <div className='myOrderProducts_info-subTitle'>
                {item.address}
              </div>
            </div>
            <div>
              <div className='myOrderProducts_info-title'>Получатель</div>
              <div className='myOrderProducts_info-subTitle'>
                {item.recipient}
              </div>
            </div>
          </div>
        </Collapsible>
      ))}
    </section>
  );
};

export default MyOrderProduct;
