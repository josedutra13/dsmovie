//Caso não haja uma URL vinda do backend, vai ser pega a URL local
export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';
