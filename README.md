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

## Atividade 2 - Pré-processadores e metodologias CSS

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


