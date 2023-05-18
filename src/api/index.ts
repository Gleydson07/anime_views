import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
})

export const apiKey = process.env.NEXT_PUBLIC_API_KEY;