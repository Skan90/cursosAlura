/*Além do nome e do valor, cada propriedade tem também
três atributos:

Writable: Define se a propriedade pode ser adicionada 
a (ou escrita em) um objeto;

Enumerable: Define se a propriedade é retornada, por exemplo, 
em um loop for...in ou utilizando Object.keys() / Object.values() / Object.entries().
Ou seja, se a propriedade é enumerável;

Configurable: Especifica se a propriedade pode ser modificada 
ou deletada. Ou seja, se é configurável.

Por definição, todas as propriedades de um objeto criadas 
durante o desenvolvimento têm estes três atributos como true. 
Já a maior parte das propriedades herdadas do protótipo têm 
estes atributos como false e não podem ser enumeradas, 
adicionadas ou alteradas.*/

const catalogo = {
    "editora": "Casa do Código",
    "catalogo": [
        {
            "id": 50,
            "titulo": "Primeiros Passos com NodeJS",
            "autor": "João Rubens",
            "categoria": "programação",
            "versoes": ["ebook", "impresso"]
        }
    ]}
    
    console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"));
    
    //SAÍDA TERMINAL:
    // {
    //     value: 'Casa do Código',
    //     writable: true,
    //     enumerable: true,
    //     configurable: true
    // }