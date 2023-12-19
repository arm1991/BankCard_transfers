import background_image_1 from "../assets/page-background.png";
import background_image_2 from "../assets/card.jpg";
import background_image_3 from "../assets/reverse.png";

export const images = {
  root_background: background_image_1,
  card_background: background_image_2,
  reverse_background: background_image_3,
};

export const data = [
  {
    first_name: "user",
    last_name: "user",
    card_number: "1234123412341234",
    valid_thru: {
      month: 10,
      year: 28,
    },
    cvv: 123,
    balance: 10000,
  },
  {
    first_name: "usertwo",
    last_name: "usertwo",
    card_number: "5678567856785678",
    valid_thru: {
      month: 8,
      year: 29,
    },
    cvv: 456,
    balance: 8000,
  },
  {
    first_name: "userthree",
    last_name: "userthree",
    card_number: "3456345634563456",
    valid_thru: {
      month: 11,
      year: 27,
    },
    cvv: 789,
    balance: 1000,
  },
];
