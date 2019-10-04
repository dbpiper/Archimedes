import { series } from 'gulp';
import path from 'path';
import terminalSpawn from 'terminal-spawn';
import ServerCommands from './config/server-commands';

import './config/loadDotenv.ts';

const _dotenvPath = path.join(__dirname, '..', '..', '.env');
const _githubGraphQlApiUrl = 'https://api.github.com/graphql';

const checkTypes = async () =>
  terminalSpawn('npx tsc -p ./tsconfig.json').promise;

const _esLint = async () => terminalSpawn('npx eslint .').promise;

const lint = series(_esLint, checkTypes);

const test = async () => terminalSpawn('npx jest').promise;

const build = () =>
  terminalSpawn(`
    npx                                     \
      babel                                 \
        .                                   \
        --ignore node_modules               \
        --extensions .ts                    \
        --out-dir dist                      \
        --delete-dir-on-start               \
  `).promise;

const testWatch = () => terminalSpawn('jest --watch').promise;

const downloadData = async () => {
  await terminalSpawn('npx gulp build').promise;

  return terminalSpawn(
    `node -r dotenv/config dist/index.js \
        dotenv_config_path=${_dotenvPath} -- --download-data`,
  ).promise;
};

const start = async () => {
  await terminalSpawn('npx gulp build').promise;

  return terminalSpawn(ServerCommands.start(_dotenvPath)).promise;
};

const startProduction = async () => {
  await terminalSpawn('npx gulp build').promise;

  return terminalSpawn(ServerCommands.startProduction(_dotenvPath)).promise;
};

const downloadGithubApiSchema = () =>
  terminalSpawn(
    `npx apollo schema:download \
      --endpoint=${_githubGraphQlApiUrl} github-schema.json \
      --header="Authorization: Bearer ${
        process.env.GITHUB_API_PERSONAL_ACCESS_TOKEN
      }"`,
  ).promise;

const generateGraphQlTypes = () =>
  terminalSpawn(`npx apollo codegen:generate \
  --localSchemaFile=github-schema.json --target=typescript \
  --includes=src/**/*.ts --tagName=gql --addTypename \
  --globalTypesFile=types/graphql-global-types.ts \
  types`).promise;

const preCommit = series(lint, test);

export {
  lint,
  test,
  build,
  testWatch,
  preCommit,
  checkTypes,
  start,
  startProduction,
  downloadData,
  downloadGithubApiSchema,
  generateGraphQlTypes,
};

export default preCommit;
