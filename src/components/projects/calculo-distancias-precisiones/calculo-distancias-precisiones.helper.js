export const changeValue = (distancia, event) => {
  let { name, value } = event.target;
  return { ...distancia, [name]: value };
};
