import { User } from "./user-types";

export type TrainStation = { // Pulled from 383 as placholder
    Id: number
    Name: string
    Address: string
    ManagerId?: number
    Manager?: User
}