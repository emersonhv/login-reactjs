import {API} from '../services/usuarios';
//import * as API from '../services/usuarios';

describe('funciones de consulta al json file', ()=>{
    test('get all users', () => {
        const res = API.getAllUsers();
        expect(typeof res).toBe(Array);
    });

    test('get all users', () => {
        const res = API.getUser("blackpeacock327","testibil");
        expect(typeof res).toBe(Array);
    });
});



