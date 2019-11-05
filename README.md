# FRONT-END AVANÇADO
## Atividade 1  - HTML5 APIs

Instruções:

Escolha uma das tecnologias que abordamos nessa primeira aula para construir uma POC (Proof of Concept);
- O trabalho pode ser feito em dupla;
- Para a escolha da tecnologia, tente pensar em algum problema que te motive resolver (talvez algum problema real do seu trabalho, vida pessoal ou algo que você acredita ter um potencial de mercado);
- Mas tenha em mente: escolha algo bem específico e simples;
- Como ponto de partida, você deve usar o "projeto-frontend" Exercício Prático 0 feito em sala de aula;
- O código-fonte deve ser entregue obrigatoriamente via URL do GitHub de um dos integrantes da dupla (entregar link da tag da versão criada. Ex: v0.1.0);
- Para quem optou por fazer em dupla, os commits devem estar marcando o GitHub do colega @usuario_github_do_colega (que deve ter permissão para commitar no repositório em questão);
- De preferência, mas não obrigatório, deve ter commit dos dois integrantes da dupla;
- A cada dia de atraso, desconta-se 1 ponto da nota final, ou seja, após cinco dias de atraso o trabalho é zerado.

Restrições:

- Não usar nenhum framework, somente as APIs do HTML5;
- Não estilizar nada, a não ser que seja algo muito necessário (detalhes da estilização será tarefa do exercício prático 2);

Dicas:

- Pode ser utilizado o html5 boilerplate (Links para um site externo.) para iniciar a construção da sua estrutura de marcação. Ou melhor, use o exercício prático 0 feito em sala de aula como base.

Foi feito uma pagina para aprender a programar em javascript. 
A API do HTML5 escolhida foi de Performance and Integration, com o uso de WEB Workers

*OBS1: o navegador chrome não aceita rodar um web worker de um arquivo(file:///), a forma mais fácil 
de testar neste navegador foi executando um servidor local:
- instalar: npm install -g local-web-server
- executar servidor (na pasta do projeto): ws 
- entrar http://localhost:8000/index.html

*OBS2: O código com a resposta ja é carregado no inicio para acelerar os testes da aplicação

## Atividade 2 - Pré-processadores e metodologias CSS

Instruções:

- Dada a prova de conceito feita no Exercício Prático 01 (HTML5 APIs), você deve agora criar uma estilização básica para seu produto. Essa estilização tem que utilizar uma metodologia CSS a sua escolha (OOCSS, SMACSS, BEM, Suit CSS, etc) e deve utilizar o pré-processador SASS para organizar e separar melhor os arquivos CSS;
- O trabalho pode ser feito em dupla;
- Continue tendo em mente em fazer implementações simples: usar dois ou três recursos de SASS e estilizar alguns poucos componentes com metodologias CSS já é o suficiente;
- O código-fonte deve ser entregue obrigatoriamente via URL do GitHub de um dos integrantes da dupla (entregar link da tag da versão criada. Ex: v0.2.0);
- Para quem optou por fazer em dupla, os commits devem estar marcando o GitHub do colega @usuario_github_do_colega (que deve ter permissão para commitar no repositório em questão);
- De preferência, mas não obrigatório, deve ter commit dos dois integrantes da dupla;
- A cada dia de atraso, desconta-se 1 ponto da nota final, ou seja, após cinco dias de atraso o trabalho é zerado.

Dicas:

- Não se preocupe, pois o design gráfico não será avaliado! :) Isso não é uma aula de UX ou de desenho.

Foi feito o estilo da página com SASS, usando SCSS como sintaxe e BEM como metodologia.
Os recursos usados do SASS foram:

- variáveis para definir as cores primárias e secundárias do estilo.
- mixins para definir classes reusaveis de elementos como o textArea e button.
- media para responsividade (feita com mobile-first).
- diversos aninhamentos, como de propriedades(font, border) e com seletor de classe pai(&), que ajudou muito na implementação da metodologia BEM.*

*OBS: o seletor pai não existia em versões mais antigas do sass, e no mac ja vinha com a versão antiga, foi preciso instalar uma versão recente e configurar o PATH para os arquivos fossem executados sem erros.

## Atividade 3 - Novos recursos do JavaScript

- Dada a prova de conceito feita no Exercício Prático 01 (HTML5 APIs) e evoluída no Exercício Prático 02 (Metodologias e pré-processadores CSS), você deve agora refatorar seu código para utilizar recursos mais recentes do JavaScript. Para isso, é necessário evidenciar a implementação de ao menos 4 novos recursos da linguagem ECMAscript 6 (ou superior) explicados em sala de aula;
- O trabalho pode seguir sendo feito em dupla;
- Continue tendo em mente em fazer implementações simples;
- O código-fonte deve ser entregue obrigatoriamente via URL do GitHub de um dos integrantes da dupla (entregar link da tag da versão criada. Ex: v0.3.0);
- Assim como os exercícios práticos 01 e 02, o  Exercício Prático 03 deve também estar marcado com uma tag (e nesse lab, a correta marcação das 3 tags (v0.1.0, v0.2.0 e v0.3.0, ou similar) serão avaliadas em pontos);
- Para quem optou por fazer em dupla, os commits devem estar marcando o GitHub do colega @usuario_github_do_colega (que deve ter permissão para commitar no repositório em questão);
- De preferência, mas não obrigatório, deve ter commit dos dois integrantes da dupla;
- A cada dia de atraso, desconta-se 1 ponto da nota final, ou seja, após cinco dias de atraso o trabalho é zerado.

