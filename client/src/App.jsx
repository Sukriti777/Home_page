import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ReactDOM } from "react";

import Home from "./pages/Home";
import "./App.css";
// import Home from "../pages/Home";

import { createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";
import MyCarousel from "./components/MyCarousel";

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;

    case "DECREMENT":
      0;
      return state - 1;

    default:
      return state;
  }
};

const store = createStore(countReducer);

const MapStateToProps = (state) => {
  return {
    count: state,
  };
};

const MapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
  };
};

const Component = ({ count, increment, decrement }) => {
  return (
    <>
      <h1>Count = {count}</h1>
      <button className="bg-blue-400" onClick={increment}>
        Increment
      </button>
      <br />
      <button className="bg-blue-200" onClick={decrement}>
        Decrement
      </button>
    </>
  );
};

const Container = connect(MapStateToProps, MapDispatchToProps)(Component);

export default function App() {
  return (
    <>
      <Provider store={store}>
        <div>
          <Navbar />
          <MyCarousel />
          <Home />

          <Container />
          <div className="h-[100em]"></div>
          <Footer />
        </div>
      </Provider>
    </>
  );
}
