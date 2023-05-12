import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id:'1',
      label: "Can i use React on a project?",
      content:
        "You can React on a any project you want.You can React on a any project you want.You can React on a any project you want.You can React on a any project you want.",
    },
    {
      id:'2',
      label: "Can i use Js on a project?",
      content:
        "You can React on a any project you want.You can React on a any project you want.You can React on a any project you want.You can React on a any project you want.",
    },
    {
      id:'3',
      label: "Can i use CSS on a project?",
      content:
        "You can React on a any project you want.You can React on a any project you want.You can React on a any project you want.You can React on a any project you want.",
    },
  ];

  return (
    <>
      <Accordion items={items} />
    </>
  );
}

export default AccordionPage;
