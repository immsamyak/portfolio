import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => (
  <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden bg-background text-primary selection:bg-primary/20 selection:text-primary">
    <Header />
    <main className="flex-grow relative z-10">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
