import apiClient from "./appClient";       
import type { Room } from "../models/room";

export const roomApi = {
    getAll: (): Promise<Room[]> => apiClient.get(""),
    getById: (id: string): Promise<Room> => apiClient.get(`${id}`),
    create: (item: Room) => apiClient.post("", item),
    update: (id: string, item: Partial<Room>) => apiClient.put(`/${id}`, item),
    delete: (id: string) => apiClient.delete(`${id}`),
    updateStatus: (id: string, status: string) => apiClient.put(`${id}`, status),
    updateState: (id: string, state: string) => apiClient.put(`${id}`, state)
}