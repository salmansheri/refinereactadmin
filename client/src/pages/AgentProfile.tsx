import React from "react";
import { useOne } from "@pankod/refine-core";
import { Profile } from "components";
import { useParams } from "@pankod/refine-react-router-v6";

const MyProfile = () => {
  const { id} = useParams(); 

  const { data, isLoading, isError } = useOne({
    resource: "user",
    id: id as string,
  });

  console.log(data); 
  const myProfile = data?.data ?? [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;
  return (
    <Profile
      type="My"
      name={myProfile.name}
      email={myProfile.email}
      avatar={myProfile.avatar}
      properties={myProfile.allProperties}
    />
  );
};

export default MyProfile;
