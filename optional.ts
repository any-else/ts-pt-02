interface IFish {
  name: string;
  isSeaFood: boolean;
  color: string;
  size?: number; // optional
}

const shark: IFish = {
  name: "White",
  isSeaFood: false,
  color: "white  and blue",
};
