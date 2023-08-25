//fetches products from api using useQuery
import { getProducts } from "../lib/helper";
import { useQuery } from "@tanstack/react-query";
export const useProducts = () =>
  useQuery({ queryKey: ["products"], queryFn: getProducts });
