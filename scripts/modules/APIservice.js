const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '33992f7280a68e9ecef7fdb613632d69';

export const fetchWeather = async (city) => {
    try {
        const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`);
        if (!response.ok) {
            throw new Error('Ошибка запроса');
        }
        const data = await response.json();
        console.log(data);
        return { success: true, data };
    }
    catch (err) {
        return {success: false, err};
    }

}