const getMedia = async ({lecturas, media,...otherData}) => {
  let sumDist = 0
  lecturas.forEach(lectura => sumDist += Number(lectura.x))  
  let newMedia = sumDist/lecturas.length
  return {lecturas, media:newMedia, ...otherData}
}

const getErrorResidual = ({lecturas, media,sum, ...otherData})=>{
  let newSum = {v:0,v2:0}
  let newLecturas = []
  
  lecturas.map((lectura) => {
    let v = Number(lectura.x) - Number(media)
    let v2 = Math.pow(v,2)
    newLecturas.push({
      x: lectura.x,
      v: v,
      v2: v2,
    })
    newSum.v += v
    newSum.v2+=v2
    return true
  })
  return {lecturas:newLecturas,media,sum:newSum,...otherData}
}

const getErrorProbableMedia = async ({lecturas,sum,ro,...otherData}) =>{
  let numeroLecturas = lecturas.length
  let newRo = 0.6745*Math.sqrt(sum.v2 / (numeroLecturas*(numeroLecturas-1)))
  
  return { lecturas,sum,ro:newRo,...otherData }
}

const getPrecision = async ({media,p,ro,...otherData}) => {
  let newP = media/ro
  return { media,p:newP,ro,...otherData }
}

const medicionCinta = async lecturas => {
  const media = await getMedia(lecturas)
  const errorResidual = await getErrorResidual(media)
  const errorProbableMedia = await getErrorProbableMedia(errorResidual)
  const precision = await getPrecision(errorProbableMedia)
  return precision
}

export default medicionCinta