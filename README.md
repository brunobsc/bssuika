# BS Suika (versão web)

Suika Game em HTML + JavaScript, feito para rodar no iPhone como app da Tela de Início, sem assinatura nem Modo Desenvolvedor.

- Física: [Matter.js 0.20.0](https://brm.io/matter-js/) (MIT), em `vendor/matter.min.js`.
- Funciona offline depois da primeira visita (`sw.js`). Ao mudar o jogo, troque o número em `CACHE` dentro de `sw.js`.
- `?demo=1` na URL solta frutas sozinho, útil para testar.

## Instalar no iPhone

1. Abra o endereço do jogo no Safari.
2. Toque em **Compartilhar** (ícone da seta) → **Adicionar à Tela de Início**.
3. Abra pelo ícone: tela cheia, sem barra do navegador.

## Rodar localmente

```sh
python3 -m http.server 8000
```

e abra http://localhost:8000.
