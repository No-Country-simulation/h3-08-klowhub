export enum Role {
    Starter = "starter",
    Professional = "professional",
    Expert = "expert",
    Explorer = "explorer",
    Buyer = "buyer",
    Admin = "admin"
}

export interface UserAttributes {
    id: string;
    name: string;
    last_name: string;
    identification: string;
    email: string;
    password: string;
    image: string;
    city: string;
    role: Role;
}