import { Product } from "../context/CartContext";

export const allProducts: Product[] = [
    { id: 1, name: "Acer Aspire 5", price: 3500, imageUrl: "./src/assets/A51545.png", description: "Oferece excelente desempenho para multitarefas e produtividade. Garantem velocidade e qualidade visual para o dia a dia.", category: "notebook" },
    { id: 2, name: "Dell Inspiron 15 3000", price: 4500, imageUrl: "./src/assets/Inspiron-15-3000.png", description: "Um notebook confiável para estudos e trabalho. Construção robusta garantem durabilidade e conforto no uso prolongado.", category: "notebook" },
    { id: 3, name: "Lenovo Legion 5i", price: 5500, imageUrl: "./src/assets/Legion-5i.png", description: "Um notebook gamer poderoso, ideal para jogos e criação de conteúdo. Oferece gráficos fluidos e desempenho excepcional.", category: "notebook" },
    { id: 4, name: "AMD Radeon RX 6500 XT 4GB ASRock Phantom Gaming", price: 1600, imageUrl: "./src/assets/RX-6500-XT.png", description: "É uma opção de entrada para gamers que buscam uma experiência fluida em Full HD. Possui bom desempenho em eSports e jogos leves.", category: "placa-de-video" },
    { id: 5, name: "Nvidia GeForce RTX 3050 8GB Gigabyte Eagle", price: 1300, imageUrl: "./src/assets/RTX 3050.png", description: "Placa com suporte a Ray Tracing e DLSS, garantindo gráficos imersivos e desempenho para games em Full HD.", category: "placa-de-video" },
    { id: 6, name: "AMD Ryzen 5 4500", price: 650, imageUrl: "./src/assets/Ryzen-4500.png", description: "É uma excelente opção para quem busca um processador de entrada com ótimo custo-benefício e desempenho sólido.", category: "processador" },
    { id: 7, name: "Samsung Galaxy Book2", price: 3800, imageUrl: "./src/assets/Galaxy Book2.png", description: "Ideal para produtividade e entretenimento, além de trazer portabilidade sem abrir mão da performance.", category: "notebook" },
    { id: 8, name: "Asus VivoBook Pro 15", price: 4800, imageUrl: "./src/assets/VivoBook-Pro-15.png", description: "Um notebook equilibrado para profissionais e estudantes exigentes, permite edição de vídeos e execução de softwares gráficos com fluidez.", category: "notebook" },
    { id: 9, name: "AMD Radeon RX 7600 8GB PowerColor Hellhound", price: 2500, imageUrl: "./src/assets/RX 7600.png", description: "Entrega um ótimo custo-benefício para jogos em 1080p e 1440p. É uma escolha equilibrada para jogadores exigentes.", category: "placa-de-video" },
    { id: 10, name: "Nvidia GeForce RTX 4060 Ti 8GB Galax EX Gamer", price: 3400, imageUrl: "./src/assets/RTX-4060-Ti.png", description: "Opção poderosa para games e criação de conteúdo. Com Ray Tracing, DLSS 3, oferece alto desempenho em 1440p.", category: "placa-de-video" },
    { id: 11, name: "Intel Core i5-12400F", price: 1200, imageUrl: "./src/assets/i5-12400F.png", description: "Processador de alto desempenho para gamers e criadores de conteúdo. Garante excelente eficiência energética.", category: "processador" },
    { id: 12, name: "AMD Ryzen 7 7700X", price: 2000, imageUrl: "./src/assets/Ryzen-7700X.png", description: "Escolha premium para usuários exigentes. Ele entrega desempenho excepcional para jogos, streaming e aplicações pesadas.", category: "processador" },
  ];
  
  export const simplifiedProducts: Omit<Product, 'description' | 'category'>[] = allProducts.map(({ id, name, price, imageUrl }) => ({
    id,
    name,
    price,
    imageUrl,
  }));
  
  export const getRandomProducts = (products: Product[] ,count: number): Product[] => {
    const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  