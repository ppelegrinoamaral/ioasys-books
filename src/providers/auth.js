import React, { useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
  const [login, setLogin] = useState({
    email: "",
    senha: "",
    token: ""
  });

  const [books, setBooks] = useState({
      data: []
  })

  return <AuthContext.Provider value={{ login, setLogin, books, setBooks}}>{props.children}</AuthContext.Provider>;
};
