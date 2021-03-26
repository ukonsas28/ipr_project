import React, { FC, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextInput from 'components/Common/Form/TextInput';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PasswordInput from 'components/Common/Form/PasswordInput';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme: Theme) => {
  return createStyles({
    root: {
      width: '75%',
      height: '600px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection: 'column',
      padding: '30px 0',
      [theme.breakpoints.down('sm')]: {
        width: '90%',
      },
      [theme.breakpoints.up('sm')]: {
        width: '75%',
      },
    },
    title: {
      fontSize: '20px',
    },
    btn: {
      width: '230px',
    },
  });
});

interface IProps {
  onSubmit: any;
  setFormValue: any;
  formValue: any;
}

const RegistrationForm: FC<IProps> = (props: IProps) => {
  const { onSubmit, setFormValue, formValue } = props;
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        SIGN UP
      </Typography>
      <TextInput
        label="First name"
        value="firstName"
        setFormValue={setFormValue}
        formValue={formValue}
      />
      <TextInput
        label="Second name"
        value="lastName"
        setFormValue={setFormValue}
        formValue={formValue}
      />
      <TextInput
        label="Login"
        value="login"
        setFormValue={setFormValue}
        formValue={formValue}
      />
      <PasswordInput
        label="Password"
        value="password"
        setFormValue={setFormValue}
        formValue={formValue}
      />
      <PasswordInput
        label="Repeat password"
        value="repeatPassword"
        setFormValue={setFormValue}
        formValue={formValue}
      />
      <Button
        variant="outlined"
        color="primary"
        className={classes.btn}
        onClick={onSubmit}>
        SIGN UP
      </Button>
    </Paper>
  );
};

export default RegistrationForm;
