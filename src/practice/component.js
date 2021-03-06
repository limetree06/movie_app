import React from "react";

//class App 은 react Component 이다. react component에는 많은 기능들이 있기때문에 이 작업이 필수적이다.
//많은 기능 중 하나가 STATE!!!!!!!!!!!
//React componetn안에 App class가 있는것
class component extends React.Component {
  constructor(props){
    super(props);
    console.log("hello");
  }
  //state 은 object이고 component의 data를 넣을 공간임 그리고 이 데이터는 '변한다'
  state = {
    count: 0,
  };

  add = () => {
    //this.state.count++; -> 이렇게 하면 페이지에 변화된거 반영안됨 => setstate 이용해야함
    //this.state.count 이건 performance 이슈가 있음
    //this.setState({ count: this.state.count + 1 }); //update state and call render again
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    //this.state.count--;
    this.setState((current) => ({ count: current.count - 1 }));
  };

  //return 없다 function이 아니기때문
  //대신 render 이 있다 그리고 리액트는 automatically 모든 class componentd의 render method를 실행하고자 한다.
  render() {
    console.log("render");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }


}
export default component;

//react life cycle
//컴포넌트 die => replace the page
//3가지 컴포넌트가 하는 일 => Mounting, Updating, Unmounting

//Mounting 에서 쓰이는 주요한 함수 => 제일 처음 페이지 생길떄
//1. constructor() it's not from react when class creates on javascript 제일 먼저 실행되는 거
//2. render()
//3. compoonetDidMount()

//Updating 에서 쓰이는 주요한 함수
//1. shouldComponentUpdate() => 잘 안쓰임
//2. render()
//3. componentDidUpdate()

//Unmounting => 페이지 die 할때
//componentWillUnmounting()