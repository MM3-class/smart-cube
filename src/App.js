import Categories from "./components/Categories";
import Cart from "./components/Cart";
import Payment from "./components/Payment";

function App() {
  return (
    <main className="w-full h-screen relative ">
      <div className="bg-bg-color flex justify-center gap-11 lg:pt-14">
        <section className="lg:w-1/2 sm:w-3/4 rounded-lg bg-white shadow-md overflow-y-hidden">
          <Categories />
        </section>

        <section className="relative w-1/4 h-3/4 overflow-hidden rounded-lg bg-white shadow-md hidden xl:block ">
          <Cart />
        </section>
      </div>
      <aside className="absolute py-6 right-[10%] w-[25%] hidden xl:block">
        <Payment />
      </aside>
    </main>
  );
}

export default App;
