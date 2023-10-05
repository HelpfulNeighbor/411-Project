import axios from "axios";

export const BaseUrl = axios.create(
    {
        baseURL:"https://helpful-neighbor.database.windows.net/api",
        headers: {
            Accept: "application/json"
        }
    }
  )
  