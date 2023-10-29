import api from "../../Api/config";
import { HoursOfOperation } from "../Types/HoursOfOpTypes";
import { Resource } from "../Types/ResourceTypes";

export interface SearchResults {
  resources: Resource[];
  hoursOfOperation: HoursOfOperation[];
}

export async function getAllResources(){
    try{
        const {data, status} = await api.get<Array<Resource>>("/api/Resource")

        if (status === 200){
            return data;
        } else {
            throw Error("Failed to fetch resources");
        }
    } catch (error) {
        console.error("Error while fetching resources:", error);
        return;
    }
}

export async function getResourceById(id: number){
    try{
        const {data, status} = await api.get<Resource>(`/api/Resource/${id}`)

        if (status === 200){
            return data;
        } else {
            throw Error("Failed to fetch resources");
        }
    } catch (error) {
        console.error("Error while fetching resources:", error);
        return;
    }
}

export async function fetchSearchResults(
    searchQuery: string,
    filterByResourceType: boolean,
    resourceType: string,
    filterByParish: boolean,
    parish: string
  ): Promise<SearchResults> {
    try {
      const { data, status } = await api.get('/api/Resource/search', {
        params: {
          searchQuery,
          filterByResourceType,
          resourceType,
          filterByParish,
          parish,
        },
      });
  
      if (status === 200) {
        return data;
      } else {
        throw new Error('Failed to fetch search results');
      }
    } catch (error) {
      console.error('Error while fetching search results:', error);
      return { resources: [], hoursOfOperation: [] };
    }
  }
  
  
  
  
  
  

