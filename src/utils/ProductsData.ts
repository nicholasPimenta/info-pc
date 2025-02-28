import { Product } from "../context/CartContext";

export const allProducts: Product[] = [
    { id: 1, name: "Notebook A", price: 3500, imageUrl: "link_da_imagem_a", description: "Notebook potente para jogos e produtividade.", category: "notebook" },
    { id: 2, name: "Notebook B", price: 4500, imageUrl: "link_da_imagem_b", description: "Ideal para trabalho remoto e multitarefas.", category: "notebook" },
    { id: 3, name: "Notebook C", price: 5500, imageUrl: "link_da_imagem_c", description: "Alta performance e design premium.", category: "notebook" },
    { id: 4, name: "Placa de Vídeo X", price: 2000, imageUrl: "link_da_imagem_x", description: "Placa de vídeo ideal para edição e games.", category: "placa-de-video" },
    { id: 5, name: "Placa de Vídeo Y", price: 2500, imageUrl: "link_da_imagem_y", description: "Performance incrível para jogos em 4K.", category: "placa-de-video" },
    { id: 6, name: "Processador Z", price: 1500, imageUrl: "link_da_imagem_z", description: "Processador eficiente para tarefas diárias.", category: "processador" },
    { id: 7, name: "Notebook D", price: 3800, imageUrl: "link_da_imagem_d", description: "Bom para uso corporativo e tarefas pesadas.", category: "notebook" },
    { id: 8, name: "Notebook E", price: 4800, imageUrl: "link_da_imagem_e", description: "Design moderno e ótimo desempenho.", category: "notebook" },
    { id: 9, name: "Placa de Vídeo Z", price: 2800, imageUrl: "link_da_imagem_z", description: "Excelente para edição de vídeos e gráficos.", category: "placa-de-video" },
    { id: 10, name: "Placa de Vídeo W", price: 3000, imageUrl: "link_da_imagem_w", description: "Placa ideal para jogos de alta resolução.", category: "placa-de-video" },
    { id: 11, name: "Processador Y", price: 1700, imageUrl: "link_da_imagem_y", description: "Processador rápido e com boa relação custo-benefício.", category: "processador" },
    { id: 12, name: "Processador X", price: 2000, imageUrl: "link_da_imagem_x", description: "Alta capacidade de processamento para tarefas complexas.", category: "processador" },
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
  