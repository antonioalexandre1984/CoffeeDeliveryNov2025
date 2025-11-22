import TradicionalImage from "../assets/coffees/tradicional.png";
import AmericanoImage from "../assets/coffees/Americano.png";
import CremosoImage from "../assets/coffees/leite.png";
import GeladoImage from "../assets/coffees/gelado.png"; 
import LeiteImage from "../assets/coffees/chocolate.png";
import LatteImage from "../assets/coffees/latte.png";
import CapuccinoImage from "../assets/coffees/capuccino.png";
import MacchiatoImage from "../assets/coffees/macchiato.png";
import MocaccinoImage from "../assets/coffees/mocaccino.png";
import ChocolateImage from "../assets/coffees/chocolate.png";
import CubanoImage from "../assets/coffees/cubano.png";
import HavaianoImage from "../assets/coffees/havaiano.png";
import ArabeImage from "../assets/coffees/arabe.png";
import IrlandesImage from "../assets/coffees/irlandes.png";


export const coffees = [
    {
        id: 1,
        tags: ["tradicional"],
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        photo: TradicionalImage,
        price: 9.5,
    },
    {
        id: 2,
        tags: ["tradicional"],
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        photo: AmericanoImage,
        price: 8.9,
    },
    {
        id: 3,
        tags: ["tradicional"],
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        photo: CremosoImage,
        price: 7.9,
    },
    {
        id: 4,
        tags: ["tradicional", "gelado"],
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        photo: GeladoImage,
        price: 7.5,
    },
    {
        id: 5,
        tags: ["tradicional", "com leite"],
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        photo: LeiteImage,
        price: 7.9,
    },
    {
        id: 6,
        tags: ["tradicional", "com leite"],
        name: "Latte",
        description:
            "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        photo: LatteImage,
        price: 9.9,
    },
    {
        id: 7,
        tags: ["tradicional", "com leite"],
        name: "Capuccino",
        description:
            "Bebida com canela feita de doses iguais de café, leite e espuma",
        photo: CapuccinoImage,
        price: 9.9,
    },
    {
        id: 8,
        tags: ["tradicional", "com leite"],
        name: "Macchiato",
        description:
            "Café expresso misturado com um pouco de leite quente e espuma",
        photo: MacchiatoImage,
        price: 9.9,
    },
    {
        id: 9,
        tags: ["tradicional", "com leite"],
        name: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        photo: MocaccinoImage,
        price: 9.9,
    },
    {
        id: 10,
        tags: ["especial", "com leite"],
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        photo: ChocolateImage,
        price: 9.9,
    },
    {
        id: 11,
        tags: ["especial", "alcoólico", "gelado"],
        name: "Cubano",
        description:
            "Drink gelado de café expresso com rum, creme de leite e hortelã",
        photo: CubanoImage,
        price: 9.9,
    },
    {
        id: 12,
        tags: ["especial"],
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        photo: HavaianoImage,
        price: 9.9,
    },
    {
        id: 13,
        tags: ["especial"],
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        photo: ArabeImage,
        price: 9.9,
    },
    {
        id: 14,
        tags: ["especial", "alcoólico"],
        name: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        photo: IrlandesImage,
        price: 9.9,
    },
];