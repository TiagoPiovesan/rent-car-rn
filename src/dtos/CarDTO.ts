export interface CarDTO {
  id: String,
  brand: String,
  name: String,
  about: String,
  rent: {
    period: String,
    price: number
  },
  fuel_type: String,
  thumbnail: String,
  accessories: {
    type: String,
    name: String
  }[],
  photos: []
}
