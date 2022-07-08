import usuarios from '../data/usuarios.json';

export async function getAllUsers() {
    try {
        return usuarios;
    } catch (error) {
        console.error(error);
    }
}

export function getUser(username, password) {
    try {
        return usuarios.filter((usuario)=>{
            return usuario.login.username === username && usuario.login.password === password;
        });
    } catch (error) {
        console.error(error);
    }
}