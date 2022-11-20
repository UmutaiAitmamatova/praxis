import React from "react";
import { Route, Routes } from "react-router-dom";
// import SvgLogo from './assets/img/pizza-logo.svg';
import { Header } from "./components";
import { Home, Cart } from "./pages";

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:3000/db.json").then((resp) => resp.json()).then(json => {
      setPizzas(json.pizzas)
    });
  }, []);
  console.log(pizzas);

  // React.useEffect(() => {
  //   fetch('http://localhost:3000/db.json').then((resp) => resp.json()).then(json => {
  //     setPizzas(json.pizzas);
  //   })
  //   axios.get('http://localhost:3000/db.json').then(({ data }) => {
  //     setPizzas(data.pizzas);
  //   });
  // }, []);


  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="content">
          <Routes>
            <Route>
              {/* <Route path="/" reder={() => <Home items={pizzas}/>} exact /> */}
              <Route path='/' element={<Home items={pizzas}/>} exact/>
              <Route path="/cart" element={<Cart />} exact />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