Foi feito uma promise para simular uma chamada ao servidor para buscar os dados do problema a ser resolvido, melhorias no tratamento de erro, tratar o carregamento dos dados e uma classe para os problemas
Recursos do ECMAscript 6 ou superior usados:
- let/const
- arrow functions
- parâmetros prédefinidos
- template strings
- classes
- promises

## Atividade 4 - Guia de npm para principiantes

- Seguir os passos do guia para aprender npm

## Atividade 5 - Criando um bundle otimizado para produção com webpack

- Seguir os passos do guia para criar um bundle com webpack

## Atividade 6 - NPM e Webpack no seu projeto

Agora que você já brincou um pouco com as APIs do HTML5, com metodologias e pré-processadores CSS e também com os novos recursos do JavaScript, é hora deixar seu projeto um pouco mais profissional.

Requisitos:

Tendo como base a aplicação desenvolvida e evoluída nos exercícios práticos 1, 2 e 3:
- Você deve deixar seu JavaScript modularizado utilizando import/export do ES2015;
- Você deve utilizar o Webpack para empacotar seu código em um único arquivo bundle.js que será referenciado no HTML de maneira dinâmica via html-webpack-plugin (explicado na segunda versão do webpack do Exercício Prático 05 - Criando um bundle otimizado para produção com webpack);
- Além disso, seus arquivos SASS (.scss) devem ser compilados para CSS via webpack (dica: usar o pacote npm sass-loader e configurá-lo no arquivo de configuração do webpack como os outros loaders que já colocamos);
- Deve ser possível executar seu projeto em tempo de desenvolvimento com npm start (que executará o webpack-dev-server) e também com npm run build (que criará o build final do seu projeto);

Instruções gerais:
- O trabalho pode seguir sendo feito em dupla;
- Continue tendo em mente em fazer implementações simples;
- O código-fonte deve ser entregue obrigatoriamente via URL do GitHub de um dos integrantes da dupla (entregar link da tag da versão criada. Ex: v0.4.0);
- Esse exercício deve estar no mesmo repositório dos exercícios práticos 1, 2 e 3, visto que é uma evolução dos mesmos e também deve estar marcado com uma tag (a 4ª versão do seu projeto);
- Para quem optou por fazer em dupla, os commits devem estar marcando o GitHub do colega @usuario_github_do_colega (que deve ter permissão para commitar no repositório em questão);
- De preferência, mas não obrigatório, deve ter commit dos dois integrantes da dupla;
- A cada dia de atraso, desconta-se 1 ponto da nota final, ou seja, após dez dias de atraso o trabalho é zerado.
 
Dicas finais:
- Talvez clonar a estrutura já feita e funcionando do Exercício prático 05 - Criando um bundle otimizado para produção com webpack e ir incluindo o código da sua aplicação desenvolvida nos exercícios práticos 1, 2 e 3 seja um caminho mais fácil que partir do exercício prático 3 refazendo a configuração do Webpack. Mas ok se você quiser seguir qualquer um dos caminhos;
- Se você usar como base a estrutura do exercício prático 5 desinstale (npm uninstall) os pacotes relacionados ao React, pois você não irá utilizá-los. Seriam eles: react, react-dom e babel-preset-react.
- Se você usou o html5-boilerplate para estruturar o seu projeto incialmente, após essa reorganização com o Webpack, sua estrutura de diretórios ficará mais ou menos assim:
	- Na raíz do seu projeto deve possuir quatro pastas: src/, dist/, doc/ e node_modules/ (essa última não deve estar versionada no git);
	- Além das três pastas, deve existir cinco arquivos também na raíz do seu projeto: package.json, package-lock.json, .gitignore, webpack.config.js e readme.md. Você já conhece a finalidade de cada um deles.
	- Os demais arquivos do html5-boilerplate podem ser movidos para dentro de src/ temporariamente.

Foram usados os pacotes:
- Babel: babel-loader babel/preset-env babel/core
- Css: css-loader mini-css-extract-plugin 
- html: html-webpack-plugin
- arquivos: file-loader
- sass: node-sass sass sass-loader style-loader fibers
- web workers: worker-loader
- servidor: webpack-dev-server

## Atividade 7 - Usando princípios do WCAG e WAI-ARIA

Sua aplicação já está mais profissional do que quando você começou no primeiro exercício prático, mas para prover uma experiência completa e inclusiva é necessário pensar em requisitos de acessibilidade.

Requisitos:

Tendo como base a aplicação desenvolvida e evoluída nos exercícios práticos 1, 2, 3 e 6:

- Você deve fazer com que sua aplicação seja acessível cumprindo o nível de conformidade "A" do WCAG (Não precisa contemplar todas as diretrizes do nível A, mas pelo menos uma duas talvez seja bacana);
- [Opcional] Além disso, como forma de ponto extra (bom para quem perdeu pontos na entrega de exercícios atrasados), sua aplicação deve implementar ao menos um role do WAI-ARIA que se mostrar mais adequado (sugestões: widget roles, landmark roles ou live region roles).

Instruções gerais:

- O trabalho pode seguir sendo feito em dupla;
- O código-fonte deve ser entregue obrigatoriamente via URL do GitHub de um dos integrantes da dupla e com a tag adequada (entregar link da tag da versão criada. Ex: v0.5.0);
- A cada dia de atraso, desconta-se 1 ponto da nota final, ou seja, após cinco dias de atraso o trabalho é zerado.

Dicas finais:

- Embora você tenha que cumprir os critérios de sucesso do nível de conformidade "A", não foque em cumprir as regras. Foque na pergunta: "Se eu fosse uma pessoa com deficiência (PCD) - que pode ser cega ou surda ou com dificuldade motora, dentre outras - eu conseguiria usar e entender minha aplicação e a funcionalidade que estou propondo?" e mais: "eu conseguiria operar essa simples aplicação/PoC?"
