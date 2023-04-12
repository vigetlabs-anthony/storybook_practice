import React from "react";

const Card = (props) => {
  const { isLoading, username, age, location } = props;

  return !isLoading ? (
    <div className="p-10 rounded-md capitalize w-1/2 flex justify-center shadow-lg h-[50vh] items-center">
      <div className="space-y-5">
        <p>{username}</p>
        <p>{age}</p>
        <p>{location}</p>

        {username ? (
          <p className="line-clamp-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio
            distinctio at molestiae laborum eos veritatis tenetur esse deleniti,
            perferendis iure quis maxime. Maxime placeat modi, labore eligendi
            perspiciatis nemo molestias!
          </p>
        ) : (
          <p>Log in to continue...</p>
        )}
      </div>
    </div>
  ) : (
    <div className="p-10 rounded-md capitalize w-1/2 flex justify-center shadow-lg h-[50vh] items-center">
      <p>Loading...</p>
    </div>
  );
};

export default Card;
