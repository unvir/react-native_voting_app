export default class BaseAPI {
  protected readonly endpoint: string;
  protected readonly host: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
    this.host = 'http://37.46.134.71:3000/';
  }

  protected get(address: string): Promise<unknown> {
    return this.makeRequest('GET', address);
  }

  protected post(address: string, body: object): Promise<unknown> {
    return this.makeRequest('POST', address, body);
  }

  protected put(address: string, body: object): Promise<unknown> {
    return this.makeRequest('PUT', address, body);
  }

  protected delete(address: string, body: object): Promise<unknown> {
    return this.makeRequest('DELETE', address, body);
  }

  private async makeRequest(method: string, address: string, body?: object): Promise<unknown> {
    const data = await fetch(this.host + this.endpoint + address, {
      body: body ? JSON.stringify(body) : '',
      headers: {
        'Content-Type': 'application/json',
      },
      method,
      mode: 'cors',
    }).then(response => response.json());

    if (data.error) {
      throw new Error(data.error);
    }

    return data;
  }
}
