interface IDog {
  name: string;
  age: number;
}

interface IPower {
  power: string;
}

type DogT = IDog & IPower;

const Dog: DogT = {
  name: "Pug",
  age: 3,
  power: "5000",
};
