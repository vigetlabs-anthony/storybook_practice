import React from "react";

const Card = (props) => {
  const { isLoading, username, age, location, hidden } = props;

  return !hidden ? (
    <div className="text-white p-10 bg-slate-700">
      <p>{username}</p>
      <p>{age}</p>
      <p>{location}</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
        distinctio at molestiae laborum eos veritatis tenetur esse deleniti,
        perferendis iure quis maxime. Maxime placeat modi, labore eligendi
        perspiciatis nemo molestias!
      </p>
    </div>
  ) : (
    <h1>hidden</h1>
  );
};

export default Card;
