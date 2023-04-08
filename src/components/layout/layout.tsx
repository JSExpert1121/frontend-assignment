import { PropsWithChildren } from 'react';
import { Helmet } from 'react-helmet';
import { Header } from './header';
import { Footer } from './footer';
import './layout.scss';

export const MainLayout = ({ children }: PropsWithChildren) => (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Collections</title>
        </Helmet>

        <div className='main-layout'>
            <Header />

            <main>
                {children}
            </main>

            <Footer />
        </div>
    </>
);
