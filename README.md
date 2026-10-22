# Meu Projeto

Projeto front-end inicial com Vite e uma pipeline de CI/CD no GitHub Actions.

## Site publicado

Após publicar este repositório no GitHub e ativar o GitHub Pages, o site ficará disponível em:

`https://<SEU_USUARIO>.github.io/<NOME_DO_REPOSITORIO>/`

Substitua os campos pelo usuário e nome do repositório. O endereço também aparece no ambiente `github-pages` de uma execução bem-sucedida do workflow.

## Pipeline

O workflow [`.github/workflows/main.yml`](./.github/workflows/main.yml) roda em pushes e pull requests direcionados à branch `main`. Ele instala dependências com `npm ci`, executa ESLint, testes e build. Após um push válido em `main`, publica o artefato no GitHub Pages.

Para habilitar a publicação, no repositório GitHub acesse **Settings → Pages** e escolha **GitHub Actions** como origem. Não é necessário cadastrar um secret: o workflow usa o `GITHUB_TOKEN` automático com permissões limitadas à publicação da página.

## Desenvolvimento local

Requer Node.js 22 ou superior.

```bash
npm ci
npm run dev
```

## Validação

```bash
npm run lint
npm run test
npm run build
```
