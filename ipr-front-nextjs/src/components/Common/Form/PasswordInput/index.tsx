import TextField from '@material-ui/core/TextField';
import { FC } from 'react';

interface IProps {
  label: string;
  setFormValue: any;
  formValue: any;
  value: string;
}
const PasswordInput: FC<IProps> = (props: IProps) => {
  const { label, setFormValue, formValue, value } = props;

  return (
    <>
      <TextField
        id={label}
        label={label}
        variant="outlined"
        type="password"
        onChange={(e) => {
          setFormValue({
            ...formValue,
            [value]: e.currentTarget.value,
          });
        }}
      />
    </>
  );
};

export default PasswordInput;
