const templateAngulo = {
  radio: 0,
  cuerda: 0,
  point: "",
  points: ["", ""],
  anguloMedido: 0,
  anguloCorregido: 0
};

export const isAngulosEmpty = () => ({
  angulo: [templateAngulo]
});

export const addAngulo = angulos => {
  let { angulo } = angulos;
  return { ...angulos, angulo: [...angulo, templateAngulo] };
};
