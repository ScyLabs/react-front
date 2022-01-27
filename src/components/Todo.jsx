/* eslint-disable react/jsx-props-no-spreading */
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_TODO, GET_TODO_LIST } from "graphql/todo.graphql";
import { useForm } from "react-hook-form";

const Todo = () => {
  const { data, loading, refetch } = useQuery(GET_TODO_LIST);

  const [createTodo] = useMutation(CREATE_TODO);
  const { register, handleSubmit, errors } = useForm();

  console.log(errors);
  return (
    <div style={{ background: "red" }}>
      <h1>Ma liste</h1>
      {loading && <div>Chargmement en cours</div>}
      {!loading && (
        <ul>
          {data?.showList.map(({ name, value, color }) => (
            <li>
              {name} : {value} {"->"} {color}
            </li>
          ))}
        </ul>
      )}
      <div>
        <h2>Ajouter un élément à la liste</h2>
      </div>
      <form
        onSubmit={handleSubmit((values) => {
          values.value = Number(values.value);
          createTodo({
            variables: {
              input: values,
            },
          }).then(() => {
            refetch();
          });
        })}
      >
        <input
          required
          {...register("name")}
          style={{ border: "1px solid #000" }}
          type="text"
          name="name"
        />
        <input
          required
          {...register("value")}
          style={{ border: "1px solid #000" }}
          type="number"
          name="value"
        />
        <input
          required
          {...register("color")}
          style={{ border: "1px solid #000" }}
          type="text"
          name="color"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Todo;
