import axios from 'axios';
import UsersPageComponent from 'components/Users';
import ClosePage from 'components/ClosePage';
import { wrapper } from 'store';
import { GetServerSideProps } from 'next';
import cookies from 'next-cookies';

const UsersPage = ({ data }: any) => {
  if (data === 'NO_AUTH') {
    return <ClosePage />;
  }

  return <UsersPageComponent data={data} />;
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => {
    return async (context) => {
      const { authToken } = cookies(context);
      try {
        const { data } = await axios.get(
          `http://172.17.0.1:8888/user/users-list`,
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        );
        return { props: { data } };
      } catch (e) {
        return { props: { data: 'NO_AUTH' } };
      }
    };
  });

export default UsersPage;
