import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

export default function Modal(props) {

  const { open, modalHeading, modalBody, handleModal } = props;
  return (
    <Dialog open={open}>
      <DialogHeader>{modalHeading}</DialogHeader>
      <DialogBody divider>
        {modalBody}
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={() => handleModal(0)}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={() => handleModal(1)}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}