import { useState } from 'react';
import { Field, Form } from 'react-final-form';
import Title from '../../../reuse_Components/Title/Title';
import './Account.scss';
import FavoritesProduct from './reuse/FavoritesProduct/FavoritesProduct';
import MyOrderProduct from './reuse/MyOrderProduct/MyOrderProduct';

const onSubmit = (values) => {
  console.log(values);
};

const Account = () => {
  const [numberMenu, setNumberMenu] = useState(1);

  return (
    <section className='account'>
      <Title title='Личный кабинет' />
      <div className='account_sec'>
        <div className='account_left'>
          <div className='account_left-blockName'>
            <div className='account_left-name'>Сергей</div>
            <div>+7 904 983 23 23</div>
          </div>
          <div className='account_left-blockMenu'>
            <div
              onClick={() => setNumberMenu(1)}
              className={`account_left-menu ${
                numberMenu === 1 && 'account_left-menuActive'
              }`}
            >
              Личные данные
            </div>
            <div
              onClick={() => setNumberMenu(2)}
              className={`account_left-menu ${
                numberMenu === 2 && 'account_left-menuActive'
              }`}
            >
              Мои заказы
            </div>
            <div
              onClick={() => setNumberMenu(3)}
              className={`account_left-menu ${
                numberMenu === 3 && 'account_left-menuActive'
              }`}
            >
              Избранное
            </div>
          </div>
        </div>

        {numberMenu === 1 && (
          <div className='account_forms'>
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                <form
                  className='account_right-formInfo'
                  onSubmit={handleSubmit}
                >
                  <div className='account_right-formInfoTitle'>
                    Личные данные
                  </div>
                  <div className='account_right-forms'>
                    <Field name='name'>
                      {({ input, meta }) => (
                        <input
                          className={`account_right-form ${
                            meta.error &&
                            meta.touched &&
                            'account_right-formError'
                          }`}
                          {...input}
                          type='text'
                          placeholder='Имя'
                        />
                      )}
                    </Field>
                    <Field name='surname'>
                      {({ input, meta }) => (
                        <input
                          className={`account_right-form ${
                            meta.error &&
                            meta.touched &&
                            'account_right-formError'
                          }`}
                          {...input}
                          type='text'
                          placeholder='Фамилия'
                        />
                      )}
                    </Field>
                    <Field name='phone'>
                      {({ input, meta }) => (
                        <input
                          className={`account_right-form ${
                            meta.error &&
                            meta.touched &&
                            'account_right-formError'
                          }`}
                          {...input}
                          type='number'
                          placeholder='Телефон'
                        />
                      )}
                    </Field>
                    <Field name='email'>
                      {({ input, meta }) => (
                        <input
                          className={`account_right-form ${
                            meta.error &&
                            meta.touched &&
                            'account_right-formError'
                          }`}
                          {...input}
                          type='email'
                          placeholder='E-mail'
                        />
                      )}
                    </Field>
                    <Field
                      name='notifications'
                      component='input'
                      type='checkbox'
                      className='account_right-formCheckbox'
                      id='notifications'
                    />
                    <label
                      className='account_right-formLabel'
                      htmlFor='notifications'
                    >
                      Согласие на e-mail рассылку
                    </label>
                  </div>
                  <div className='account_right-formInfoTitle'>
                    Адрес доставки
                  </div>
                  <div className='account_right-formsAdress'>
                    <Field name='city'>
                      {({ input, meta }) => (
                        <input
                          className='account_right-form account_right-formLong'
                          {...input}
                          type='text'
                          placeholder='Город'
                        />
                      )}
                    </Field>
                    <Field name='index'>
                      {({ input, meta }) => (
                        <input
                          className='account_right-form account_right-formShort'
                          {...input}
                          type='text'
                          placeholder='Индекс'
                        />
                      )}
                    </Field>
                    <Field name='street'>
                      {({ input, meta }) => (
                        <input
                          className='account_right-form account_right-formLong'
                          {...input}
                          type='text'
                          placeholder='Улица'
                        />
                      )}
                    </Field>
                    <Field name='house'>
                      {({ input, meta }) => (
                        <input
                          className='account_right-form account_right-formShort'
                          {...input}
                          type='text'
                          placeholder='Дом'
                        />
                      )}
                    </Field>
                    <Field name='apartment'>
                      {({ input, meta }) => (
                        <input
                          className='account_right-form account_right-formApartament'
                          {...input}
                          type='text'
                          placeholder='Квартира / офис'
                        />
                      )}
                    </Field>
                  </div>{' '}
                  <button
                    className='btnGeneral account_right-formBtn'
                    type='submit'
                  >
                    Сохранить изменения
                  </button>
                </form>
              )}
            />
            <Form
              onSubmit={onSubmit}
              render={({ handleSubmit }) => (
                <form
                  className='account_right-formPassword'
                  onSubmit={handleSubmit}
                >
                  <div className='account_right-formInfoTitle account_right-formPassTitle'>
                    Пароль
                  </div>
                  <Field name='currentPassword'>
                    {({ input }) => (
                      <input
                        className='account_right-form account_right-formPass'
                        {...input}
                        type='text'
                        placeholder='Текущий пароль'
                      />
                    )}
                  </Field>
                  <Field name='newPassword'>
                    {({ input }) => (
                      <input
                        className='account_right-form account_right-formPass'
                        {...input}
                        type='text'
                        placeholder='Новый пароль'
                      />
                    )}
                  </Field>
                  <Field name='confirmedPassword'>
                    {({ input }) => (
                      <input
                        className='account_right-form account_right-formPass'
                        {...input}
                        type='text'
                        placeholder='Подтвердить пароль'
                      />
                    )}
                  </Field>
                  <button
                    className='btnGeneral account_right-formBtn'
                    type='submit'
                  >
                    Сохранить
                  </button>
                </form>
              )}
            />
          </div>
        )}

        {numberMenu === 2 && (
          <div className='account_myOrder'>
            <div className='account_myOrder-title'>Мои заказы</div>
            <div className='account_myOrder-subTitle'>
              <div>Фото</div>
              <div>Название</div>
              <div>Кол-во</div>
              <div>Сумма</div>
              <div>Статус</div>
            </div>
            <MyOrderProduct
              data={[
                {
                  name: 'Smoant Battlestar Baby Pod Kit',
                  count: 1,
                  stasus: 'Получено',
                  sum: 1990,
                  date: '01.12.2022',
                  address: 'м. Ботанический сад Лазоревый проезд 1А, к2',
                  recipient:
                    'Малинина Анна +7 925 567 54 12 hdhjdhbf@gmail.com',
                },
                {
                  name: 'Smoant Battlestar Baby Pod Kit',
                  count: 1,
                  stasus: 'Получено',
                  sum: 1990,
                  date: '01.12.2022',
                  address: 'м. Ботанический сад Лазоревый проезд 1А, к2',
                  recipient:
                    'Малинина Анна +7 925 567 54 12 hdhjdhbf@gmail.com',
                },
                {
                  name: 'Smoant Battlestar Baby Pod Kit',
                  count: 1,
                  stasus: 'Получено',
                  sum: 1990,
                  date: '01.12.2022',
                  address: 'м. Ботанический сад Лазоревый проезд 1А, к2',
                  recipient:
                    'Малинина Анна +7 925 567 54 12 hdhjdhbf@gmail.com',
                },
              ]}
            />
          </div>
        )}

        {numberMenu === 3 && (
          <div className='account_favorites'>
            <div className='account_myOrder-title'>Избранное</div>
            <div className='account_favorites-subTitle'>
              <div>Фото</div>
              <div>Название</div>
              <div>Стоимость</div>
            </div>
            <FavoritesProduct
              data={[
                {
                  name: 'Smoant Battlestar Baby Pod Kit',
                  sum: 1990,
                },
                {
                  name: 'Smoant Battlestar Baby Pod Kit',
                  sum: 1990,
                },
                {
                  name: 'Smoant Battlestar Baby Pod Kit',
                  sum: 1990,
                },
              ]}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Account;
