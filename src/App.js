import Categories from "./components/Categories";
import Payment from "./components/Payment";

function App() {
  return (
    <div className="pt-24 w-full">
      <main className="bg-bg-color flex justify-center gap-11  h-screen pt-14">
        <section className="w-1/2 rounded-md bg-white shadow-md overflow-y-hidden">
          <Categories />
        </section>
        <section className="w-1/4 h-3/4 overflow-hidden rounded-md bg-white shadow-md ">
          <Payment />
        </section>
      </main>
    </div>
  );
}

export default App;
