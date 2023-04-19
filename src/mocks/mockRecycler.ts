import { RecyclerResultType } from '../context/RecyclerMainPage';
import Chance from 'chance';

const chance: Chance = new Chance();

export const getMockRecycler = (): RecyclerResultType => {
  return {
    acc_circ_url: chance.url(),
    comercialization_for_post_consumer: chance.string(),
    company: chance.company(),
    id: chance.natural(),
    material_source: chance.string(),
    location: chance.word(),
    output_material: chance.string(),
    primary_material_type_list: chance.string(),
    recycling_type: chance.string(),
    status: chance.string(),
  };};