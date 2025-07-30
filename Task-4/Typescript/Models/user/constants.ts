import { IUser } from "./types"; 

export const initialUsers: IUser[] = [
  {
    id: "u1",
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 28,
    role: "admin",
  },
  {
    id: "u2",
    name: "Bob Smith",
    email: "bob.smith@example.com",
    age: 35,
    role: "moderator",
  },
  {
    id: "u3",
    name: "Charlie Davis",
    email: "charlie.d@example.com",
    age: 22,
    role: "user",
  },
] as const;
