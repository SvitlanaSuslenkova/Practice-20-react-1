import "./reset.css";
import "./App.css";
import avatar from "../public/avatar-jessica.jpeg";
import Buttonlink from "./components/Buttonlink";

function App() {
  //const [count, setCount] = useState(0);
  const data = [
    {
      buttonName: "GitHub",
      linkText: "link to my GitHub",
    },
    {
      buttonName: "Frontend Mentor",
      linkText: "link to my Frontend Mentor",
    },
    {
      buttonName: "LinkedIn",
      linkText: "link to my LinkedIn",
    },
    {
      buttonName: "Twitter",
      linkText: "link to my Twitter",
    },
    {
      buttonName: "Instagram",
      linkText: "link to my Instagram",
    },
  ];

  return (
    <>
      <main>
        <img src={avatar} className="avatar" alt="photo" />
        <h1 className="h1className">Jessica Randall</h1>
        <h2 className="h2className">London, United Kingdom</h2>
        <h3 className="h3className">
          &ldquo;Front-end developer and avid reader.&rdquo;
        </h3>
        <section>
          <Buttonlink
            buttonName={data[0].buttonName}
            linkText={data[0].linkText}
          />
          <Buttonlink
            buttonName={data[1].buttonName}
            linkText={data[1].linkText}
          />
          <Buttonlink
            buttonName={data[2].buttonName}
            linkText={data[2].linkText}
          />
          <Buttonlink
            buttonName={data[3].buttonName}
            linkText={data[3].linkText}
          />
          <Buttonlink
            buttonName={data[4].buttonName}
            linkText={data[4].linkText}
          />
        </section>
      </main>
    </>
  );
}

export default App;
