import Card from "./card/Card";
import FormContainer from "./form-container/FormContainer";
import ContextProvider from "./context/Context";

const AddCard = () => {
  return (
    <ContextProvider>
      <Card />
      <FormContainer />
    </ContextProvider>
  );
};

export default AddCard;
