import expressoImage from "../assets/expresso.png";
import americanImage from "../assets/americano.png";
import cremosoImage from "../assets/cremoso.png";
import geladoImage from "../assets/expresso-gelado.png";
import comLeiteImage from "../assets/comleite.png";
import latteImage from "../assets/latte.png";
import capuccinoImage from "../assets/capuccino.png";
import macchiatoImage from "../assets/macchiato.png";
import mocaccinoImage from "../assets/mocaccino.png";
import chocolateImage from "../assets/chocolate-quente.png";
import cubanoImage from "../assets/cubano.png";
import havaianoImage from "../assets/havaiano.png";
import arabeImage from "../assets/arabe.png";
import irlandesImage from "../assets/irlandes.png";

export const products = [
  {
    id: 1,
    name: "Expresso Tradicional",
    tags: ["Tradicional"],
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    image: expressoImage,
  },
  {
    id: 2,
    name: "Expresso Americano",
    tags: ["Tradicional"],
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    image: americanImage,
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    tags: ["Tradicional"],
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    image: cremosoImage,
  },
  {
    id: 4,
    name: "Expresso Gelado",
    tags: ["Tradicional", "Gelado"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    image: geladoImage,
  },
  {
    id: 5,
    name: "Café com Leite",
    tags: ["Tradicional", "Com Leite"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    image: comLeiteImage,
  },
  {
    id: 6,
    name: "Latte",
    tags: ["Tradicional", "Com Leite"],
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    image: latteImage,
  },
  {
    id: 7,
    name: "Capuccino",
    tags: ["Tradicional", "Com Leite"],
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    image: capuccinoImage,
  },
  {
    id: 8,
    name: "Macciato",
    tags: ["Tradicional", "Com Leite"],
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    image: macchiatoImage,
  },
  {
    id: 9,
    name: "Mocaccino",
    tags: ["Tradicional", "Com Leite"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    image: mocaccinoImage,
  },
  {
    id: 10,
    name: "Chocolate Quente",
    tags: ["Especial", "Com Leite"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    image: chocolateImage,
  },
  {
    id: 11,
    name: "Cubano",
    tags: ["Especial", "Alcóolico", "Gelado"],
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    image: cubanoImage,
  },
  {
    id: 12,
    name: "Havaiano",
    tags: ["Especial"],
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    image: havaianoImage,
  },
  {
    id: 13,
    name: "Árabe",
    tags: ["Especial"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    image: arabeImage,
  },
  {
    id: 14,
    name: "Irlandês",
    tags: ["Especial", "Álcoolico"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    image: irlandesImage,
  },
];
