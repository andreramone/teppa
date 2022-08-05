import axios, { AxiosResponse } from "axios";
import api from ".";


export const getHero= async (heroId: string): Promise<any> => {
  try {
    const response: AxiosResponse = await api.get(`hero/${heroId}`);
    return response.data;
  } catch (err) {
    console.log(err)
  }
}

export const allHeroes = async (): Promise<any> => {
  const response: AxiosResponse = await api.get('heroes');
    return response.data;
}

export const updateHeroes = async (heroId: string, heroes: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api.put(`/hero/${heroId}`, heroes,  {
      headers: {
        'Content-Type': 'application/json'
      },
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const createHero = async (heroes: any): Promise<any> => {
  debugger;
  const response: AxiosResponse = await api.post(`/hero`, heroes,  {
    headers: {
      'Content-Type': 'application/json'
    },
  })

  return response.data
}
