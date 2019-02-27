import axios from 'axios';

export class Api {
    static async getUserInfo(usuario) {
        try {
            const response = await axios.get(
                `https://api.github.com/users/${usuario}`
            );
            console.log(response);
        } catch (error) {
            console.warn('Erro na API: ', error);
        }
    }
}
