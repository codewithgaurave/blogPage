import React from "react";
import Form from "./Components/Form/form";
import Header from "./Components/HeaderHero/Header";
import TODOHero from "./Components/Hero/TODOCall";
import TODOList from "./Components/Todo/TODOList";
import './App.css';
function Home() {
  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={0} total_todos={0} />
      <Form />
      <TODOList todos={[]} />
    </div>
  );
}
export default Home;