import Category from '@/components/category/Category';
import { Container } from 'react-bootstrap';
import SearchForm from '../../components/searchForm/SearchForm';
import Hero from './components/Hero';
import NewProduct from './components/NewProduct';
import Related from './components/Related';
import './home.less';

const Home = () => {
  return (
    <div className="home">
      <Container>
        <Hero />
        <SearchForm />
        <Category />
        <NewProduct />
        <Related />
      </Container>
    </div>
  );
};

export default Home;
