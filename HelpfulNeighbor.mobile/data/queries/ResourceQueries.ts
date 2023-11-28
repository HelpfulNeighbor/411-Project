import api from "../../api/config";
import { HoursOfOperation } from "../types/HoursOfOpTypes";
import { Resource } from "../types/ResourceTypes";


export interface SearchResult {
  resource: Resource;
  hoursOfOperation?: HoursOfOperation[] | null;
}

export interface SearchResults {
  resources: SearchResult[];
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
      // Transform the data into the expected structure
      const transformedData: SearchResult[] = data.map((item: any) => ({
        resource: {
          ResourceId: item.resourceId,
          Name: item.name,
          City: item.city,
          Address: item.address,
          AdditionalDetails: item.additionalDetails,
          Parish: item.parish,
          PhoneNumber: item.phoneNumber,
          Website: item.website,
          ResourceType: item.resourceType,
          Latitude: item.latitude,
          Longitude: item.longitude,
        },
        hoursOfOperation: item.hoursOfOperation.map((hours: any) => ({
          HoursId: hours.hoursId,
          ResourceId: hours.resourceId,
          DayOfWeek: hours.dayOfWeek,
          OpenTime: hours.openTime,
          CloseTime: hours.closeTime,
        })),
      }));

      return { resources: transformedData };
    } else {
      throw new Error('Failed to fetch search results');
    }
  } catch (error) {
    console.error('Error while fetching search results:', error);
    return { resources: [] };
  }
}
