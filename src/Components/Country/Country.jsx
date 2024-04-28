import { useLoaderData } from "react-router-dom";

const Country = () => {
  const country = useLoaderData();
  console.log(country);
  return (
    <div>
      <h3>country</h3>
    </div>
  );
};

export default Country;
