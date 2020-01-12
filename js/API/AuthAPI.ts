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

  public register(login: string, password: string, fullName: string): Promise<IAuthRegisterData> {
    return this.post('register', {
      fullName,
      login,
      password,
    }) as Promise<IAuthRegisterData>;
  }
}

export default new AuthAPI();
