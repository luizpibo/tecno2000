export default function Home() {
  return (
    <main>
      <div className="flex min-h-screen justify-between">
        <div className="flex flex-col w-full sm:w-1/3 md:w-1/2 gap-5 justify-center pl-8 pr-12 z-10">
          <h1 className="text-6xl font-bold">Deixe seu escritório mais moderno</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            praesentium reprehenderit tempore, dicta debitis assumenda obcaecati
            odit odio possimus aut quia. Reprehenderit blanditiis qui
            perspiciatis quos, provident quasi facere sed!
          </p>
        </div>
        <div className="w-full md:w-5/12">
          <div className="h-full w-full bg-gradient-to-t from-slate-900 to-slate-700 shadow-slate-900 shadow-inner " style={{	borderBottomLeftRadius: "15rem"}}></div>
        </div>
      </div>
    </main>
  );
}
