// // List of commands that require API calls


import { getQuote } from '../api';
import { getWeather } from '../api';


export const quote = async (args: string[]): Promise<string> => {
  const data = await getQuote();
  return data.quote;
};

