const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(20, characters);

function generateKey(length, characters) {
  let key = ''
  for (let i = 0; i < length; i++) {
    key += characters.charAt(Math.random()* characters.length)
  }
  return key ;
}

console.log(key); 


