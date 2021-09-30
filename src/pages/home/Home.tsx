import Category from '@/components/category/Category';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'umi';
import SearchForm from '../../components/searchForm/SearchForm';
import Hero from './components/Hero';
import NewProduct from './components/NewProduct';
import Related from './components/Related';
import './home.less';

const Home = ({ state, dispatch, loading }) => {
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

const mapStateToProps = (state) => {
  return {
    state: state.home,
    loading: state.loading.global,
    dispatch: state.dispatch,
  };
};

export default connect(mapStateToProps)(Home);
