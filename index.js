function getLinksFromMd(str){
	let regexUrl = new RegExp(/(https?:\/\/)?(www\.)?(\w{0,1000}\.)?[a-z0-9]+\.\w{2,3}(\.br)?(\/\w{0,1000}\/\w{0,1000})?/g);
	let urls = str.match(regexUrl);

	let regexTextUrl = new RegExp(/\[\w{0,1000}\]/g);
	let text = str.match(regexTextUrl);

	console.log(urls);
	console.log(text);
}

getLinksFromMd("# Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
"sed do eiusmod tempor  incididunt ut [labore](https://en.wiktionary.org/wiki/labore) et " +
"[dolore](https://en.wiktionary.org/wiki/dolore) magna aliqua. Ut enim ad minim veniam, " +
	"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." +

"[foo](http://foo.com)" +

"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat " +
"nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia " +
"deserunt mollit anim id est laborum.");

module.export = getLinksFromMd;