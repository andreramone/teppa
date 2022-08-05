export interface IHeroesListDTO {
    filter: any;
    find: any;
    map: any;
    name: string;
    email: string;
    status: string;
    created_at: string;
    length: number;
    id: string;
  }
  export interface IHeroesDTO {
    id?: number;
    name: string;
    email: string;
    cellphone: string;
    telephone: string;
    status: string;
    address: string;
    complement: string;
    neighborhood: string;
    city: string;
    uf: string;
    zipcode: string;
  }

  export interface IHeroesEdit {
    heroesEmail: any;
    setCanEdit: (value: boolean) => void;
  }
