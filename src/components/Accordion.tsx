import Accordion from "react-bootstrap/Accordion";

interface AccordionObject {
  title: string;
  message: string;
}

interface Props {
  propArray: AccordionObject[];
}

const MyAccordion = (props: Props) => {
  return (
    <Accordion defaultActiveKey="0" data-bs-theme="dark">
      {props.propArray.map((accordion, key) => (
        <Accordion.Item eventKey={"" + key}>
          <Accordion.Header>{accordion.title}</Accordion.Header>
          <Accordion.Body>
            {accordion.message}
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default MyAccordion;
