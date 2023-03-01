import React from "react";
import { useList } from "@pankod/refine-core";
import {
  PieChart,
  PropertyReferrels,
  TotalRevenue,
  PropertyCard,
  TopAgent,
} from "components";
import { Box, Typography, Stack } from "@pankod/refine-mui";

const Home = () => {
    const {data, isLoading, isError } = useList({
        resource: 'properties', 
        config: {
            pagination: {
                pageSize: 5,

            }
        }
    }); 
    const latestProperties = data?.data ?? []; 
    if(isLoading) return <div>isLoading...</div>
    if(isError) return <div>Error...</div>
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for sale"
          value={333}
          series={[75, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Properties for Rent"
          value={333}
          series={[7, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Total Customers"
          value={333}
          series={[5, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
        <PieChart
          title="Total Cities"
          value={333}
          series={[5, 25]}
          colors={["#475be8", "#e4e8ef"]}
        />
      </Box>
      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrels />
      </Stack>
      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="#fcfcfc"
        display="flex"
        minWidth="100%"
        mt="25px"
      >

        <Typography fontSize='18px' fontWeight={600} color='#11142d'>Latest Properties</Typography>
        <Box
        mt={2.5}
        sx={{display: 'flex', flewWrap: 'wrap', gap: 4}}
            >
                {latestProperties.map((property) => (
                    <PropertyCard 
                        key={property._id}
                        id={property._id}
                        title={property.title}
                        location={property.location}
                        price={property.price}
                        photo={property.photo}

                    />
                ))}

            </Box>
      </Box>
    </Box>
  );
};

export default Home;
