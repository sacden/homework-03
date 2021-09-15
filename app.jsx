import React, { useState } from "react";
import Users from "./components/users";
import api from "./api";

const App = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers(users.filter((item, index) => item._id !== userId));
    };
    const renderPhrase = (number) => {
        if (number > 1 && number < 5) {
            return "человека тусанут";
        } else {
            return "человек тусанет";
        }
    };
    const changeColorButton = (number) => {
        return number > 0 ? "primary" : "danger";
    };
    return (
        <div className="container-sm">
            <Users
                users={users}
                handleDelete={handleDelete}
                renderPhrase={renderPhrase}
                changeColorButton={changeColorButton}
            />
        </div>
    );
};

export default App;
