import { client } from './client';

export async function getRecyclers() {
  const recyclerResp = await client.from('recyclers').select('*');
  //add error handler here
  return recyclerResp.data;
}
