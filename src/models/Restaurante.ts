class Restaurante {
  id: number
  image: string
  name: string
  description: string
  info: string[]
  rating: number

  constructor(
    id: number,
    image: string,
    name: string,
    description: string,
    info: string[],
    rating: number
  ) {
    this.id = id
    this.image = image
    this.name = name
    this.description = description
    this.info = info
    this.rating = rating
  }
}

export default Restaurante
