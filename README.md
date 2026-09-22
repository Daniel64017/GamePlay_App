# GamePlay - (Desenvolvimento Mobile 2)

App em React Native + Expo com as 4 telas pedidas no protótipo do Figma:

- **Login** — tela de entrada com botão "Entrar com Discord"
- **Home** — saudação, categorias e lista de partidas agendadas
- **Detalhes do servidor** — banner, lista de jogadores e botão "Entrar na partida"
- **Agendar** — seleção de categoria (com troca de estado visual) e simulação
  de "servidor selecionado" (sem o modal de lista, conforme pedido no enunciado)

## Como rodar

1. Instale as dependências (precisa de Node.js instalado):

   ```bash
   npm install
   ```

2. Inicie o servidor do Expo:

   ```bash
   npx expo start
   ```

3. Abra o app **Expo Go** no seu celular/tablet (disponível na App Store /
   Google Play) e escaneie o QR code que aparece no terminal / navegador.

   - Celular e computador precisam estar na mesma rede Wi-Fi.
   - Se o QR code não conectar, tente `npx expo start --tunnel`.

## Estrutura do projeto

```
GamePlayApp/
├── App.js                     # Navegação (Stack) entre as 4 telas
├── src/
│   ├── screens/
│   │   ├── LoginScreen.js
│   │   ├── HomeScreen.js
│   │   ├── ServerDetailsScreen.js
│   │   └── ScheduleScreen.js
│   ├── theme/colors.js        # Cores e raios usados no design
│   └── data/matches.js        # Dados mockados (partidas, jogadores, servidor)
```

## Decisões de código (pra usar na apresentação)

- **Navegação**: `@react-navigation/native-stack`, com 4 rotas
  (`Login → Home → Details / Schedule`). `Login` usa `navigation.replace`
  para não deixar o usuário "voltar" pro login depois de entrar.
- **Estilização**: `StyleSheet.create` puro (sem lib de UI), com uma paleta
  central em `theme/colors.js` para manter consistência entre telas.
- **Componentização**: cada tela quebra pedaços repetidos em pequenos
  componentes internos (`MatchRow`, `PlayerRow`, `CategoryCard`) em vez de
  duplicar JSX.
- **Estado da tela Agendar**: `useState` para `selectedCategory` e
  `selectedServer`. Tocar numa categoria atualiza o estado e re-renderiza o
  card com borda/ícone destacados (efeito de "selecionado"). O botão
  "Selecione um servidor" simula a escolha (sem abrir modal, como pedido) e
  passa a exibir o servidor escolhido tanto no botão quanto num badge no topo.
- **Dados mockados**: ficam isolados em `src/data/matches.js` pra não
  misturar dados fake com lógica de UI — facilita trocar por uma API depois.
- **Ícones**: `@expo/vector-icons` (FontAwesome5 pro Discord, Ionicons e
  MaterialCommunityIcons pro resto), já incluso no Expo, sem precisar de
  assets extras.

## Observações

- As imagens (avatares, capas de jogo) usam placeholders de
  `picsum.photos` e `pravatar.cc` só para preencher o layout — troque pelos
  assets reais quando fores usar em produção.
