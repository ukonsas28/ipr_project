export const baseUrl = 'http://0.0.0.0:8888';
export const firstBlockMenuData: {
  title: string;
  icon: any;
  link: string;
}[] = [
  {
    title: 'Создать нового пользователя',
    icon: 'AddCircleOutlineIcon',
    link: '/users/create',
  },
  {
    title: 'Получить пользователя по id',
    icon: 'CallReceivedIcon',
    link: '/users/get',
  },
  {
    title: 'Обновить пользователя по id',
    icon: 'AutorenewIcon',
    link: '/users/update',
  },
  {
    title: 'Удалить пользователя по id',
    icon: 'DeleteOutlineIcon',
    link: '/users/delete',
  },
  {
    title: 'Получить список всех пользователей',
    icon: 'FormatListNumberedIcon',
    link: '/users/get_all',
  },
];

export const secondBlockMenuData: {
  title: string;
  icon: any;
  link: string;
}[] = [
  {
    title: 'Login',
    icon: 'ExitToAppIcon',
    link: '/auth',
  },
  {
    title: 'Sign up',
    icon: 'LockOpenIcon',
    link: '/registration',
  },
];

export const frontListTech: { title: string; link: string }[] = [
  {
    title: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
  },
  {
    title: 'ReactJS',
    link: 'https://ru.reactjs.org/',
  },
  {
    title: 'NextJS',
    link: 'https://nextjs.org/',
  },
  {
    title: 'Redux',
    link: 'https://redux.js.org/',
  },
  {
    title: 'Redux Thunk',
    link: 'https://www.npmjs.com/package/redux-thunk',
  },
  {
    title: 'Material-UI',
    link: 'https://material-ui.com/',
  },
];

export const backListTech: { title: string; link: string }[] = [
  {
    title: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
  },
  {
    title: 'HapiJS',
    link: 'https://hapi.dev/',
  },
  {
    title: 'TypeORM',
    link: 'https://typeorm.io/#/',
  },
  {
    title: 'Postgres',
    link: 'https://www.postgresql.org/',
  },
  {
    title: 'Docker',
    link: 'https://www.docker.com/',
  },
  {
    title: 'MakeFile',
    link: 'https://ru.wikipedia.org/wiki/Makefile',
  },
];
