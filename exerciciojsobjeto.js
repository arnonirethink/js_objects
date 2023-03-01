let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

// 1 crie uma função para adicionar uma nova linguagem à chave
const addLanguage = (newLanguage) => {
  programming.languages.push(newLanguage);
};

//teste 01
//addLanguage("Java");
//console.log(programming);

//2 crie uma função que altere o valor de difficulty
const changeDifficulty = (newDifficulty) => {
  programming.difficulty = newDifficulty;
};

//teste 02
//changeDifficulty("4");
//console.log(programming);

//3 crie uma função para excluir uma chave do objeto
const deleteObjectKey = (objectDeleted) => {
  delete programming[objectDeleted];
};

//teste 03
//deleteObjectKey("jokes");
//console.log(programming);

//4 crie uma função que adicione uma chave
const addKey = (key, value) => {
  programming[key] = value;
};

//teste 04
//addKey("isFun", true);
//console.log(programming);

//5 crie uma função que mostre todos os itens da chave languages

const displayLanguages = () => {
  programming.languages.forEach((language) => console.log(language));
};

//teste 05
//displayLanguages();

//6 - crie uma função que apresente no console o nome das chaves
const displayKeys = () => {
  Object.keys(programming).forEach((key) => console.log(key));
};

//teste 6
//displayKeys();

//7 crie uma função que apresente os valores de todas as chaves
const displayValues = () => {
  Object.values(programming).forEach((value) => console.log(value));
};

//teste 7
//displayValues();
