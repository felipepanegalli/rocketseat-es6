import { umPorSegundo } from './exercicio01';
import { Api } from './exercicio02';
import { Github } from './exercicio03';
import { buscaUsuario } from './exercicio04';

umPorSegundo();

Api.getUserInfo('felipepanegalli');

Github.getRepositories('felipepanegalli/rocketseat-javascript');

buscaUsuario('felipepanegalli');
