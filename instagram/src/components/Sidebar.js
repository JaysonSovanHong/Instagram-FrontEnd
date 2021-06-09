import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { userState } = useContext(UserContext);
  const [user, setUser] = userState;
  const [allUser, setAllUser] = useState([]);
  const showUser = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BURL}/users`);
      let data = response.data.user.filter((users) => users.id !== user.id);
      setAllUser(data);
    } catch (error) {
      console.log("can not find user");
    }
  };
  useEffect(showUser, []);

  return (
    <div className="postInfo">
      {user.name}
      <img src={user.image} width="50px" alt="user profile"></img>
      <div>
        <p>Suggestions For You</p>

        {allUser.map((users, u) => {
          return (
            <div className="postSession" key={u}>
              <Link to={`/verify${user.id}`}>
                <img src={users.image} width="50px" alt="user profile"></img>
              </Link>
              <h3>{users.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
