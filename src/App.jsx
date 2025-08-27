import { CircleQuestionMark, ShieldQuestionMark } from "lucide-react";
import Button from "./components/Button/Index";

const App = () => {
  return (
    <div>
      <Button color="secondary" fill="fill" type="submit">
        <CircleQuestionMark size={16} />
      </Button>
    </div>
  );
};

export default App;
