

interface ISetDataToLocalStorage {
    key: string;
    value: string;
}

export const setDataToLocalStorage = ({ key, value }: ISetDataToLocalStorage) => {
    if (!key || !value) return
    try {
        window.localStorage.setItem(key, value)
    } catch (error) {
        console.log(error)
    }
}