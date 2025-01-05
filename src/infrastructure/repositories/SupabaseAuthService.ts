import { supabase } from '../../application/core/supabaseClient';
import { AuthService } from '../../domain/entities/AuthService';

export class SupabaseAuthService implements AuthService {
  async loginWithPassword(email: string, password: string): Promise<void> {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      throw new Error(error.message);
    }
  }
}
