import { client } from './client';

// to do step 1: create function to get material types
export async function getMaterialOptions() {
  const materialTypes = await client
    .from('distinct_materials')
    .select('primary_material')
    .order('primary_material', { ascending: true });
  console.log('materialTypes', materialTypes);
  return materialTypes.data;
}

// to do step 2: create getMatchingRecyclers function - get recycler results based on material type inputs

export async function getAllRecyclers() {
  const recyclerResp = await client.from('recyclers').select('*');
  //to do later: add error handler here
  return recyclerResp.data;
}
