export const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);

    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Помилка при збереженні данних сховища", error);
  }
};

export const load = (key) => {
  try {
    const serializedState = localStorage.getItem(key);

    if (serializedState === null) {
      return undefined;
    } else {
      return JSON.parse(serializedState);
    }
  } catch (error) {
    console.error("Помилка при завантаженні данних сховища", error);
  }
};

export const remove = (key) => {
  try {
    const serializedState = localStorage.removeItem(key);
  } catch (error) {
    console.error("Помилка при видаленні данних сховища", error);
  }
};

export const clear = () => {
  try {
    const serializedState = localStorage.clear();
  } catch (error) {
    console.error("Помилка при очищенні сховища", error);
  }
};
