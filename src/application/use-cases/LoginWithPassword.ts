import { AuthService } from '../../domain/entities/AuthService';

export class LoginWithPassword {
  private authService: AuthService;

  constructor(authService: AuthService) {
    this.authService = authService;
  }

  async execute(email: string, password: string): Promise<void> {
    if (!email) {
      throw new Error('Email is required.');
    }

    if (!password) {
      throw new Error('Email is required.');
    }

    await this.authService.loginWithPassword(email, password);
  }
}
