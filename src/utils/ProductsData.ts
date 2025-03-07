import { Product } from "../context/CartContext";

export const allProducts: Product[] = [
    { id: 1, name: "Acer Aspire 5", price: 3500, imageUrl: "link_da_imagem_a", description: "Equipado com processador AMD Ryzen 5 5500U e 8GB de RAM, o Acer Aspire 5 oferece excelente desempenho para multitarefas e produtividade. Sua tela Full HD de 15,6” e SSD de 256GB garantem velocidade e qualidade visual para o dia a dia.", category: "notebook" },
    { id: 2, name: "Dell Inspiron 15 3000", price: 4500, imageUrl: "link_da_imagem_b", description: "Um notebook confiável para estudos e trabalho, o Dell Inspiron 15 vem com Intel Core i7-1165G7, 16GB de RAM e SSD de 512GB. Tela de 15,6” Full HD e construção robusta garantem durabilidade e conforto no uso prolongado.", category: "notebook" },
    { id: 3, name: "Lenovo Legion 5i", price: 5500, imageUrl: "link_da_imagem_c", description: "Um notebook gamer poderoso, equipado com Intel Core i7-10750H e RTX 2060, ideal para jogos e criação de conteúdo. Com 16GB de RAM, SSD de 512GB e tela de 144Hz, oferece gráficos fluidos e desempenho excepcional.", category: "notebook" },
    { id: 4, name: "AMD Radeon RX 6500 XT 4GB ASRock Phantom Gaming", price: 1600, imageUrl: "link_da_imagem_x", description: "A RX 6500 XT da ASRock é uma opção de entrada para gamers que buscam uma experiência fluida em Full HD. Com 4GB de VRAM GDDR6 e arquitetura RDNA 2, oferece bom desempenho em eSports e títulos leves.", category: "placa-de-video" },
    { id: 5, name: "Nvidia GeForce RTX 3050 8GB Gigabyte Eagle", price: 1300, imageUrl: "link_da_imagem_y", description: "Equipada com 8GB de VRAM GDDR6, a RTX 3050 da Gigabyte oferece suporte a Ray Tracing e DLSS, garantindo gráficos imersivos e desempenho eficiente para games em Full HD. Perfeita para quem quer iniciar no mundo das RTX.", category: "placa-de-video" },
    { id: 6, name: "AMD Ryzen 5 4500", price: 650, imageUrl: "link_da_imagem_z", description: "O Ryzen 5 4500 é uma excelente opção para quem busca um processador de entrada com ótimo custo-benefício. Com 6 núcleos, 12 threads e boost de até 4.1GHz, ele oferece desempenho sólido para tarefas do dia a dia e jogos em Full HD.", category: "processador" },
    { id: 7, name: "Samsung Galaxy Book2", price: 3800, imageUrl: "link_da_imagem_d", description: "Com Intel Core i5-1235U, 8GB de RAM e SSD de 256GB, o Galaxy Book2 é ideal para produtividade e entretenimento. Sua tela Full HD de 15,6” e design fino oferecem portabilidade sem abrir mão da performance.", category: "notebook" },
    { id: 8, name: "Asus VivoBook Pro 15", price: 4800, imageUrl: "link_da_imagem_e", description: "Um notebook equilibrado para profissionais e estudantes exigentes, com Intel Core i7-11370H, 16GB de RAM e SSD de 512GB. Equipado com uma GPU GTX 1650, permite edição de vídeos e execução de softwares gráficos com fluidez.", category: "notebook" },
    { id: 9, name: "AMD Radeon RX 7600 8GB PowerColor Hellhound", price: 2500, imageUrl: "link_da_imagem_z", description: "A RX 7600 da PowerColor entrega um ótimo custo-benefício para jogos em 1080p e 1440p. Com arquitetura RDNA 3, 8GB de VRAM e alto desempenho em jogos modernos, é uma escolha equilibrada para jogadores exigentes.", category: "placa-de-video" },
    { id: 10, name: "Nvidia GeForce RTX 4060 Ti 8GB Galax EX Gamer", price: 3400, imageUrl: "link_da_imagem_w", description: "A RTX 4060 Ti da Galax é uma opção poderosa para games e criação de conteúdo. Com Ray Tracing, DLSS 3 e 8GB de VRAM GDDR6, oferece alto desempenho em 1440p, garantindo fluidez e gráficos impressionantes.", category: "placa-de-video" },
    { id: 11, name: "Intel Core i5-12400F", price: 1200, imageUrl: "link_da_imagem_y", description: "O Core i5-12400F da Intel é um processador de alto desempenho para gamers e criadores de conteúdo. Com 6 núcleos, 12 threads e frequências de até 4.4GHz, garante excelente eficiência energética e performance superior em multitarefa.", category: "processador" },
    { id: 12, name: "AMD Ryzen 7 7700X", price: 2000, imageUrl: "link_da_imagem_x", description: "O Ryzen 7 7700X é uma escolha premium para usuários exigentes. Com 8 núcleos, 16 threads e boost de até 5.4GHz, ele entrega desempenho excepcional para jogos, streaming e aplicações pesadas, sendo ideal para quem busca potência e longevidade.", category: "processador" },
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
  