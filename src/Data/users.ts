import type { User } from "../Types";

export const MOCK_USERS: User[] = [
  {
    id: 'u-1',
    email: "safe@example.com",
    password: "123",
    name: "Safe Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
  },
  {
    id: 'u-2',
    email: "admin@lumina.com",
    password: "admin",
    name: "Admin User",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
  },
  {
    id: 'u-3',
    email: "hanz@lumina.com",
    password: "admin",
    name: "scar",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
  }
];