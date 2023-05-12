import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("Click !!");
  };

  return (
    <div className="App">
      <h1>Button Page</h1>
      <div>
        <Button primary rounded outline onClick={handleClick}>
          <GoBell /> Hi there{" "}
        </Button>
      </div>

      <div>
        <Button secondary onMouseEnter={handleClick}>
          <GoCloudDownload />
          Click me!
        </Button>
      </div>

      <div>
        <Button success>
          <GoDatabase />
          Buy Ads
        </Button>
      </div>

      <div>
        <Button warning>More</Button>
      </div>

      <div>
        <Button danger rounded>
          Hide Ads Something!
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
