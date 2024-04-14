import { useEffect, useState } from "react";

function App() {
  const [dogImage, setDogImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((res) => {
        setDogImage(res.message);
        setIsLoading(false);
      })
  );

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  return <img src={dogImage} alt="A Random Dog" />;
}

export default App;
