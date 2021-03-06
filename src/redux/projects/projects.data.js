export const data = [
  {
    title: "Medicion de Distancias Con Cinta",
    place: "Universidad Nacional de Colombia",
    date: "2020-01-25T18:26:35.984Z",
    commission: {
      surveyor: {
        name: "Nombre del Topografo",
        email: "topografo@correo.com"
      },
      annotator: {
        name: "Nombre del Anotador",
        email: "anotador@correo.com"
      },
      auxiliary: [
        { name: "auxiliar1", email: "auxiliar1@createStoreHook.com" },
        { name: "auxiliar2", email: "auxiliar2@createStoreHook.com" }
      ]
    },
    type: "MEDICION_DE_DISTANCIAS_CINTA",
    equipment: ["Cinta Métrica"],
    data: {
      mediciones: [
        {
          de: "d1",
          a: "d2",
          lecturas: [33.42, 33.418, 33.425, 33.421, 33.41],
          media: 0,
          ro: 0,
          p: 0
        }
      ]
    }
  },
  {
    title: "Medicion de Ángulos con Cinta",
    place: "Universidad Nacional de Colombia",
    date: "2020-01-25T18:26:35.984Z",
    commission: {
      surveyor: {
        name: "Nombre del Topografo",
        email: "topografo@correo.com"
      },
      annotator: {
        name: "Nombre del Anotador",
        email: "anotador@correo.com"
      },
      auxiliary: [
        { name: "auxiliar1", email: "auxiliar1@createStoreHook.com" },
        { name: "auxiliar2", email: "auxiliar2@createStoreHook.com" }
      ]
    },
    type: "MEDICION_DE_ANGULOS_CON_CINTA",
    equipment: ["Cinta Métrica"],
    data: {
      mediciones: []
    }
  }
];
