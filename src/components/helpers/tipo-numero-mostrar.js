const tipoNumeroMostrar = (num) => {
  if(Number(num)){
    if( (-1<num&&num<-0.001) || (0<num&&num<0.001) ){
      return num.toExponential(2)
    }else{
      return num.toFixed(3)
    }
  }else {
    return 'Pendiente'
  }
}

export default tipoNumeroMostrar