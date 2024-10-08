import React, { useState } from 'react';
import style from './FAQ.scss';
import SearchInput from './../../../reuse_Components/SearchInput/SearchInput';
import Accordion from './Accordion/Accordion';
import NavLinks from '../../../reuse_Components/NavLinks/NavLinks';
import Title from '../../../reuse_Components/Title/Title';

const FAQ = () => {
  const [active, setActive] = useState(true);

  return (
    <section className='PageBottom FAQ'>
      <NavLinks
        data={[
          { url: 'home', name: 'Главная', active: false },
          { url: 'about', name: 'F.A.Q.', active: true },
        ]}
      />

      <Title title='F.A.Q.' />

      <SearchInput />

      <Accordion
        active={active}
        setActive={setActive}
        title={'Безопасны ли электронные сигареты H5 для здоровья?'}
        subtitle={
          'Нет, так как в электронных сигаретах H5 содержится никотин, вызывающий зависимость. При этом электронные сигареты H5 безопаснее обычных на 95%, так как они не загрязняют лёгкие, не выделяют угарный газ и продукты горения. Поэтому H5 – это лучшая альтернатива обычным сигаретам.'
        }
      />
      <Accordion
        active={active}
        setActive={setActive}
        title={'Вреден ли никотин?'}
        subtitle={
          'Да. Доказано, что никотин оказывает негативное влияние на здоровье и вызывает привыкание.'
        }
      />
      <Accordion
        active={active}
        setActive={setActive}
        title={'Кому подходят электронные сигареты H5?'}
        subtitle={
          'Продукция H5 предназначена только для совершеннолетних пользователей. H5 подойдет как тем, кто находится в поиске лучшей замены курению обычных сигарет, так и текущим пользователям электронных сигарет, которые ценят высокое качество и широкий ассортимент.'
        }
      />
      <Accordion
        active={active}
        setActive={setActive}
        title={'Где можно приобрести продукцию H5?'}
        subtitle={`На нашем сайте и в интернет-магазине `}
        href={true}
      />
      <Accordion
        active={active}
        setActive={setActive}
        title={'Как стать партнером компании H5?'}
        subtitle={
          'Всю необходимую информацию можно найти в разделе «Партнерам». '
        }
      />
      <Accordion
        active={active}
        setActive={setActive}
        title={'Что делать, если мне попалась бракованная сигарета?'}
        subtitle={
          'Это маловероятно, потому что мы ценим свою репутацию и следим за качеством нашей продукции. Но если вы всё-таки столкнулись с такой неприятной ситуацией, как неисправность электронной сигареты, пришлите видеоматериалы с доказательством наличия дефекта нам на почту sale@hi5russia.com, и мы бесплатно отправим вам новый товар.'
        }
      />
    </section>
  );
};

export default FAQ;
