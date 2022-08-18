import type { ReactElement } from 'react';
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';

interface PagePropsInterface {
  curPage: string;
  children: ReactElement | ReactElement[];
}

const Page = ({ curPage, children }: PagePropsInterface): ReactElement => {
  return (
    <div className="flex min-h-screen flex-col justify-between">
      <div>
        <Header curPage={curPage} />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
