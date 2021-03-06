import React, { useState } from "react";
import PageTitle from "../../components/layout/PageTitle";

import SectoinTitle from "../../components/layout/SectionTitle";

const UseState = (props) => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("Maro");

  return (
    <div className="UseState">
      <PageTitle
        title="Hook UseState"
        subtitle="Estado em componentes funcionais!"
      />
      <SectoinTitle title="Exercicio 01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => setCount(count - 1)}>
            -1
          </button>
          <button className="btn" onClick={() => setCount(count + 1)}>
            +1
          </button>
          <button className="btn" onClick={() => setCount(1000)}>
            1000
          </button>
          <button
            className="btn"
            onClick={() => setCount((current) => current + 1000)}
          >
            +1000
          </button>
        </div>
      </div>

      <SectoinTitle title="Exercicio 02" />
      <input type="text" className="input" value= {name} onChange={e => setName(e.target.value)}/>
      <span className="text">{name}</span>
    </div>
  );
};

export default UseState;
