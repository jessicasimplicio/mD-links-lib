function getLinksFromMd(str){


  if(typeof str === undefined){
    throw new TypeError ("Não pode ser vazio. Insira um texto.");
  }

  if(typeof str === "number"){
    throw new TypeError ("Não pode ser número. Insira um texto.");
  }

  if(typeof str === "string" && str === "") {
    return [];
  }

  if(typeof str === "string" && str !== ""){
    let regexUrl = 
      new RegExp(/(https?:\/\/)?(www\.)?(\w{0,1000}\.)?[a-z0-9]+\.\w{2,3}(\.br)?(\/\w{0,1000}\/\w{0,1000})?/g);
    let urls = str.match(regexUrl);

    let regexTextUrl = new RegExp(/\[\w{0,1000}\]/g);
    let textUrl = str.match(regexTextUrl);

    let urlAndText = [];
  
    //USAR MAP
    urls.forEach(function(item, index) {
      urlAndText.push({
        href: item,
        text: textUrl[index],
      });
    });

    console.log(urlAndText);
    return urlAndText; 
  }
}

/*getLinksFromMd("# Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
"sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et " +
"[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, " +
	"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." +

"[foo](http://foo.com)" +

"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat " +
"nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia " +
"deserunt mollit anim id est laborum.");
*/

//getLinksFromMd( "Oi você quer entrar no site [google](www.google.com) ?");

getLinksFromMd();
module.export = getLinksFromMd;

