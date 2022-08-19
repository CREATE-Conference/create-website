import type { NextPage } from 'next';
import Button from '../components/UI/Button';

const Page404: NextPage = () => {
  return (
    <div className="h-screen-trick grid w-screen place-content-center px-2">
      <div className="-mt-16 text-center">
        <h1 className="gradient-text gradient mb-3 text-8xl font-bold xs:text-[160px] md:mb-12 md:text-[256px]">
          404
        </h1>
        <p className="mb-16 text-lg text-green-1 md:mb-24 md:-mt-8 md:text-2xl">
          Sorry! The page you are looking for doesn&apos;t exist.
        </p>
        <Button type="primary" purpose="route" link="/" mobileFullWidth={false}>
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default Page404;
