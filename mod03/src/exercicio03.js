import axios from 'axios';

export class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(
                `https://api.github.com/repos/${repo}`
            );
            console.log(response);
        } catch (error) {
            console.warn('Erro na API: ', error);
        }
    }
}
