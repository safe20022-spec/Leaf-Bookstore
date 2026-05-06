import { MOCK_USERS } from '../Data/users';
interface userData {
    name: string;
    email: string;
    password: string;
}
export const authService = {
  async checkUserExists(email: string): Promise<boolean> {
    // get registeredUsers from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
    // Join registeredUsers With The Array That In Our Code
    const allUsers = [...MOCK_USERS, ...registeredUsers];
    return allUsers.some(u => u.email === email);
  },

  async signUp(userData: userData) {
    // Network delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const exists = await this.checkUserExists(userData.email);
    if (exists) {
      throw new Error("This email is already registered");
    }

    const registeredUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
    const newUser = { 
      ...userData, 
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.name}` 
    };
    
    registeredUsers.push(newUser);
    // Add The Updated Version Of registeredUsers To localStorage
    localStorage.setItem('registered_users', JSON.stringify(registeredUsers));
      const { password: _, ...safeUserData } = newUser;
    return { success: true, data: safeUserData };
  },

  async login(email: string, password: string){
    // Network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    const registeredUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
    const allUsers = [...MOCK_USERS, ...registeredUsers];
    const user = allUsers.find(u => u.email === email);
    if(!user) throw new Error("User Is Not Found");
    if (user.password !== password) throw new Error("Email or password incorrect");
    const { password: _, ...safeUserData } = user;
    return {success: true, data: safeUserData};
  }
};