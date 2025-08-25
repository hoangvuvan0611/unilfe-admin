import apiClient from "./appClient";       
import type { Room } from "../models/room";

export interface ApiResponseData<T> {
    data: T;
    success: boolean;
    message: string;
    total: number;
}

export const roomApi = {
    getAll: (): Promise<Room[]> => apiClient.get(""),
    getById: (id: string): Promise<ApiResponseData<Room>> => apiClient.get(`${id}`),
    create: (item: FormData): Promise<ApiResponseData<Room>> => apiClient.post("/room/create", item),
    update: (id: string, item: Partial<Room>) => apiClient.put(`/${id}`, item),
    delete: (id: string) => apiClient.delete(`${id}`),
    updateStatus: (id: string, status: string) => apiClient.put(`${id}`, status),
    updateState: (id: string, state: string) => apiClient.put(`${id}`, state)
}