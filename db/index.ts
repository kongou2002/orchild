export interface Plant {
  name: string;
  flowerSize: string,
  rating: string;
  price: number;
  isTopOfTheWeek: boolean;
  image: string;
  color: string;
  bonus: string;
  origin: string;
}

export const Categories = [
  {
    name: "Cattleya",
    items: [
      {
        name: "Frosty Maree",
        flowerSize: "4-6 cm",
        rating: "5.0",
        price: 13.99,
        isTopOfTheWeek: true,
        image:
          "https://www.orchid-tree.com/cdn/shop/files/FrostyMaree.jpg?v=1699004760&width=600",
        color: "white",
        bonus: "a pot",
        origin: "Taiwan",
      },
      {
        name: "Grosourdya Appendiculata",
        flowerSize: "8-15 mm",
        rating: "4.5",
        price: 12.99,
        isTopOfTheWeek: false,
        image:
          "https://www.orchid-tree.com/cdn/shop/files/Groappendi.jpg?v=1699005376&width=600",
        color: "brown",
        bonus: "a pot",
        origin: "Thailand",
      },
      {
        name: "Phalaenopsis Fuller's Sunset",
        flowerSize: "6-7 cm",
        rating: "4.2",
        price: 15.99,
        isTopOfTheWeek: false,
        image:
          "https://www.orchid-tree.com/cdn/shop/products/Fullerssunset.jpg?v=1648217350&width=600",
        color: "yellow",
        bonus: "No",
        origin: "Taiwan",
      },
    ],
  },
  {
    name: "Dendrobium",
    items: [
      {
        name: "Oncidium Cleo's Pride",
        flowerSize: "2-4 cm",
        rating: "5.0",
        price: 11.99,
        isTopOfTheWeek: true,
        image:
          "https://www.orchid-tree.com/cdn/shop/products/Cleosprideonc.jpg?v=1699019480&width=600",
        color: "green",
        bonus: "a thin Orchid",
        origin: "Vietnam",
      },
      {
        name: "Daerei",
        flowerSize: "5-6 cm",
        rating: "4.5",
        price: 59.99,
        isTopOfTheWeek: false,
        image:
          "https://orchidroots.com/static/utils/images/species/spc_000027949_000057578.jpg",
        color: "white",
        bonus: "a pot",
        origin: "Thailand",
      },
      {
        name: "Thongchai Gold",
        flowerSize: "5-6 cm",
        rating: "4.2",
        price: 19.99,
        isTopOfTheWeek: false,
        image:
          "https://www.orchid-tree.com/cdn/shop/files/ThongchaiPinwattanaDen.jpg?v=1691738855&width=600",
        color: "yellow",
        bonus: "no",
        origin: "Thailan",
      },
    ],
  },
  {
    name: "Phalaenopsis",
    items: [
      {
        name: "Dendrobium kingianum",
        flowerSize: "3-4 cm",
        rating: "5.0",
        price: 21.99,
        isTopOfTheWeek: true,
        image:
          "https://www.orchid-tree.com/cdn/shop/files/specio-kingianumden2.jpg?v=1698245194&width=600",
        color: "white",
        bonus: "a big pot",
        origin: "Taiwan",
      },
      {
        name: "Pink secret",
        flowerSize: "5-6 cm",
        rating: "4.5",
        price: 15.99,
        isTopOfTheWeek: false,
        image:
          "https://i.pinimg.com/originals/75/08/24/7508245c78cfe5bd288d5608b4d11e62.jpg",
        color: "pink",
        bonus: "no",
        origin: "Taiwan",
      },
      {
        name: "Yellow Moth",
        flowerSize: "4-6 cm",
        rating: "4.2",
        price: 20.99,
        isTopOfTheWeek: false,
        image:
          "https://theplantladysf.com/cdn/shop/products/image_3d172f07-c919-4acb-99be-55d83a722716.jpg",
        color: "Yellow",
        bonus: "Small orchid",
        origin: "Vietnam",
      },
    ],
  },
];
