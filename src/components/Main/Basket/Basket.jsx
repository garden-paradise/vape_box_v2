import { NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import './Basket.scss';
import SelectedProduct from './reuse/SelectedProduct/SelectedProduct';
import { Field, Form } from 'react-final-form';
import {
  emailValidator,
  phoneValidator,
  requiredValidator,
} from '../../../utils/validators';
import Title from '../../../reuse_Components/Title/Title';

const onSubmit = (values) => {
  console.log(values);
};

const Basket = () => {
  return (
    <section className='basket'>
      <Title title='Корзина' linkUrl='' linkName='Вернуться к покупкам' />
      <div className='basket_sec1'>
        <div className='basket_sec1_left'>
          <div className='basket_sec1_left_products'>
            <SelectedProduct
              data={[
                {
                  name: 'Smoant Battlestar Baby Pod Kit',
                  color: 'черно-зеленый',
                  taste: 'кислое яблоко',
                  count: 1,
                },
                {
                  name: 'Smoant Battlestar Baby Pod Kit',
                  color: 'черно-зеленый',
                  taste: 'кислое яблоко',
                  count: 1,
                },
              ]}
            />
          </div>
          <div className='basketBlock'>
            <div className='basketBlock_title'>Оформление заказа</div>
          </div>

          <Collapsible
            open={true}
            transitionTime={250}
            triggerClassName='CustomTriggerCSS'
            triggerOpenedClassName='CustomTriggerCSS_open'
            trigger='1. Доставка'
            triggerTagName='div'
          >
            <div className='basketBlock_delivery'>
              <div className='basketBlock_delivery-citiTitle'>
                Выберите город
              </div>
              <div className='basketBlock_delivery-citiInput'>
                <div>Москва</div>
                {/* <div className='basketBlock_delivery-citiInput-close'>&#215;</div> */}
              </div>
              <div className='basketBlock_delivery-deliveryTitle'>
                Cпособ доставки
              </div>
              <div className='basketBlock_delivery-delivery'>
                <div className='basketBlock_delivery-deliveryPickup'>
                  <div>Самовывоз из магазина</div>
                  <div className='basketBlock_delivery-deliveryCircle'></div>
                </div>
                <div className='basketBlock_delivery-deliveryBron'>
                  Забронирован в магазине, забрать можете сегодня. Срок хранения
                  1 день.
                </div>
                <div>Бесплатно</div>
              </div>
            </div>
          </Collapsible>

          <Collapsible
            transitionTime={250}
            triggerClassName='CustomTriggerCSS'
            triggerOpenedClassName='CustomTriggerCSS_open'
            trigger='2. Оплата'
            triggerTagName='div'
          >
            <div className='basketBlock_pay'>
              <div className='basketBlock_pay-title'>
                Выберите удобный для Вас способ оплаты
              </div>
              <div className='basketBlock_pay-change'>Способ оплаты</div>
              <div className='basketBlock_delivery-delivery'>
                <div className='basketBlock_delivery-deliveryPickup'>
                  <div>Оплата наличными</div>
                  <div className='basketBlock_delivery-deliveryCircle'></div>
                </div>
                <div className='basketBlock_pay-subtitle'>
                  Оплата производится только при получении товара
                </div>
              </div>
            </div>
          </Collapsible>

          <Collapsible
            transitionTime={250}
            triggerClassName='CustomTriggerCSS'
            triggerOpenedClassName='CustomTriggerCSS_open'
            trigger='3. Получатель'
            triggerTagName='div'
          >
            <div className='basketBlock_recipient'>
              <div className='basketBlock_recipient-title'>
                Укажите Ваши данные чтобы быть в курсе статуса заказа.
                Персональные данные обрабатываются в соответствии с &nbsp;
                <NavLink to='/' className='basketBlock_recipient-url'>
                  Политикой конфиденциальности
                </NavLink>
                .
              </div>
              
              <Form
                onSubmit={onSubmit}
                render={({ handleSubmit }) => (
                  <form
                    className='basketBlock_recipient-payForm'
                    onSubmit={handleSubmit}
                  >
                    <div className='basketBlock_recipient-forms'>
                      <Field name='name' validate={requiredValidator}>
                        {({ input, meta }) => (
                          <input
                            className={`basketBlock_recipient-form ${
                              meta.error &&
                              meta.touched &&
                              'basketBlock_recipient-formError'
                            }`}
                            {...input}
                            type='text'
                            placeholder='Имя'
                          />
                        )}
                        {/* {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )} */}
                      </Field>
                      <Field name='surname' validate={requiredValidator}>
                        {({ input, meta }) => (
                          <input
                            className={`basketBlock_recipient-form ${
                              meta.error &&
                              meta.touched &&
                              'basketBlock_recipient-formError'
                            }`}
                            {...input}
                            type='text'
                            placeholder='Фамилия'
                          />
                        )}
                        {/* {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )} */}
                      </Field>
                      <Field name='phone' validate={phoneValidator}>
                        {({ input, meta }) => (
                          <input
                            className={`basketBlock_recipient-form ${
                              meta.error &&
                              meta.touched &&
                              'basketBlock_recipient-formError'
                            }`}
                            {...input}
                            type='number'
                            placeholder='Телефон'
                          />
                        )}
                        {/* {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )} */}
                      </Field>
                      <Field name='email' validate={emailValidator}>
                        {({ input, meta }) => (
                          <input
                            className={`basketBlock_recipient-form ${
                              meta.error &&
                              meta.touched &&
                              'basketBlock_recipient-formError'
                            }`}
                            {...input}
                            type='email'
                            placeholder='E-mail'
                          />
                        )}
                        {/* {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )} */}
                      </Field>
                    </div>
                    <Field name='comment'>
                      {({ input }) => (
                        <input
                          className='basketBlock_recipient-formComment'
                          {...input}
                          type='text'
                          placeholder='Комментарий'
                        />
                      )}
                      {/* {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )} */}
                    </Field>
                    <Field
                      name='notifications'
                      component='input'
                      type='checkbox'
                      className='basketBlock_recipient-formCheckbox'
                      id='notifications'
                    />
                    <label
                      className='basketBlock_recipient-formLabel'
                      htmlFor='notifications'
                    >
                      Хочу получать уведомления о скидках и акциях
                    </label>
                    <button
                      className='btnGeneral basketBlock_recipient-formBtn'
                      type='submit'
                    >
                      Применить
                    </button>
                  </form>
                )}
              />
            </div>
          </Collapsible>
        </div>

        <div className='basket_sec1_right'>
          <div className='basket_sec1_right-totalCount'>
            <div className='basket_sec1_right-totalCount_title'>
              <span>2 </span>
              <span>товара на сумму</span>
            </div>
            <div className='basket_sec1_right-totalCount_sum'>
              <span>3980 </span>
              <span>₽</span>
            </div>
          </div>

          <div className='basket_sec1_right-filled'>
            <div className='basket_sec1_right-filled_item'>
              <div className='basket_sec1_right-filled_circle'>1</div>
              <div className='basket_sec1_right-filled_title'>Доставка</div>
            </div>
            <div className='basket_sec1_right-filled_item'>
              <div className='basket_sec1_right-filled_circle'>2</div>
              <div className='basket_sec1_right-filled_title'>Оплата</div>
            </div>
            <div className='basket_sec1_right-filled_item'>
              <div className='basket_sec1_right-filled_circle'>3</div>
              <div className='basket_sec1_right-filled_title'>Получатель</div>
            </div>
          </div>
          <div className='basket_sec1_right-itog'>
            <div className='basket_sec1_right-itog_title'>Итого:</div>
            <div className='basket_sec1_right-itog_sum'>
              <span>3980 </span>
              <span>₽</span>
            </div>
          </div>
          <NavLink to='/recipient' className='sectionBlock_url'>
            <button className='btnGeneral basket_sec1_right-btn'>
              Оформить заказ
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Basket;
