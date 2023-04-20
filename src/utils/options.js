export const asideMenu = [
  {
    id: 0,
    name: "Haberler",
    route: "news",
    subMenu: [
      {
        name: "Haber Listele",
        route: "news/list",
      },
      {
        name: "Haber Oluşur",
        route: "news/create",
      },
    ],
  },
  {
    id: 1,
    name: "Kategoriler",
    route: "categories",
    subMenu: [
      {
        name: "Kategori Listele",
        route: "category/list",
      },
      {
        name: "Kategori Oluşur",
        route: "category/create",
      },
    ],
  },
];
