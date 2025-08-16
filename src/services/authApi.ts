import type { LoginRequest } from "../models/dtos/loginRequest";
import type { LoginResponse } from "../models/dtos/loginResponse";
import type { RegisterRequest } from "../models/dtos/registerRequest";
import type { RegisterResponse } from "../models/dtos/registerResponse";
import apiClient from "./appClient";


export const authApit = {
    login: (data: LoginRequest): Promise<LoginResponse> => apiClient.post("", data),
    register: (data: RegisterRequest): Promise<RegisterResponse> => apiClient.post("", data),
    
}