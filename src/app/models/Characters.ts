export interface Characters {
  id?: string | number;
  name: string;
  status: string;
  species: string;
  gender: string;
  location: {
    name: string;
  };
}
