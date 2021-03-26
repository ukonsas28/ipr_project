import { Container } from '@material-ui/core';
import NavMenu from 'components/Common/NavMenu';
import { FC } from 'react';

interface IProps {
  children: React.ReactNode;
}
const PageWrapper: FC<IProps> = ({ children }: IProps) => {
  return (
    <>
      <Container maxWidth="xl" disableGutters>
        <NavMenu />
        <Container maxWidth="lg" disableGutters>
          {children}
        </Container>
      </Container>
    </>
  );
};

export default PageWrapper;
