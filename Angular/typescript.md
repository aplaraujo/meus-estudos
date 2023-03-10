# Noções Básicas de TypeScript

## O que é o TypeScript?

É um conjunto adicional de recursos para o JavaScript. O recurso mais importante é a determinação de tipos estáticos.

### O que é a determinação de tipos estáticos?
É quando o desenvolvedor define qual será o tipo de valor que uma variável vai receber. 
Exemplo:

```typescript
let nome: string = "Ana"

console.log(nome) // [LOG]: "Ana" 
```

### O que está acontecendo?

- Foi criada uma variável chamada `nome`, que receberá um valor do tipo caractere (***string***)
- A variável `nome` receberá a cadeia de caracteres "Ana"
- O valor "Ana" será impresso na tela
O que acontece ao colocar um valor de outro tipo em uma variável com tipo já determinado?
Acontece isso aqui:

```typescript
let nome: string = "Ana"

nome = true 

// Type 'boolean' is not assignable to type 'string'.
```

O tipo do valor da variável nome foi modificado e deu erro. Por que? Porque havia sido determinado anteriormente que o tipo do valor seria uma *string* e não um valor booleano. De acordo com a documentação, o maior benefício do TypeScript é que pode sinalizar um comportamento inadequado no seu código, diminuindo o risco de *bugs*.

### Como instalar o TypeScript?

Em primeiro lugar, é necessário abrir o terminal. Depois é so digitar o seguinte comando porque a intenção é fazer uma instalação global do TS:

```
npm install -g typescript
```

Para quem usa Mac (e Linux talvez?), talvez dê erro na hora de instalá-lo. Nesse caso, é melhor colocar a palavra `sudo` antes:

```
sudo npm install -g typescript
```

Também é possível instalar o TS com o yarn:

```
yarn add -g typescript
```

### **E como executar um código em TS?!**

É só digitar node `index.ts` para executar o artigo, certo? NÃÃÃÃOOOO!!! Se fizer isso, vai dar erro. É preciso digitar esse comando aqui antes:

```
tsc index.ts
```

A partir daí, um arquivo JS vai ser criado porque vai receber o nosso código TS convertido em JS. Agora sim pode executar:

```
node index.js
```

Outra alternativa é usar esse comando aqui:

```
npx tsc --watch
```

O arquivo `.ts` será "vigiado" e tudo que for salvo vai para o arquivo `.js`

### Lista de tipos

- string
- number
- boolean
- undefined
- object
- function

Alguns tipos para o DOM:

- HTMLElement
- HTMLInputElement
- HTMLDivElement
- HTMLButtonElement
- HTMLFormElement

### O que é determinação de tipos por inferência?

É a determinação implícita do tipo do valor da variável.

```typescript
let x = 12

console.log(x) // [LOG]: 12 

x = "Oi"

// Type 'string' is not assignable to type 'number'.
```

### O que está acontecendo?

Foi criada uma variável chamada `x`, que recebe um valor do tipo numérico. Nesse caso, ao colocar um número, aconteceu a determinação implícita do tipo do valor da variável `x`.
O valor 12 será impresso na tela.
O que acontece ao colocar um valor de outro tipo em uma variável com tipo implícito determinado?
De novo, o tipo do valor da variável `x` foi modificado e deu erro. Por quê?
Porque, ao colocar um valor na variável, a determinação de tipos aconteceu, mesmo que tenha sido implícita. Por isso a mensagem de erro.

### O que é tupla?

Tupla é um vetor (*array*) com tipos de valores previamente determinados.

```typescript
const nyTuple: [number, string, number[]] = [10, "Oi", [1, 2, 3, 4, 5]]
```

### O que está acontecendo?

Foi criado um vetor chamado `myTuple`, que recebe três tipos de valores determinados previamente:
- Um valor do tipo numérico
- Um valor do tipo *string*
- Um vetor com valores do tipo numérico

### Como determinar tipos em objetos no Typescript?

Os tipos de valores nos objetos são determinados da seguinte forma:

```typescript
const person: { name: string; age: number} = {
    name: "Maria",
    age: 25
}
```

### O que está acontecendo?

Foi criado um objeto chamado `person`. Foi determinado que as propriedades desse objeto (`name` e `age`) vão receber valores do tipo *string* e numérico, respectivamente.

