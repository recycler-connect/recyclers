import { client, checkError } from './client';

export async funtion getRecyclersBasedOnMaterial() {
    const resp = await client.from('materials').select('*');
    return checkError(resp);
};