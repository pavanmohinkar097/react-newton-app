function Header() {
  return <header>This is page of header</header>;
}
// <Header />

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact us</li>
        <li>View</li>
        <li>FOQ</li>
      </ul>
    </nav>
  );
};
// <Nav />

function Main() {
  return (
    <main>
      <article>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet tempore
        nostrum non repudiandae dolore tempora repellendus? Inventore beatae
        alias distinctio perferendis! In quo voluptates vel?
      </article>
      <article>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum harum
        facilis tenetur minus rem modi temporibus reprehenderit unde eaque
        cupiditate fuga quibusdam quisquam alias saepe hic ex, animi dolorem
        dicta assumenda eos aliquam ad! Inventore nostrum corporis earum culpa
        reprehenderit nihil, labore at commodi tempora repellat, temporibus quia
        tempore ea exercitationem non, magni aliquid voluptate. Libero!
      </article>
    </main>
  );
}
// <Main />

const Footer = () => {
  return (
    <footer>
      <a href="/">Go to top page</a>
      <p> hi potato</p>
    </footer>
  );
};
//<Footer />

const Button = () => {
  return <button>Re-unsable-button</button>;
};

//<Button />

function App() {
  return (
    <div>
      <Header />
      <Button />
      <Nav />
      <Main />
      <br />
      <Footer />
    </div>
  );
}
export default App;
