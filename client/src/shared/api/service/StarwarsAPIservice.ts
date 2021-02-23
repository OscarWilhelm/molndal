import http from '../StarwarsAPI'

const getDataLukeSkywalker = () => {
  return http.get('/people/1')
}

const getStarWarsCharacter = (charNo: number) => {
  return http.get(`/people/${charNo}`)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getDataLukeSkywalker,
  getStarWarsCharacter
}