function solution(U, N) {
  return new Promise(async (resolve, reject) => {
    try {
      const [likedBrands, topBrandsforGender] = await Promise.all([
        getLikedBrands(U.id),
        getTopBrandsforGender(U.gender),
      ])
      if (!likedBrands && !topBrandsforGender) {
        return reject(new CustomError('Not enough data'))
      }
      const uniqueLikedBrands = [...likedBrands, ...topBrandsforGender]
      const uniqueBrands = [
        ...new Set(uniqueLikedBrands.map((item) => item.name)),
      ]
      if (uniqueBrands.length < N) {
        return reject(new CustomError('Not enough Data'))
      }
      // if (uniqueBrands.length < N) {
      //   return reject('Not enough Data')
      // }
      const n = uniqueBrands.slice(0, N)
      return resolve(n)
    } catch (error) {
      // return reject(new CustomError('Not enough Data'))
      return console.log(error)
    }
  })
}

solution(U, N)
