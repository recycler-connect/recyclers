import { client } from './client';

export async function getRecyclers() {
  const recyclerResp = await client.from('recyclers').select('*');
  return recyclerResp.data;
}
