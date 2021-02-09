const recipe = {
  name: "Spaghetti Bolognese",
  ingredients: ["egg", "salt"],
}

const added = {
  ...recipe,
  ingredients: [...recipe.ingredients, "cream"]
};

const updated = {
  ...recipe,
  ingredients: recipe.ingredients.map(ingredient =>
    ingredient === "egg" ? "egg white" : ingredient
  )
};

const removed = {
  ...recipe,
  ingredients: recipe.ingredients.filter(ingredient => ingredient !== "egg")
};
// import {
//   pipe,
// } from 'lodash/fp';

// const input = {
//   tag: "JAVASCRIPT"
// };
// const output = "(javascript)";

// const getTagValue = (obj) => obj.tag;

// const wrapInParentheses = (str) => `(${str})`;

// const toLowerCase = (str) => str.toLowerCase();


// const transform = pipe(getTagValue, wrapInParentheses, toLowerCase);

// const result = transform(input);

// console.log(result);

// // import {
// //   produce
// // } from 'immer';

// // let book = {
// //   title: "Harry Potter"
// // };

// // function publish(book) {
// //   return produce(book, draftBook => {
// //     draftBook.isPublished = true;
// //   });
// // }

// // let updated = publish(book);

// // console.log(book);
// // console.log(updated);

// // // import {
// // //   compose,
// // //   pipe
// // // } from 'lodash/fp';

// // // let input = "   JavaScript   ";

// // // let output = "<div>" + input.trim() + "</div>";

// // // // trim
// // // // wrapInDiv

// // // const trim = str => str.trim();
// // // const wrap = type => str => `<${type}>${str}</${type}>`;
// // // const toLowerCase = str => str.toLowerCase();

// // // // const result = wrapInDiv(toLowerCase(trim(input)));

// // // // setTimeout(() => console.log("Hello"), 1000);

// // // // const transform = compose(wrapInDiv, toLowerCase, trim);
// // // const transform = pipe(trim, toLowerCase, wrap("span"));

// // // console.log(transform(input));

// // // // let numbers = [1, 2, 3];

// // // // numbers.map(number => number * 2);

// // // // function greet(fn) {
// // // //   console.log(fn());
// // // // }

// // // // function sayHello() {
// // // //   return function () {
// // // //     return "Hello World!";
// // // //   };
// // // // }

// // // // // let fn = sayHello;
// // // // // fn();
// // // // // sayHello();

// // // // // function greet(fnMessage) {
// // // // //   console.log(fnMessage());
// // // // // }

// // // // // greet(sayHello);

// // // // let fn = sayHello();
// // // // let message = fn();