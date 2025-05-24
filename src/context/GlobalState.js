import React, { useState } from "react";

import MyContext from "./MyContext";

const GlobalState = ({ children }) => {
  // user inputs
  const [userData, setUserData] = useState({
    key: "",
    name: "",
    age: "",
    DOB: "",
    gender: "",
    food: "",
    hobbies: "",
  });

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isViewMode, setIsViewMode] = useState(false);

  const [usersList, setUsersList] = useState(
    JSON.parse(localStorage.getItem("usersList")) ?? []
  );

  const addUser = (user) => {
    setUsersList(usersList.concat({ ...user, key: Date() }));
    localStorage.setItem(
      "usersList",
      JSON.stringify(usersList.concat({ ...user, key: Date() }))
    );
  };

  const deleteUser = (key) => {
    const filteredUsers = usersList.filter((currUser) => currUser.key !== key);
    setUsersList(filteredUsers);
    localStorage.setItem("usersList", JSON.stringify(filteredUsers));
  };

  return (
    <MyContext.Provider
      value={{
        addUser,
        deleteUser,
        usersList,
        isFormOpen,
        setIsFormOpen,
        isViewMode,
        setIsViewMode,
        userData,
        setUserData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default GlobalState;