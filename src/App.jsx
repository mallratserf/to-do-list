import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="relative w-screen h-screen bg-gradient-to-r from-fuchsia-950 to-yellow-20 opacity-70">
      <h1 className="text-4xl font-bold underline font-mayflower text-white flex items-center justify-center p-4">
        To-Do List
      </h1>
      <Todo />
    </div>
  );
};

export default App;
