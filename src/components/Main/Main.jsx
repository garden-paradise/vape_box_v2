import { Route, Switch, Redirect } from 'react-router-dom';
import About from './About/About';
import Account from './Account/Account';
import ArticleBlog from './ArticleBlog/ArticleBlog';
import Basket from './Basket/Basket';
import Blog from './Blog/Blog';
import Catalog from './Catalog/Catalog';
import Contacts from './Contacts/Contacts';
import FAQ from './FAQ/FAQ';
import Home from './Home/Home';
import Product from './Product/Product';
import Recipient from './Recipient/Recipient';
import Shops from './Shops/Shops';
import Сomparison from './Сomparison/Сomparison';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/personal_policy' component={PersonalPolicy} /> */}
        <Route exact path='/product' component={Product} />
        <Route exact path='/basket' component={Basket} />
        <Route exact path='/recipient' component={Recipient} />
        <Route exact path='/catalog' component={Catalog} />
        <Route exact path='/account' component={Account} />
        <Route exact path='/comparison' component={Сomparison} />
        <Route exact path='/shops' component={Shops} />
        <Route exact path='/contacts' component={Contacts} />
        <Route exact path='/about' component={About} />
        <Route exact path='/F.A.Q.' component={FAQ} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/blog/:articleId' component={ArticleBlog} />
        <Redirect exact from='*' to='/' />
      </Switch>
    </main>
  );
};

export default Main;
