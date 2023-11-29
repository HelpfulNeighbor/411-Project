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
    ResourceId: number,
    Name: string,
    ResourceType: string,
    Latitude: number,
    Longitude: number,
}

export type GetResourceDetails = {
    Address: string,
    Website: string,
    PhoneNumber: string,
}

