import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import { logo, yariga} from 'assets'; 
export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {!collapsed ?  (<h1>Dashboard</h1>): (<img src={logo} alt="logo" />)}
        
      </Link>
    </Button>
  );
};
