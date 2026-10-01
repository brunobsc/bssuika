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
| Atrito | equivalente ao μ=1 do Box2D: derivado da gravidade (desliza em rampas acima de 45°) | 0,5 |
| Elasticidade | 0,1, emulada como no Box2D: quique garantido acima de 32 px/s de impacto | 0,1 (nativa do Matter, mais fraca) |
| Amortecimento no ar | quase zero | leve |
| Giro | zerado quando uma fruta toca outra | livre |
| Fusão | nasce na fruta de baixo, com 100 px/s para baixo, cresce em 0,5 s | nasce entre as duas, cresce em 0,2 s |

Por que não bastou copiar os números: o atrito do Matter.js é uma desaceleração fixa com um limiar de "gruda", não o modelo de Coulomb do Box2D, e a elasticidade do Matter converge para zero ao longo das iterações do solver. Os detalhes estão nos comentários de `MODES` em `index.html`.

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
