import React, { FormEvent, useRef } from "react";
import "../index.css";
import { FieldValue, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// zod.dev
const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  age: z
    .number({ invalid_type_error: "Age field is required" })
    .min(18, { message: "age must be 18 and above" }),
});

type FormData = z.infer<typeof schema>;
// interface FormData {
//   name: string;
//   age: number;
// }

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  //   console.log(errors.age?.type);
  const onSubmit = (data: FieldValues) => console.log(data);
  //   const [person, setPerson] = React.useState({
  //     name: "",
  //     age: "",
  //   });
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = { name: "", age: 0 };
  //   const handleSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     console.log("submitted");
  //   };
  //   if (nameRef.current !== null) person.name = nameRef.current.value;
  //   if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
  //   console.log(person);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          //   onChange={(event) =>
          //     setPerson({ ...person, name: event.target.value })
          //   }
          //   value={person.name}
          //   ref={nameRef}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          //   ref={ageRef}
          {...register("age", { valueAsNumber: true })}
          //   onChange={(event) =>
          //     setPerson({ ...person, age: parseInt(event.target.value) })
          //   }
          //   value={person.age}
          id="age"
          type="number"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
