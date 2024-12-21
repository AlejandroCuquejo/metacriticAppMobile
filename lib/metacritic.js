export async function getLatestGames() {
  const mockData = {
    data: {
      items: [
        {
          id: "1",
          title: "Prince of Persia: The Lost Crown",
          description: "Un juego de plataformas y acción en 2D que explora la mitología persa, permitiendo manipular el tiempo y enfrentarte a criaturas mitológicas.",
          score: 95,
          image: "https://tse1.mm.bing.net/th?id=OIP.uVHYMSPsUsGHko4e9nShgAHaDt&pid=Api"
        },
        {
          id: "2",
          title: "The Legend of Heroes: Trails through Daybreak",
          description: "Un RPG que sigue la historia de Van Arkride, un 'spriggan' que acepta diversos trabajos en una nación amenazada.",
          score: 93,
          image: "https://tse2.mm.bing.net/th?id=OIP.qoLpKqR_Lcvz0AKZrpOprgHaEK&pid=Api"
        },
        {
          id: "3",
          title: "Like a Dragon: Infinite Wealth",
          description: "La continuación de la serie 'Like a Dragon', sigue las aventuras de Ichiban Kasuga y Kazuma Kiryu en Japón y Hawái.",
          score: 93,
          image: "https://tse1.mm.bing.net/th?id=OIP.d2lH6jElwxZluljeNXB4CwHaHa&pid=Api"
        },
        {
          id: "4",
          title: "Final Fantasy VII Rebirth",
          description: "La esperada continuación de 'Final Fantasy VII Remake', combinando estrategia y acción en combate.",
          score: 93,
          image: "https://tse1.mm.bing.net/th?id=OIP.Ks2SdTH6RIUy_pU0N26JkQHaEK&pid=Api"
        },
        {
          id: "5",
          title: "Balatro",
          description: "Un innovador juego de construcción de mazos con mecánicas de póker, galardonado como el mejor juego indie del año.",
          score: 92,
          image: "https://tse1.mm.bing.net/th?id=OIF.kXfavzMHjGFD77NfDVRVGA&pid=Api"
        },
        {
          id: "6",
          title: "The Legend of Zelda: Echoes of Wisdom",
          description: "Una nueva aventura de Zelda donde la princesa debe salvar Hyrule de extrañas brechas que hacen desaparecer a sus habitantes.",
          score: 92,
          image: "https://img.asmedia.epimg.net/resizer/v2/https%3A%2F%2Fstatic.prisa.com%2Fgamepedia%2Fimagenes%2F2024%2F06%2F21%2Fgame_cover%2F805906916.jpg?auth=3a2fb1a1a2d27d28e51e03c691d3d6d1f536801997ae4bb551d9032f1b96c7f1&width=280&height=420&smart=true" // Reemplaza con el enlace correspondiente.
        },
        {
          id: "7",
          title: "Dragon's Dogma 2",
          description: "La secuela del aclamado RPG de acción, ofreciendo un mundo abierto vasto y combates dinámicos contra criaturas míticas.",
          score: 91,
          image: "https://img.asmedia.epimg.net/resizer/v2/https%3A%2F%2Fstatic.prisa.com%2Fgamepedia%2Fimagenes%2F2023%2F6%2F13%2Fgame_cover%2F333496006.jpg?auth=37ae2bb296c86f44dea7c3de6df211491e0c16bc6ee4ff4b6b34a440edeca7eb&width=280&height=420&smart=true" // Reemplaza con el enlace correspondiente.
        },
      ]
    }
  };

  const { items } = mockData.data;

  return items.map((item) => {
    const { id, title, description, score, image } = item;

    return {
      id,
      title,
      description,
      score,
      image
    };
  });
}



