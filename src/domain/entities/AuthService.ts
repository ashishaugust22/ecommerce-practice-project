export interface AuthService {
  loginWithPassword(email: string, password: string): Promise<void>;
}
