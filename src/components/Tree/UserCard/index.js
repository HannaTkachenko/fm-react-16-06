import React from "react";
import { WithContextUser } from "../../HOCs";
import styles from "./UserCard.module.scss";

const UserCard = (props) => {
  const {user} = props;
  return (
    <section className={styles.container}>
      <h2>UserCard</h2>
      <h3>
        {user.fname} {user.lname}
      </h3>
      <img src={user.imgSrc} alt={user.lname} />
    </section>
  );
};

//const CardWithContextUser = WithContextUser(UserCard);

export default WithContextUser(UserCard);
