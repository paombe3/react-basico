import React from "react";
import { AppUI } from "./AppUI";

//const defaultTodos = [
//  { text: "Cortar cebolla", completed: true },
//  { text: "Tomar el curso de intro a react", completed: false },
//  { text: "Llorar con la llorona", completed: true },
//  { text: "LALALALALA", completed: false },
//];

function App() {
  

  return [
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />,
  ];
}

export default App;
