import {
  GoBell,
  GoCodeOfConduct,
  GoCloud,
  GoCopilot,
  GoFileZip,
} from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <>
      <div>
        <Button primary rounded onClick={() => console.log("Click!!")}>
          <GoBell />
          First
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCodeOfConduct />
          Second
        </Button>
      </div>
      <div>
        <Button success rounded outline>
          <GoCloud />
          Third
        </Button>
      </div>
      <div>
        <Button warning>
          <GoCopilot />
          Fourth
        </Button>
      </div>
      <div>
        <Button danger rounded>
          <GoFileZip />
          Fifth
        </Button>
      </div>
    </>
  );
}

export default ButtonPage;
