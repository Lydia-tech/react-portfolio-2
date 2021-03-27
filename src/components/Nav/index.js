import React from 'react';

function Nav() {
    const categories = [
        {
          name: "Budget Tracker",
          description:
            "Keep track of your budget while on the go!",
        },
        { name: "Hike Now", description: "Find a trail and the weather when you are out of town!" },
        { name: "Work Day Scheduler", description: "Keep track of your tasks with this easy to use application." },
        {
          name: "SLP Goalden",
          description: "Track your students progress with this application.",
        },
      ];
      
      function categorySelected(name) {
        console.log(`${name} clicked`)
      }  

    return (
      <header>
          <h2>
    <a href="/">
      <span role="img" aria-label="cactus"> 🌵</span> Tech Art!
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      {categories.map((category) => (
     <li
      className="mx-1"
      key={category.name}
    >
      <span onClick={() => categorySelected(category.name)} >
        {category.name}
      </span>
    </li>
  ))}
    </ul>
  </nav>
  </header>
  );
}
  
  export default Nav;
