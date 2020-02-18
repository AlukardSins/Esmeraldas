import { Emerald } from './emerald.model'

export class Worker {
  _id: String
  fullName: String
  dob: Date
  gender: String
  emeraldsMined: Array<Emerald>
}
