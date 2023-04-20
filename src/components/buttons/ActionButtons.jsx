import { Button } from "flowbite-react";
import React from "react";
import ConfirmModal from "../modals/ConfirmModal";

const ActionButtons = ({ actions, data }) => {
  return (
    <>
      <div className="flex">
        {actions.map((action, i) => (
          <div className="mx-2">
            <Button key={i} size={action.size} color={action.color}>
              {action.name}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ActionButtons;
