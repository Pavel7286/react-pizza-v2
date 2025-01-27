
import './scss/app.scss'
import Header from './components/header';
import Categories from './components/categories';
import Sort from './components/sort';
import PizzaBlock from './components/pizza-block';
import pizzas from './assets/pizzas.json'

function App() {

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">

            {pizzas.map((obj) => (<PizzaBlock key={obj.id} title={obj.title} price={obj.price} image={obj.imageUrl} size={obj.sizes} types={obj.types} />))}


          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
