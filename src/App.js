import Categories from "./components/Categories";
import Cart from "./components/Cart";
import Payment from "./components/Payment";

function App() {
  return (
    <div className="w-full h-screen relative">
      <main className="bg-bg-color flex justify-center gap-11 pt-14">
        <section className="w-1/2 rounded-lg bg-white shadow-md overflow-y-hidden">
          <Categories />
        </section>

        <section className="sticky top-[56px] w-1/4 h-3/4 overflow-hidden rounded-lg bg-white shadow-md hidden md:block ">
          <Cart />
        </section>
      </main>
      <aside className="h-1/8 absolute py-6 right-24 lg:right-36 w-1/4 hidden md:block">
        <Payment />
      </aside>
    </div>
  );
}

export default App;
