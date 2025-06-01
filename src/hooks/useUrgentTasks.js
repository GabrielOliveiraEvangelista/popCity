// src/hooks/useUrgentTasks.js
import { useQuery } from "@tanstack/react-query";
import { api } from "../service/api.js";

export function useUrgentTasks() {
  return useQuery({
    queryKey: ["urgentTasks"],
    queryFn: () => api.get("/urgentTasks").then((res) => res.data),
    staleTime: 1000 * 60 * 5, // 5 minutos
    retry: 1,
  });
}
