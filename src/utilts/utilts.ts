export interface Task {
    id: number;
    name: string;
    status: 'Новая' | 'В работе' | 'Завершена';
    date: string;
  }

export const saveToLocalStorage = (key: string, value: any) => {
    try {
        const item = JSON.stringify(value);
        localStorage.setItem(key, item);
    } catch (error) {
        console.error("Error:", error);
    }
};

export const loadFromLocalStorage = <T>(key: string): T | null => {
    try {
        const item = localStorage.getItem(key);
        if (item === null) return null;
        return JSON.parse(item);
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
};
