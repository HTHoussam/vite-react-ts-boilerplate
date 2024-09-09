import { useState } from "react";
import { useTranslation } from "react-i18next";
import useGetDogsBreeds from "./api/queries";

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();
  const { data: fetchedData } = useGetDogsBreeds();
  console.log("fetchedData", fetchedData);
  return (
    <>
      <div className="container">
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>
          {t("first.translation")}
        </button>
      </div>
    </>
  );
}

export default App;

