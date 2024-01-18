// Phục vụ cho object
// type alias
type CarT = {
  name: string;
  price: number;
  madeIn: string;
  color: string;
};

// interface
interface ICar {
  name: string;
  price: number;
  madeIn: string;
  color: string;
}

const Car: ICar = {
  name: "Mẹc",
  price: 2000000000,
  madeIn: "Đức",
  color: "BlackRed",
};
console.log("car", Car.color);
