import { client } from './client';

// to do step 1: create function to get material types
export async function getMaterialOptions() {
  const materialTypes = await client
    .from('distinct_materials')
    .select('primary_material')
    .order('primary_material', { ascending: true });
  // console.log('=======materialTypes', materialTypes);
  return materialTypes.data;
}

export async function getSecondaryMaterialOptions() {
  const secondaryMaterialTypes = await client
    .from('distinct_secondary_materials2')
    .select('secondary_material')
    .order('secondary_material', { ascending: true });
  return secondaryMaterialTypes.data;
}

// to do step 2: create getMatchingRecyclers function - get recycler results based on material type inputs
export async function getMatchingRecyclers(
  selectedPrimaryMaterial: string,
  selectedPrimaryMinimumPercentage: number | null,
  selectedSecondaryMaterial: string | null,
  selectedSecondaryMinimumPercentage: number | null,
  selectedMaterialSource: string
) {
  const matchingRecyclers = await client
    .from('recyclers')
    .select('*, materials!inner(*)')
    .eq('materials.primary_material', selectedPrimaryMaterial)
    .or(
      `secondary_material.eq.${selectedSecondaryMaterial},secondary_material.eq.Other,secondary_material.is.Null`,
      {
        foreignTable: 'materials',
      }
    )
    .lte('materials.primary_minimum_percentage', selectedPrimaryMinimumPercentage)
    .or(
      `secondary_minimum_percentage.gte.${selectedSecondaryMinimumPercentage},secondary_minimum_percentage.is.Null`,
      {
        foreignTable: 'materials',
      }
    )
    .or(
      `material_source.eq.${selectedMaterialSource},material_source.eq.Post Industrial or Post Consumer`
    )
    .order('company', { ascending: true });
  return matchingRecyclers.data;
}

export async function getAllRecyclers() {
  const recyclerResp = await client.from('recyclers').select('*');
  //to do later: add error handler here
  // console.log('=======recyclerResp', recyclerResp);
  return recyclerResp.data;
}
