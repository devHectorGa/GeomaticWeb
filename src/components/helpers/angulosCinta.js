export const decToDeg = dec => {
  var str = "";
  var deg = 0,
    mnt = 0,
    sec = 0;
  dec = Math.abs(dec);
  deg = Math.floor(dec);
  dec = (dec - Math.floor(dec)) * 60;
  mnt = Math.floor(dec);
  dec = (dec - Math.floor(dec)) * 60;
  sec = Math.floor(dec * 100) / 100;
  str += deg + " " + mnt + "' " + sec + '"';
  return str;
};

export const degToDec = str => {
  var deg = 0;
  var regDigit = ".0123456789";
  var word = "";
  var found;
  var pond;

  for (var n = 1; n <= 3; n++) {
    pond = 1; //ponderability, divide by 60 or 3600
    found = false;
    for (var i = 0; i < str.length; i++)
      if (regDigit.indexOf(str.charAt(i)) !== -1) {
        found = true;
        break;
      }
    if (!found) return deg; // no more digits?

    str = str.substring(i, str.length); // left trimming
    //find word end
    for (i = 0; i < str.length; i++)
      if (regDigit.indexOf(str.charAt(i)) === -1) {
        switch (str.charAt(i)) {
          case "'":
            pond = 60;
            break;
          case '"':
            pond = 3600;
            break;
          default:
            break;
        }
      }
    word = str.substring(0, i);
    str = str.substring(i, str.length); //left trim
    //find the degree type: deg, minute or second
    if (pond === 1) {
      if (n === 2) pond = 60;
      if (n === 3) pond = 3600;
    }
    word === "" ? (deg = 0) : (deg += parseFloat(word) / pond);
  }
  return deg;
};

// const gradosARadianes = deg => (deg * Math.PI) / 180.0;
const radianesAGrados = deg => (deg * 180) / Math.PI;

const getAngulo = async angulo => {
  return angulo.map(({ radio, cuerda, ...otherAng }, idx) => {
    let gradeInRadians = 2 * Math.asin(Number(cuerda) / (2 * Number(radio)));
    let gradeInDecimal = radianesAGrados(gradeInRadians);
    return {
      ...otherAng,
      radio,
      cuerda,
      anguloMedido: gradeInDecimal
    };
  });
};

export const medicionAngulos = async angulos => {
  const angulo = await getAngulo(angulos);
  return angulo;
};
