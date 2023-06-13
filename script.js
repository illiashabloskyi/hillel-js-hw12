// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length.

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

// TODO: реалізація за допомогою function

// function generateKey(length, characters) {
  // let genKey = "";
  // while (genKey.length < length) {
  //   genKey += characters[Math.floor(Math.random() * characters.length)];
  // }
  // return genKey;
// }

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

// TODO: реалізація за допомогою () => {}

const key = (length, characters) => {
  let genKey = "";
  while (genKey.length < length) {
    genKey += characters[Math.floor(Math.random() * characters.length)];
  }
  return genKey;
}

console.log(key(16, characters))