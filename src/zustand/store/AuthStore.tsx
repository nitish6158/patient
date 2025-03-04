import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { getUserById, createUser, updateUser, deleteUser } from '../api/AuthApiServices';
// User State Interface
interface UserState {
    language:string;
  user: any | null;                  // Store user data
  loading: boolean;                  // Loading state
  error: string | null;              // Error message
  fetchUser: (id: number) => void;   // Function to fetch user by ID
  addUser: (data: object) => void;   // Function to create a new user
  editUser: (id: number, data: object) => void; // Function to update user
  removeUser: (id: number) => void;  // Function to delete a user
  clearUser: () => void;   
  addlanguage:(data:string)=>void;          // Clear user data
}

// Zustand Store with API Logic
const AuthStore = create<UserState>()(
  devtools((set) => ({
    user: null,
    loading: false,
    error: null,
    language:"EN",
    // Fetch User by ID
    fetchUser: async (id: number) => {
      set({ loading: true, error: null });
      try {
        const userData = await getUserById(id);
        set({ user: userData, loading: false });
      } catch (error) {
        set({ error: 'Failed to fetch user', loading: false });
      }
    },

    // Create User
    addlanguage: async (data: string) => {
      set({ language: data });
      
    },
    addUser: async (data: object) => {
      set({ loading: true, error: null });
      try {
        const newUser = await createUser(data);
        set({ user: newUser, loading: false });
      } catch (error) {
        set({ error: 'Failed to create user', loading: false });
      }
    },

    // Update User
    editUser: async (id: number, data: object) => {
      set({ loading: true, error: null });
      try {
        const updatedUser = await updateUser(id, data);
        set({ user: updatedUser, loading: false });
      } catch (error) {
        set({ error: 'Failed to update user', loading: false });
      }
    },

    // Delete User
    removeUser: async (id: number) => {
      set({ loading: true, error: null });
      try {
        await deleteUser(id);
        set({ user: null, loading: false });
      } catch (error) {
        set({ error: 'Failed to delete user', loading: false });
      }
    },

    // Clear User
    clearUser: () => set({ user: null }),
  }), { name: 'UserStore' })
);

export default AuthStore;
