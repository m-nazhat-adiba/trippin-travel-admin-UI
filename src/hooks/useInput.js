import { useEffect, useState } from "react";

function useInput() {
  const [data, setData] = useState("");
  const handleChange = (e) => {
    setData(e.target.value);
  };

  return { data, onChange: handleChange };
}

export default useInput;
