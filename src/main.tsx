import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
);

/**
 * ------------Java Script antes do React---------
 */

// const user = {
//   name: 'Douglas Floro',
//   age: 26,
//   andress: {
//     street: 'Prof. José Pereira da Silva',
//     number: 90,
//   },
//   email: 'douglasfloro33@gmail.com',
// };

/**
 * ---------------Desestruturação----------
 */
// function mostrarAge({ age }) {
//   return age;
// }

// document.body.innerText = mostrarAge(info);

/**
 * ---------------Rest operator------------
 */

//  const { email, ...rest } = info;

// const array = [1, 2, 3, 4, 5, 6, 7];

// const [first, , third, ...rest] = array;

// document.body.innerText = JSON.stringify({ first, third, rest });

/**
 * ---------------Short Syntax----------------
 */

// const name = 'Floro';
// const age = 26;

// const user = {
//   name,
//   age,
// };

// document.body.innerText = JSON.stringify(user);

/**
 * -------------Optional Chaining------------------
 */

// document.body.innerText = user.andress?.street ?? 'Não Informado';

// const key = 'street';

// document.body.innerText = user.andress?.[key] ?? 'não';

/**
 * ---------------Metodos de Array----------------
 */

// const array = [1, 2, 3, 4, 5];

// const novoArray = array.map((item) => {
//   return item - 2;
// });

// const novoArray = array.map((item) => {
//   if (item % 2 === 0) /**se for par */ {
// return item + 10;
//   }

//   return item;
// });

// document.body.innerText = JSON.stringify(novoArray);

/**
 * -----------------filter------------------
 */

// const array = [1, 2, 3, 4, 5, 6];

// const novoArray = array
//   .filter((item) => item % 2 === /**quando for impar */ 0)
//   .map((item) => item + 10);

// document.body.innerText = JSON.stringify(novoArray);

/**
 * -----------------Every----------
 * Ele retorna true ou false de acordo com a condiçao que colocar
 */

// const array = [1, 2, 3, 4, 5, 6];

// const todosSaoNumeros = array.every((item) => {
//   return typeof item === 'number';
// });

// document.body.innerText = JSON.stringify(todosSaoNumeros);

/**
 * --------------------Some--------------
 * Ele verifica se pelo menos um item é diferente
 */

// const array = [1, 2, 3, 4, 5, 6, 'oi'];

// const peloMenosUmItemENumero = array.some((item) => {
//   return typeof item !== 'number';
// });

// document.body.innerText = JSON.stringify(peloMenosUmItemENumero);

/**
 * ----------------Find-------------
 * Ele retorna o primeiro que satisfaça a condição
 */

// const array = [1, 2, 3, 4, 5, 6];

// const par = array.find((item) => item % 2 === 0);

// document.body.innerText = JSON.stringify(par);

/**
 * ---------------Reduce--------------
 */

// const array = [1, 2, 3, 4, 5];

// const soma = array.reduce((acc, item) => {
//   return acc + item;
// }, 0);

// document.body.innerText = JSON.stringify(soma);

/**
 * -----------Template Literals------------
 */

// const name = null; /** Ou 'Douglas' */

// const message = `Welcome, ${name ?? 'Visitant'}`;

// document.body.innerText = JSON.stringify(message);

/**
 * ------------Promises-------------
 */

// fetch('https://api.github.com/users/DouglasFloro')
//   .then((response) => {
//     return response.json();
//   })

//   .then((body) => console.log(body))
//   // .then((response) => {
//   //   response.json().then((body) => {
//   //     console.log(body);
//   //   });
//   // })
//   .catch((err) => {
//     console.log(err);
//   });

// async function buscaNoGithub() {
//   try {
//     const response = await fetch('https://api.github.com/users/DouglasFloro');
//     const body = await response.json();
//     return body.id;
//   } catch (err) {
//     console.log(err);
//   }
// }
// buscaNoGithub().then((id) => {
//   console.log(id);
// });
