class LocalStorage {
  constructor(public name: string) {}

  public getLocalStorage() {
    return localStorage.getItem(this.name)
  }
  public setLocalStorage(value: string) {
    return localStorage.setItem(this.name, value)
  }
  public removeLocalStorage() {
    return localStorage.removeItem(this.name)
  }

  //sessionStorage
  public getSessionStorage() {
    return sessionStorage.getItem(this.name)
  }
  public setSessionStorage(value: string) {
    return sessionStorage.setItem(this.name, value)
  }
  public removeSessionStorage() {
    return sessionStorage.removeItem(this.name)
  }
}

const accessToken = new LocalStorage('access_token')

export { accessToken }
