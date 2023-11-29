import api from "../../Api/config";
import { Resource } from "../Types/ResourceTypes";
// import { UserGetDto } from "../Types/UserTypes";

export interface SavedResourceDto {
  savedResourceId: number;
  userId: number;
  resourceId: Resource;
}



export async function fetchSavedResources(userId: number): Promise<SavedResourceDto[]> {
    try {
      const response = await api.get(`/api/SavedResource/${userId}`);
      return response.data;
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

