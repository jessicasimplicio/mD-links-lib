module.exports.getLinksFromMd = function getLinksFromMd(str){

  inputValidation(str);  

  if(typeof str === "string" && str === "") {
    return [];
  }

  if(typeof str === "string" && str !== ""){
    return matchRegex(str);
  }
    
}

function inputValidation(str){
  if(typeof str === "undefined"){
    throw new TypeError ("Não pode ser vazio. Insira um texto.");
  }

  if(typeof str === "number"){
    throw new TypeError ("Não pode ser número. Insira um texto.");
  }
}

function matchRegex(str) {
  let regexUrl = 
      new RegExp(/(https?:\/\/)?(www\.)?(\w{0,1000}\.)?[a-z0-9]+\.\w{2,3}(\.br)?(\/\w{0,1000}\/\w{0,1000})?/g);
  let urls = str.match(regexUrl);

  let regexTextUrl = new RegExp( /(?<=\[)\w{0,50}(?=\])/g ) 
  let textUrl = str.match(regexTextUrl);

  let urlAndText = [];
  
  urls.forEach((item, index) => {
    urlAndText.push({
      href: item,
      text: textUrl[index],
    });
  });
  return urlAndText;   
}
