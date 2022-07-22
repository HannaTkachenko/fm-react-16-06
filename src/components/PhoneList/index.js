import React from "react";
import { getPhonesJSON } from "../../api";
import { useData } from "../../hooks";

const PhoneList = () => {
  const { items: phones, error, isFetching } = useData(getPhonesJSON);
  if (isFetching) {
    return <h2>loading phone...</h2>;
  }
  if (error) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div>
      <h2>list phones:</h2>
      <ol>
        {phones.map((phone) => (
          <li key={phone.id}>{phone.name} : {phone.price}</li>
        ))}
      </ol>
    </div>
  );
};

export default PhoneList;