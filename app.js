let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

let dominio = pronoun.map(p => 
  adj.map(a => 
    noun.map(n => `${p}${a}${n}.com`)
  )
).flat(2);

console.log(dominio);
