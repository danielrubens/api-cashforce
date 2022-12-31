const httpError = (object, error) => {
  for (let i = 0; i <= Object.values(object).length; i++) {
    if (Object.values(object)[i] === error) return Object.keys(object)[i]
  }
}

export default httpError
