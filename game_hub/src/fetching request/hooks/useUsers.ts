import React from "react";
import { useState } from "react";
import userService, { user } from "../services/user-service";
import { CanceledError } from "axios";

const useUsers = () => {
  const [users, setUsers] = useState<user[]>([]);
  const [errors, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

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

  return { users, errors, setLoading, isLoading, setUsers, setError };
};

export default useUsers;
