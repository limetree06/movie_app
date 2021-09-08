import React from "react";
import PropTypes from "prop-types";

function printFood({ name, image, rating }) {
  return (
    <div>
      <h4>I love {name}</h4>
      <h4>{rating}/5</h4>
      <img src={image} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  //isRequired means that foodILike안에 rating 안들어 가도 됨
  //type checking with proptypes로 검색해보면 됩니당
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.6,
  },
];

//main page에 들어갈 내용을 짜는 부분
//실제 main page는 public 의 index.html
//App.js를 index.html에 박아넣어서 실행되고 있는 것이다.
//박아넣는것은 index.js에서 해주고 있다.
function Food() {
  return (
    <div className="Food">
      <h1>Hello!!!!!!!!!</h1>
      {foodILike.map((dish) => (
        <printFood
          key={dish.id}
          name={dish.name}
          image={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default Food;

//<Food fav="kimchi" something={true} papapapp={[1, 2, 3, 4, 5, true]} />
//이렇게 적으면 props object에 묶여서 데이터 보내진다.
//react는 props 를 이용해서 데이터를 주고 받는다

//js + html로 코딩하면 => jsx
