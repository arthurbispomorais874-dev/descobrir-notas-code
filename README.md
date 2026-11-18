# Insira sua Nota e Descubra o Resultado

Uma aplicação web simples para consultar o resultado de uma avaliação. Informe os dados da prova e a nota para receber uma mensagem personalizada de aprovação ou reprovação.

## Funcionalidades

- Formulário com nome, e-mail, instituição, disciplina e nota.
- Comparação da nota com a média definida no código (atualmente, **7**).
- Mensagem visual verde para aprovação e vermelha para reprovação.
- Validação da nota entre **0 e 10** e remoção do aviso anterior a cada nova consulta.
- Animação suave na exibição do resultado.

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- Fonte Montserrat, carregada do Google Fonts

## Como executar

Não é necessário instalar dependências ou iniciar um servidor.

1. Clone ou baixe este repositório.
2. Abra o arquivo `index.html` em um navegador.
3. Preencha o formulário e clique em **Enviar**.

> A fonte Montserrat depende de conexão com a internet. Sem conexão, o navegador usará uma fonte alternativa.

## Como funciona

O JavaScript lê a nota informada, verifica se o campo está dentro dos limites definidos no HTML e compara o valor com a média. Em seguida, cria uma mensagem personalizada e a adiciona à página. Se uma nova consulta for feita, o resultado anterior é removido.

Para alterar a média, edite a variável `media` no arquivo `script.js`:

```js
let media = 7;
```

## Estrutura do projeto

```text
.
├── index.html   # Estrutura do formulário
├── style.css    # Estilos e animação dos avisos
├── script.js    # Validação e lógica do resultado
└── README.md    # Documentação do projeto
```

## Observação

O campo de e-mail está presente no formulário, mas atualmente não é usado para envio ou armazenamento de dados.
