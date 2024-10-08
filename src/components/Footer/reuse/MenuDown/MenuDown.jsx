import { Field, Form } from 'react-final-form';
import { NavLink } from 'react-router-dom';
import {
  emailValidator,
} from '../../../../utils/validators';
import './MenuDown.scss';

const onSubmit = (values) => {
  console.log(values);
};

const MenuDown = ({ data }) => {
  return data.map((item) => (
    <section className='menuDown'>
      <div className='menuDown_title'>{item.title}</div>
      {item.subtitle &&
        item.subtitle.map((item) => (
          <NavLink to={item.subtitleLink} className='menuDown_subtitle'>
            {item.subtitle}
          </NavLink>
        ))}
      <section className='menuDown_blockImg'>
        {item.images &&
          item.images.map((item) => (
            <NavLink to={item.imgLink} className='menuDown_img'>
              <img src={item.img} alt='imageLink' />
            </NavLink>
          ))}
      </section>
      {item.tel && (
        <a className='menuDown_tel' href={`tel: ${item.tel}`}>
          {item.tel}
        </a>
      )}
      {item.form && (
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, submitting }) => (
            <form className='menuDown_form' onSubmit={handleSubmit}>
              <Field name='email' validate={emailValidator}>
                {({ input, meta }) => (
                  <div>
                    <input
                      className={`menuDown_inputEmail ${
                        meta.error &&
                        meta.touched &&
                        'menuDown_inputEmail_error'
                      }`}
                      {...input}
                      type='email'
                      placeholder='E-mail'
                    />
                    <button
                      className='menuDown_btn'
                      type='submit'
                      disabled={submitting}
                    >
                      Подписаться
                    </button>
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </form>
          )}
        />
      )}
    </section>
  ));
};

export default MenuDown;
