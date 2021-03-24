import { Container } from '@material-ui/core';
import NavMenu from 'components/Common/NavMenu';
import Content from './Content';

const MainPageComponent = () => {
  return (
    <>
      <Container maxWidth="xl" disableGutters>
        <NavMenu />
        <Container maxWidth="lg" disableGutters>
          <Content />
        </Container>
      </Container>
    </>
  );
};

export default MainPageComponent;
