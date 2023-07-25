import React, { useState } from "react";
import { CanceledError } from "./services/api-client";
import userService, { user } from "./services/user-service";
import useUsers from "./hooks/useUsers";
const Async = () => {
  //   const [users, setUsers] = useState<user[]>([]);
  //   const [error, setError] = useState("");
  //     const [isLoading, setLoading] = useState(true);
  const { users, errors, isLoading, setLoading, setError, setUsers } =
    useUsers();

  // POST
  const addUser = () => {
    const originalUsers = [...users];
    const newUser = { id: 0, name: "Wesley" };

    // setUsers([newUser, ...users])
    userService
      .create(newUser)
      .then((res) => setUsers([res.data, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  // DELETE
  const deleteUser = (user: user) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== u.id));
    userService.delete(user.id).catch((error) => {
      setError(error.message);
      setUsers(originalUsers);
    });
  };

  // GET
  React.useEffect(() => {
    const controller = new AbortController();
    const fetchUsers = async () => {
      const { request, cancel } = userService.getAll<user>();
      request
        .then((res) => {
          setUsers(res.data);
          setLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          //   {
          // Check if the error is not due to the abort
          setError(err.message);
          setLoading(false);
        });

      return () => cancel();
    };
  }, []);

  // UPDATE
  const updateUser = (user: user) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };
  return (
    <>
      {errors && <p className="text-danger">{errors}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={() => addUser()}>
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-danger mx-1"
                onClick={() => deleteUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-secondary"
                onClick={() => updateUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
        <li></li>
      </ul>
    </>
  );
};
