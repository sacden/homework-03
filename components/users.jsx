import React, { useState, useEffect } from "react";
import Pagination from "./pagination";
import { paginate } from "../utils/paginate";
import User from "./user";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import SearchStatus from "./searchStatus";
import api from "../api";

const Users = ({
    users: allUsers,
    handleDelete,
    changeColorButton,
    renderPhrase
}) => {
    const pageSize = 2;

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);

    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const [professions, setProfession] = useState();
    const [selectedProf, setSelectedProf] = useState();

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };
    const filteredUsers = selectedProf
        ? allUsers.filter((user) => user.profession === selectedProf)
        : allUsers;
    const count = filteredUsers.length;
    const userCrop = paginate(filteredUsers, currentPage, pageSize);
    const clearFilter = () => {
        setSelectedProf();
    };
    return (
        <div className="d-flex flex-column">
            <SearchStatus
                length={count}
                changeColorButton={changeColorButton}
                renderPhrase={renderPhrase}
            />

            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessionSelect}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        Очистить
                    </button>
                </div>
            )}

            {allUsers.length >= 1 ? (
                <div className="d-flex flex-column">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Качества</th>
                                <th scope="col">Профессия</th>
                                <th scope="col">Количество встреч</th>
                                <th scope="col">Оценка</th>
                                <th scope="col">Избранное</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="user">
                            {userCrop.map((user) => (
                                <User
                                    user={user}
                                    key={user._id}
                                    handleDelete={handleDelete}
                                    {...user}
                                />
                            ))}
                        </tbody>
                    </table>
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            onPageChange={handlePageChange}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};
Users.propTypes = {
    users: PropTypes.array.isRequired,
    currentPage: PropTypes.number,
    pageSize: PropTypes.number,
    handleDelete: PropTypes.func.isRequired,
    changeColorButton: PropTypes.func,
    renderPhrase: PropTypes.func
};
export default Users;
