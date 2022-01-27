import { gql, useQuery } from "@apollo/client";

const Test = () => {
  const { data } = useQuery(gql`
    query {
      exemple
    }
  `);
  console.log("🚀 ~ file: Test.jsx ~ line 9 ~ Test ~ test", data);
  return <></>;
};
export default Test;
