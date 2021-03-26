import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';
import { frontListTech, backListTech } from 'helpers';
import ContentCard from './ContentCard';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      marginTop: '20px',
      marginBottom: '10px',
      padding: '30px',
    },
    body1: {
      flexGrow: 1,
      marginTop: '10px',
      marginBottom: '10px',
      fontSize: '16px',
    },
    box: {
      [theme.breakpoints.down('sm')]: {
        display: 'block',
      },
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
        justifyContent: 'space-between',
      },
    },
  });
});
const ContentBody = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.root}>
        <Typography variant="body2" className={classes.body1} paragraph>
          Основной задачей данного проекта было создание full-stack приложения с
          реализованным функционалом авторизации.
        </Typography>
        <Divider />
        <Typography variant="body2" className={classes.body1} paragraph>
          Для достижения данной цели выполнение работы было разбито на два
          этапа. Первый этап включал в себя создание и конфигурирование проекта
          (создание клиентского приложения NextJS и серверного приложения HapiJS
          ).Также к первому этапу можно отнести запуск приложений с помощью
          Docker и конфигурация сборки приложений с использованием утилиты make.
        </Typography>
        <Divider />
        <Typography variant="body2" className={classes.body1} paragraph>
          Второй этап включал в себя реализацию функционала. На стороне
          серверного приложения это: применение MVC паттерна, работа с базой
          данных (реализация CRUD), аутентификация и авторизация пользователя.
          На стороне клиентского приложения это: реализация взаимодействия с
          использованием REST API между клиентом и сервером.
        </Typography>
        <Box className={classes.box}>
          <ContentCard
            title="FRONT-APP"
            description="Используемые технологии:"
            techList={frontListTech}
          />
          <ContentCard
            title="BACK-APP"
            description="Используемые технологии:"
            techList={backListTech}
          />
        </Box>
      </Paper>
    </>
  );
};

export default ContentBody;