export async function getGameDetails(title) {
  const mockDetails = {
    "Prince of Persia: The Lost Crown": {
      title: "Prince of Persia: The Lost Crown",
      description:
        "Un juego de plataformas y acción en 2D que explora la mitología persa, permitiendo manipular el tiempo y enfrentarte a criaturas mitológicas.",
      score: 95,
      img: "https://tse1.mm.bing.net/th?id=OIP.uVHYMSPsUsGHko4e9nShgAHaDt&pid=Api",
      reviews: [
        {
          quote: "Un juego increíblemente desafiante y bien diseñado.",
          score: 9,
          date: "2024-01-01",
          publicationName: "GameSpot",
          author: "Juan Pérez",
        },
        {
          quote: "La franquicia de Prince of Persia regresa con fuerza.",
          score: 9.5,
          date: "2024-01-02",
          publicationName: "IGN",
          author: "Ana Gómez",
        },
      ],
    },
    "The Legend of Heroes: Trails through Daybreak": {
      title: "The Legend of Heroes: Trails through Daybreak",
      description:
        "Un RPG que sigue la historia de Van Arkride, un 'spriggan' que acepta diversos trabajos en una nación amenazada.",
      score: 93,
      img: "https://tse2.mm.bing.net/th?id=OIP.qoLpKqR_Lcvz0AKZrpOprgHaEK&pid=Api",
      reviews: [
        {
          quote: "Una historia profunda con mecánicas RPG sólidas.",
          score: 9.3,
          date: "2024-01-10",
          publicationName: "Kotaku",
          author: "Pedro López",
        },
        {
          quote: "Un juego que redefine el género de los RPG.",
          score: 9.7,
          date: "2024-01-15",
          publicationName: "Polygon",
          author: "Laura Martínez",
        },
      ],
    },
    "Like a Dragon: Infinite Wealth": {
      title: "Like a Dragon: Infinite Wealth",
      description:
        "La continuación de la serie 'Like a Dragon', sigue las aventuras de Ichiban Kasuga y Kazuma Kiryu en Japón y Hawái.",
      score: 93,
      img: "https://tse1.mm.bing.net/th?id=OIP.d2lH6jElwxZluljeNXB4CwHaHa&pid=Api",
      reviews: [
        {
          quote: "Una experiencia cautivadora y emocionante.",
          score: 9.3,
          date: "2024-01-20",
          publicationName: "Game Informer",
          author: "Carlos Díaz",
        },
      ],
    },
    "Final Fantasy VII Rebirth": {
      title: "Final Fantasy VII Rebirth",
      description:
        "La esperada continuación de 'Final Fantasy VII Remake', combinando estrategia y acción en combate.",
      score: 93,
      img: "https://tse1.mm.bing.net/th?id=OIP.Ks2SdTH6RIUy_pU0N26JkQHaEK&pid=Api",
      reviews: [
        {
          quote: "Un paso más allá en la narrativa épica de Final Fantasy.",
          score: 9.5,
          date: "2024-02-01",
          publicationName: "Eurogamer",
          author: "Lucía Romero",
        },
      ],
    },
    Balatro: {
      title: "Balatro",
      description:
        "Un innovador juego de construcción de mazos con mecánicas de póker, galardonado como el mejor juego indie del año.",
      score: 92,
      img: "https://tse1.mm.bing.net/th?id=OIF.kXfavzMHjGFD77NfDVRVGA&pid=Api",
      reviews: [
        {
          quote: "Una revolución en el género de construcción de mazos.",
          score: 9.2,
          date: "2024-03-01",
          publicationName: "Indie Game Spotlight",
          author: "Marta Vega",
        },
      ],
    },
    "The Legend of Zelda: Echoes of Wisdom": {
      title: "The Legend of Zelda: Echoes of Wisdom",
      description:
        "Una nueva aventura de Zelda donde la princesa debe salvar Hyrule de extrañas brechas que hacen desaparecer a sus habitantes.",
      score: 92,
      img: "https://img.asmedia.epimg.net/resizer/v2/https%3A%2F%2Fstatic.prisa.com%2Fgamepedia%2Fimagenes%2F2024%2F06%2F21%2Fgame_cover%2F805906916.jpg?auth=3a2fb1a1a2d27d28e51e03c691d3d6d1f536801997ae4bb551d9032f1b96c7f1&width=280&height=420&smart=true",
      reviews: [
        {
          quote: "Un título esencial para cualquier fan de Zelda.",
          score: 9.2,
          date: "2024-03-10",
          publicationName: "Zelda Universe",
          author: "Raúl Sánchez",
        },
      ],
    },
    "Dragon's Dogma 2": {
      title: "Dragon's Dogma 2",
      description:
        "La secuela del aclamado RPG de acción, ofreciendo un mundo abierto vasto y combates dinámicos contra criaturas míticas.",
      score: 91,
      img: "https://img.asmedia.epimg.net/resizer/v2/https%3A%2F%2Fstatic.prisa.com%2Fgamepedia%2Fimagenes%2F2023%2F6%2F13%2Fgame_cover%2F333496006.jpg?auth=37ae2bb296c86f44dea7c3de6df211491e0c16bc6ee4ff4b6b34a440edeca7eb&width=280&height=420&smart=true",
      reviews: [
        {
          quote: "Un mundo abierto impresionante con combates excepcionales.",
          score: 9.1,
          date: "2024-04-01",
          publicationName: "RPGamer",
          author: "Elena Martín",
        },
      ],
    },
  };

  // Simular delay de una llamada a la API
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Buscar los detalles del juego por el título
  const gameDetails = mockDetails[title];

  if (!gameDetails) {
    throw new Error("Game not found");
  }

  // Retornar los datos estructurados
  return {
    img: gameDetails.img,
    title: gameDetails.title,
    description: gameDetails.description,
    score: gameDetails.score,
    reviews: gameDetails.reviews,
  };
}
