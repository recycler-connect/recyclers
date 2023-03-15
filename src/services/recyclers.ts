import { client } from './client';

// to do step 1: create function to get material types

// to do step 2: create getMatchingRecyclers function - get recycler results based on material type inputs

export async function getAllRecyclers() {
  const recyclerResp = await client.from('recyclers').select('*');
  //to do later: add error handler here
  return recyclerResp.data;
}