### O que é união de tipos (*union type*)?

É uma estrutura que determina que um mesmo valor pode ter mais de um tipo.

```typescript
let qualquerTipo: string | number | boolean = 4

qualquerTipo = "Olá!"
qualquerTipo = false
qualquerTipo = {}

// Type '{}' is not assignable to type 'string | number | boolean'.
```

### O que está acontecendo?

Foi criada uma variável chamada `qualquerTipo` que pode receber valores do tipo numérico, cadeia de caracteres ou booleano (lógico). Qualquer valor que não seja um desses, apresentará uma mensagem de erro.

### O que é interface?

É uma estrutura que descreve os tipos que o objeto vai receber

```typescript
interface Values {
    num1: number;
    num2: number;
}

const someValues: Values = {
    num1: 5,
    num2: 10
}
```

O que está acontecendo?

- Foi criada uma interface chamada `Value`, que receberá dois valores do tipo numérico
- Foi criado um objeto chamado `someValues`, que fará referência à interface `Value` e receberá dois números (tipos já determinados na interface `Value`)

### O que é *Type Alias* (Pseudônimo de Tipos)?

São tipos com nomes personalizados.

```typescript
type name = string;
type age = number;

type Person = {
    name: name;
    age: age
}

const person: Person = {
    name: "Maria",
    age: 25
}
```

### O que está acontecendo?

Foram criados dois tipos personalizados (`name` e `age`) que vão receber valores do tipo *string* e numérico.
Foi criado um objeto de tipo personalizado (`Person`), cujas propriedades referem-se aos tipos criados anteriormente.
Foi criado um objeto (`person`) que refere-se ao tipo `Person` criado anteriormente.

```typescript
type multiTipo = number | string

const num: multiTipo = 10
const str: multiTipo = "Ei"
```

### O que está acontecendo?

Foi criada uma união de tipos (`multiTipo`) que pode receber valores do tipo numérico e *string*.
Foram criadas duas constantes que referem-se ao tipo personalizado `multiTipo`.

### O que são *enums*?

*Enums* são conjuntos de variáveis com valores definidos, que podem ser usados em várias partes do código.

```typescript
enum numeros {
    um = 1,
    dois = 2,
    tres = 3,
    quatro = 4,
    cinco = 5
}

const soma = numeros.cinco + numeros.quatro

console.log(soma)
```

### O que está acontecendo?

Foi criado um *enum* chamado `numeros` com números que vão de um a cinco.
Foi criada uma constante para somar dois dos valores do conjunto `numeros`.

### O que é *Any*?

***Any*** significa literalmente qualquer coisa. É quando a variável pode receber um valor de qualquer tipo. ***Any*** anula a determinação de tipos.

```typescript
let qualquerCoisa: any;

qualquerCoisa = 5
console.log(qualquerCoisa) // [LOG]: 5 

qualquerCoisa = "Ana"
console.log(qualquerCoisa) // [LOG]: "Ana" 

qualquerCoisa = false
console.log(qualquerCoisa) // [LOG]: false 
```

### O que é *Unknown*?

***Unknown*** (desconhecido) é semelhante ao *any*, porém é melhor usar esse tipo em vez do anterior. Quer saber o motivo?! A mesma variável do exemplo anterior vai aparecer aqui:

```typescript
let qualquerCoisa: unknown;
```

Como se trata de um tipo desconhecido, um número será designado para essa variável:

Outra variável para usar o valor de qualquerCoisa será criada, mas a seguinte mensagem de erro vai aparecer:

```typescript
let qualquerCoisa: unknown;

qualquerCoisa = 10
console.log(qualquerCoisa) // [LOG]: 10 


let numero: number = qualquerCoisa; 

// Type 'unknown' is not assignable to type 'number'.
```

Essa mensagem é um erro de compilação. O *unknown* faz uma verificação no código antes de realizar qualquer operação, ao contrário de *any*, que não faz essa verificação e pode causar problemas no código.

### O que é *Void* ?

*Void* é o oposto do *any*: é a ausência de qualquer tipo. *Void* é usado quando uma função não retorna valor algum.

```typescript
function qualquerFuncao(): void {}
```