import api from "../../Api/config";
import { Resource } from "../Types/ResourceTypes";

export interface SavedResourceDto {
  savedResourceId: number;
  resourceId: number;
  userId: number;
  name?: string;
  city?: string;
  address?: string;
  additionalDetails?: string;
  parish?: string;
  phoneNumber?: string;
  website?: string;
  resourceType?: string;
  latitude?: number;
  longitude?: number;
}

export async function fetchSavedResources(userId: number): Promise<SavedResourceDto[]> {
  try {
    const response = await api.get(`/api/SavedResource/${userId}`);
    const data = response.data;

    if (Array.isArray(data)) {
      const transformedData: SavedResourceDto[] = await Promise.all(data.map(async (item: any) => {
        const resourceDetailsResponse = await api.get(`/api/Resource/${item.resourceId}`);
        const resourceDetails = resourceDetailsResponse.data;

        return {
          savedResourceId: item.savedResourceId,
          userId: item.userId,
          resourceId: item.resourceId,
          name: resourceDetails.name || 'N/A',
          city: resourceDetails.city || 'N/A',
          address: resourceDetails.address || 'N/A',
          additionalDetails: resourceDetails.additionalDetails || 'N/A',
          parish: resourceDetails.parish || 'N/A',
          phoneNumber: resourceDetails.phoneNumber || 'N/A',
          website: resourceDetails.website || 'N/A',
          resourceType: resourceDetails.resourceType || 'N/A',
          latitude: resourceDetails.latitude || 'N/A',
          longitude: resourceDetails.longitude || 'N/A',
        };
      }));

      return transformedData;
    } else {
      throw new Error('Invalid data format');
    }
  } catch (error) {
    console.error("Error fetching saved resources", error);
    throw error;
  }
}

export async function createSavedResource(savedResourceDto: SavedResourceDto): Promise<void> {
    try {
        await api.post("api/SavedResource", savedResourceDto);
    } catch (error) {
        console.error("Error creating saved resource", error);
        throw error;
    }
}

export async function deleteSavedResource(userId: number, resourceId: number): Promise<void> {
    try {
        await api.delete(`api/SavedResource/${userId}/${resourceId}`);
    } catch (error) {
        console.error("Error deleting saved resource", error);
        throw error;
    }
}

