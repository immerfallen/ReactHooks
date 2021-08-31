import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [{}],
  products: [{}, {}],
  user: null,
  //foco... é o number
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
    case "login":
      return { ...state, user: { name: action.payload.name, idade: action.payload.idade } };
    default:
      return state;
  }
}

const UseReducer = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />
      <div className="center">
        <span className="text">{state.number}</span>
        <div className="center">
          {state.user ? (
            <div>
              <span className="text">{state.user.name} </span>
              <span className="text">{state.user.idade}</span>{" "}
            </div>
          ) : (
            <div><span className="text"> Sem usuário</span></div>
          )}
        </div>
        <div>
          <button
            className="btn"
            onClick={() => {
              dispatch({ type: "numberAdd2" });
            }}
          >
            +2
          </button>
          <button
            className="btn"
            onClick={() => {
              dispatch({ type: "login", payload: {name: 'Maro', idade: 32}});
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
