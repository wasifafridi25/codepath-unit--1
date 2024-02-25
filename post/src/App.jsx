import "./App.css";
import Post from "./components/Post";

function App() {
  const name = "Wasif";
  const description = "I want to learn the power of students";
  const likes = "0";

  const stduents = [
    {
      name: "Suzan",
      description: "Lorem ipsum",
      likes: "3112",
    },
    {
      name: "Wasif",
      description: "Lorem ipsum",
      likes: "112",
    },
    {
      name: "Arina",
      description: "Lorem ipsum",
      likes: "100",
    },
  ];
  return (
    <>
      <h1>Welcome to Web102</h1>
      <h2>Tell me what you are most excited about?</h2>
      {/* <Post
        name={stduents[0].name}
        description={stduents[0].description}
        likes={stduents[0].likes}
      />
      <Post
        name={stduents[1].name}
        description={stduents[1].description}
        likes={stduents[1].likes}
      />
      <Post
        name={stduents[2].name}
        description={stduents[2].description}
        likes={stduents[2].likes}
      /> */}
      {
        stduents.map((student, i) => {
          return (
            <Post name={student.name} key={i} description={student.description} likes={student.likes}/>
          )
        })
      }
    </>
  );
}

export default App;
