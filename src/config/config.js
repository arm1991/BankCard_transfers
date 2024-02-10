import background_image_1 from "../assets/page-background.png";
import background_image_2 from "../assets/gold_mastercard.png";
import background_image_3 from "../assets/reverse.png";

export const images = {
  root_background: background_image_1,
  card_background: background_image_2,
  reverse_background: background_image_3,
};

export const data = [
  {
    id: 1,
    name: "user",
    surname: "user",
    card_number: "1234123412341234",
    valid_thru_month: "10",
    valid_thru_year: "28",
    cvv: 123,
    balance: 10000,
  },
  {
    id: 2,
    name: "user",
    surname: "user",
    card_number: "5678567856785678",
    valid_thru_month: "08",
    valid_thru_year: "29",
    cvv: 456,
    balance: 8000,
  },
  {
    id: 3,
    name: "user",
    surname: "user",
    card_number: "3456345634563456",
    valid_thru_month: "11",
    valid_thru_year: "27",
    cvv: 789,
    balance: 1000,
  },
];
