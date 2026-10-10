const API_KEY = "57977098-9d10a909c0d22216c0d89a98b";

export const fetchImages = (params) => {
  const url = `https://pixabay.com/api/?key=${API_KEY}&${params}`;

  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Помилка: ${response.statusText}`);
    }

    return response.json();
  });
};
