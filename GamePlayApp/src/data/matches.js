export const CATEGORIES = [
  { id: "ranqueada", label: "Ranqueada", icon: "trophy" },
  { id: "duelo1x1", label: "Duelo 1x1", icon: "sword-cross" },
  { id: "diversao", label: "Diversão", icon: "emoticon-happy-outline" },
];

export const MATCHES = [
  {
    id: "1",
    title: "Lendários",
    game: "League of Legends",
    category: "Ranqueada",
    date: "18/06 às 21:00h",
    role: "Anfitrião",
    cover: "https://picsum.photos/seed/lol/400/240",
    icon: "https://picsum.photos/seed/lolicon/80/80",
    description:
      "É hoje que vamos chegar ao challenger sem perder uma partida da md10",
    players: [
      { id: "p1", name: "Tiago Luchtenberg", status: "online", avatar: "https://i.pravatar.cc/100?img=12" },
      { id: "p2", name: "Rodrigo Gonçalves", status: "offline", avatar: "https://i.pravatar.cc/100?img=13" },
      { id: "p3", name: "Diego Fernandes", status: "offline", avatar: "https://i.pravatar.cc/100?img=14" },
    ],
  },
  {
    id: "2",
    title: "Yeah, boy",
    game: "Red Dead Redemption 2",
    category: "Diversão",
    date: "23/06 às 19:00h",
    role: "Visitante",
    cover: "https://picsum.photos/seed/rdr2/400/240",
    icon: "https://picsum.photos/seed/rdr2icon/80/80",
    description: "Só rolezinho no faroeste, sem compromisso.",
    players: [
      { id: "p1", name: "Ana Paula", status: "online", avatar: "https://i.pravatar.cc/100?img=25" },
      { id: "p2", name: "Marcos Vieira", status: "online", avatar: "https://i.pravatar.cc/100?img=33" },
    ],
  },
  {
    id: "3",
    title: "Rumo ao topo",
    game: "CS:GO",
    category: "1x1",
    date: "20/06 às 09:00h",
    role: "Anfitrião",
    cover: "https://picsum.photos/seed/csgo/400/240",
    icon: "https://picsum.photos/seed/csgoicon/80/80",
    description: "Treino de mira antes do campeonato.",
    players: [
      { id: "p1", name: "Tiago Luchtenberg", status: "online", avatar: "https://i.pravatar.cc/100?img=12" },
      { id: "p2", name: "Bruno Lima", status: "offline", avatar: "https://i.pravatar.cc/100?img=45" },
    ],
  },
  {
    id: "4",
    title: "Bora queimar tudo",
    game: "Apex Legends",
    category: "Ranqueada",
    date: "20/06 às 14:20h",
    role: "Anfitrião",
    cover: "https://picsum.photos/seed/apex/400/240",
    icon: "https://picsum.photos/seed/apexicon/80/80",
    description: "Squad completo, bora subir de elo.",
    players: [
      { id: "p1", name: "Tiago Luchtenberg", status: "online", avatar: "https://i.pravatar.cc/100?img=12" },
      { id: "p2", name: "Carla Souza", status: "online", avatar: "https://i.pravatar.cc/100?img=47" },
      { id: "p3", name: "Felipe Rocha", status: "offline", avatar: "https://i.pravatar.cc/100?img=51" },
    ],
  },
  {
    id: "5",
    title: "Valorosos",
    game: "Valorant",
    category: "Diversão",
    date: "18/06 às 21:00h",
    role: "Anfitrião",
    cover: "https://picsum.photos/seed/valorant/400/240",
    icon: "https://picsum.photos/seed/valoranticon/80/80",
    description: "Partidas casuais pra descontrair depois do trabalho.",
    players: [
      { id: "p1", name: "Tiago Luchtenberg", status: "online", avatar: "https://i.pravatar.cc/100?img=12" },
      { id: "p2", name: "Juliana Prado", status: "offline", avatar: "https://i.pravatar.cc/100?img=48" },
    ],
  },
];

// Usado apenas para simular o estado "servidor selecionado" na tela de Agendar,
// já que o modal com a lista de servidores não precisa ser desenvolvido.
export const MOCK_SELECTED_SERVER = {
  id: "srv-1",
  name: "Valorosos",
  game: "Valorant",
  icon: "https://picsum.photos/seed/valoranticon/80/80",
};
