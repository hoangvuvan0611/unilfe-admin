export interface Post {
    id: string,
    title: string,
    body: string,
    price: string,
    createdBy: string, 
    state: string,
    createdAt: Date,
    updatedAt: Date,
    images: string[]
}