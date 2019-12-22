import BaseAPI from './BaseAPI';

class AuthAPI extends BaseAPI {
  constructor() {
    super('auth/');
  }

  public login(login: string, password: string): Promise<IAuthLoginData> {
    return this.post('login', {
      login,
      password,
    }) as Promise<IAuthLoginData>;
  }
}

export default new AuthAPI();
