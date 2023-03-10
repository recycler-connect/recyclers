import { client } from './client';

export async function getRecyclers() {
  const data = await client.from('recyclers').select('*');
  return data;
}
