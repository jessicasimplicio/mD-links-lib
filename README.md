# Extrator de links(urls) de um texto

**Essa biblioteca serve para extrair links de um texto escrito com markdown. Pode ser usado em diversas aplicações.**

A versão atual extrai links de um texto no formato markdown fornecido como entrada. A biblioteca 
retorna um array de objetos contendo o link e o texto do link.

## Os métodos utilizados na biblioteca são:

#### **getLinksFromMd(str);**

Exemplo de uso:

```
$node
> let  = url("mD-links-lib")
> url("Oi você quer entrar no site [google](www.google.com)?"); //[{href: "www.google.com", text: "google"}]
```


## versão 1.0.0

- funcionalidades: extração de links de um texto em markdown;
- A função de extração retorna os links e os seus respectivos textos em um 
array de objetos.


## instalação

- você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm install mD-links-lib`


## roadmap oficial do projeto

#### versão 1.1.0 (previsão outubro/2018)
- correção de bugs eventuais bugs;
- melhoria no código;

#### versão 1.0.2 (released)
- correção do readme;

#### versão 1.0.1 (released)
- adição do readme;

#### versão 1.0.0 (released)
- funcionalidades: extrai links de um texto em markdown;
