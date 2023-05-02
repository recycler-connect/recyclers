import { client } from './client';

// to do step 1: create function to get material types
export async function getMaterialOptions() {
  const materialTypes = await client
    .from('distinct_materials_v2_0')
    .select('primary_material')
    .order('primary_material', { ascending: true });
  // console.log('=======materialTypes', materialTypes);
  return materialTypes.data;
}

export async function getSecondaryMaterialOptions() {
  const secondaryMaterialTypes = await client
    .from('distinct_secondary_materials_v2_0')
    .select('secondary_material')
    .not('secondary_material', 'is', null)
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
    .from('recyclers_v2')
    .select('*, materials_v2!inner(*)')
    .or(
      `primary_material.eq.${selectedPrimaryMaterial},primary_material.eq.More than one Primary`,
      {
        foreignTable: 'materials_v2',
      }
    )
    .or(`secondary_material.eq.${selectedSecondaryMaterial},secondary_material.is.Null`, {
      foreignTable: 'materials_v2',
    })
    .or(
      `primary_minimum_percentage.lte.${selectedPrimaryMinimumPercentage},primary_material.eq.More than one Primary`,
      {
        foreignTable: 'materials_v2',
      }
    )
    .or(
      `secondary_minimum_percentage.gte.${selectedSecondaryMinimumPercentage},secondary_minimum_percentage.is.Null`,
      {
        foreignTable: 'materials_v2',
      }
    )
    .or(
      `material_source.eq.${selectedMaterialSource},material_source.eq.Post Industrial or Post Consumer`
    )
    .order('company', { ascending: true });
  return matchingRecyclers.data;
}

export async function getAllRecyclers() {
  const recyclerResp = await client.from('recyclers_v2').select('*');
  //to do later: add error handler here
  // console.log('=======recyclerResp', recyclerResp);
  return recyclerResp.data;
}

export async function inputUserSelection(
  selectedPrimaryMaterial,
  selectedPrimaryMinimumPercentage,
  selectedSecondaryMaterial,
  selectedSecondaryMinimumPercentage,
  selectedMaterialSource,
  selectedWeight,
  selectedWeightUnit,
  selectedUserGroup,
  selectedZip
) {
  const { data, error } = await client
    .from('user_inputs')
    .insert({
      primary_material: selectedPrimaryMaterial,
      primary_material_percentage: selectedPrimaryMinimumPercentage,
      secondary_material: selectedSecondaryMaterial,
      secondary_material_percentage: selectedSecondaryMinimumPercentage,
      material_source: selectedMaterialSource,
      weight: selectedWeight,
      weight_unit: selectedWeightUnit,
      user_group: selectedUserGroup,
      zip: selectedZip,
    });
  if (error) {
    throw Error;
  }
  return data;
}
