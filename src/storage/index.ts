class LocalStorage {
  constructor(public name: string) {}

  public getLocalStorage() {
    return localStorage.getItem(this.name)
  }
  public setLocalStorage(value: any) {
    return localStorage.setItem(this.name, JSON.stringify(value))
  }
  public removeLocalStorage() {
    return localStorage.removeItem(this.name)
  }

  //sessionStorage
  public getSessionStorage() {
    return sessionStorage.getItem(this.name)
  }
  public setSessionStorage(value: string) {
    return sessionStorage.setItem(this.name, JSON.stringify(value))
  }
  public removeSessionStorage() {
    return sessionStorage.removeItem(this.name)
  }
}

const accessToken = new LocalStorage('access_token')
const userStorage = new LocalStorage('user')

export { accessToken, userStorage }
