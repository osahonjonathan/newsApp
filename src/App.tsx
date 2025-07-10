import './App.css';
import BlottIcon from './components/icons/blot';

import Home from './pages/home';

const App = () => {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-white">
      <div className="flex pt-[40px] items-center justify-center">
        <BlottIcon className="w-[100px] h-[49px] md:w-[200px] " />
      </div>

      <section className="min-h-screen  px-4 py-8">
        <div className=" mx-auto px-2 md:px-5">
          <h1 className="text-2xl sm:text-3xl lg:text-[48px] font-bold mb-8">
            News
          </h1>

          <Home />
        </div>
      </section>
    </main>
  );
};
export default App;
