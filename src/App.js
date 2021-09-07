import React from "react";

function Food(props) {
  return <h4>I love {props.name} </h4>;
}

const foodILike = [
  { name: "111111" },
  { name: "2" },
  { name: "3" },
  { name: "4" },
  { name: "5" },
];

//main page에 들어갈 내용을 짜는 부분
//실제 main page는 public 의 index.html
//App.js를 index.html에 박아넣어서 실행되고 있는 것이다.
//박아넣는것은 index.js에서 해주고 있다.
function App() {
  return (
    <div className="App">
      <h1>Hello!!!!!!!!!</h1>
      {foodILike.map(
        (
          dish //dish is an object that from foodILike eleement
        ) => (
          <Food name={dish.name} />
        )
      )}
    </div>
  );
}

export default App;

//<Food fav="kimchi" something={true} papapapp={[1, 2, 3, 4, 5, true]} />
//이렇게 적으면 props object에 묶여서 데이터 보내진다.
//react는 props 를 이용해서 데이터를 주고 받는다

//js안에 html로 코딩하면 -> jsx?
