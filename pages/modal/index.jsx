import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { InlineWidget, useCalendlyEventListener } from "react-calendly";

function MyVerticallyCenteredModal(props) {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log("onProfilePageViewed"),
    onDateAndTimeSelected: () => console.log("onDateAndTimeSelected"),
    onEventTypeViewed: () => console.log("onEventTypeViewed"),
    onEventScheduled: (e) => console.log(e.data.payload),
  });

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      //   style={{ height: "500px" }}
    >
      <Modal.Header style={{ border: "none" }} closeButton>
        {/* <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title> */}
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}
        <InlineWidget
          hide_gdpr_banner={1}
          styles={{
            height: "550px",
          }}
          //   styles={{ minHeight: "400px" }}
          url="https://calendly.com/vishalkumar-p-s-applogiq"
        />
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}
export default MyVerticallyCenteredModal;
