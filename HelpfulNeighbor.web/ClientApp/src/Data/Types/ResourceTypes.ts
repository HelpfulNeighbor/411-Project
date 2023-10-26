export type Resource = {
    ResourceId: number,
    Name: string,
    City: string,
    Address: string,
    AdditionalDetails: string,
    Parish: string,
    PhoneNumber: string,
    Website: string,
    ResourceType: string,
    Latitude: number,
    Longitude: number,

}

export type GetResourcePreview = {
    Name: string,
    Latitude: number,
    Longitude: number,
}

export type GetResourceDetails = {
    ResourceType: string,
    Address: string,
    Website: string,
    PhoneNumber: string,
}

