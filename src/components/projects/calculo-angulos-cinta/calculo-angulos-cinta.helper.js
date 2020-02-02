const changePoints = (angulo, value, i) => {
  let { points, ...otherAngulo } = angulo;
  return {
    points: points.map((point, idx) => (i === idx ? value : point)),
    ...otherAngulo
  };
};

export const changeValues = (ang, event, index) => {
  let { name, value } = event.target;
  let isNumber = !isNaN(Number(value));
  switch (name) {
    case "point0":
      return ang.map((angulo, i) =>
        i === index ? changePoints(angulo, value, 0) : angulo
      );
    case "point1":
      return ang.map((angulo, i) =>
        i === index ? changePoints(angulo, value, 1) : angulo
      );
    case "radio":
    case "cuerda":
      return isNumber
        ? ang.map((angulo, i) =>
            i === index ? { ...angulo, [name]: value } : angulo
          )
        : ang;

    default:
      return ang.map((angulo, i) =>
        i === index ? { ...angulo, [name]: value } : angulo
      );
  }
};
