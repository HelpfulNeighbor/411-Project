import { Resource } from "./ResourceTypes"

export type HoursOfOperation = {
    HoursId: number,
    ResourceId: Resource,
    DayOfWeek: string,
    OpenTime: string,
    CloseTime: string
}

export type GetHoursOfOperation = {
    DayOfWeek: string,
    OpenTime: string,
    CloseTime: string
}