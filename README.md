# BS Suika (versão web)

Suika Game em HTML + JavaScript, feito para rodar no iPhone como app da Tela de Início, sem assinatura nem Modo Desenvolvedor.

- Física: [Matter.js 0.20.0](https://brm.io/matter-js/) (MIT), em `vendor/matter.min.js`.
- Funciona offline depois da primeira visita (`sw.js`). Ao mudar o jogo, troque o número em `CACHE` dentro de `sw.js`.
- `?demo=1` na URL solta frutas sozinho, útil para testar.

## Modos de física

Abaixo do seletor de modo há o seletor de tema ☀️/🌙 (salvo no aparelho; tecla **T** alterna). Sem escolha, segue o tema do sistema.

O seletor no topo troca só os parâmetros de física; pote, tamanhos, pontuação e regra de fim de jogo são iguais nos dois. A escolha fica salva no aparelho e a tecla **M** alterna.

| | Molenga | Rígido |
| --- | --- | --- |
| Origem | valores medidos no suikagame.com (Cocos Creator + Box2D) | parâmetros originais do BS Suika |
| Gravidade | 900 px/s² num pote de 720 px, escalada pela largura do pote | 1400 px/s² fixos |
| Ao soltar | empurrão inicial de 800 px/s para baixo | cai do repouso |
| Atrito / elasticidade | 1,0 / 0,1 | 0,5 / 0,1 |
| Amortecimento no ar | quase zero | leve |
| Giro | zerado quando uma fruta toca outra | livre |
| Fusão | nasce na fruta de baixo, com 100 px/s para baixo, cresce em 0,5 s | nasce entre as duas, cresce em 0,2 s |
| Corpos parados | dormem (como no Box2D) | sempre ativos |

Os valores ficam em `MODES`, no começo do script em `index.html`.

## Instalar no iPhone

1. Abra o endereço do jogo no Safari.
2. Toque em **Compartilhar** (ícone da seta) → **Adicionar à Tela de Início**.
3. Abra pelo ícone: tela cheia, sem barra do navegador.

## Rodar localmente

```sh
python3 -m http.server 8000
```

e abra http://localhost:8000.
