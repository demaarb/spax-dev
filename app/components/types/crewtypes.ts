export type Launches = {
    id: string, 
  } 
  
  export type CrewMember = {
    id: string;
    name: string;
    agency: string;
    wikipedia: string;
    status: boolean;
    image: string;
    launches: Array<Launches>;
  };