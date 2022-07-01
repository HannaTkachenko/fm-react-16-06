import React from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/", { replace: true });
  }, 2000);
  return <section>404, replace to home!</section>;
};

export default PageNotFound;