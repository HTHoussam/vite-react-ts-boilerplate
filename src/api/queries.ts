import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import axiosInstance from "../config/axios"; // Ensure axios is the default export or correct import

/**
 * this is an example for querying data from an API
 */
const getDogsKeys = {
  fetchBreeds: () => ["dogsBreeds"],
};

const getDogsBreeds = async () => {
  try {
    const { data } = await axiosInstance.get("breeds");
    return data;
  } catch (error: any) {
    toast.error("Error fetching dog breeds: " + error.message);
    // Throw error so that react-query can handle it
    throw new Error("Error fetching dog breeds: " + error.message);
  }
};

const useGetDogsBreeds = () => {
  return useQuery({
    queryKey: getDogsKeys.fetchBreeds(),
    queryFn: getDogsBreeds,
  });
};

export default useGetDogsBreeds;
