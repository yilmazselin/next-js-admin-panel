import { Button } from "flowbite-react";
import React, { useState } from "react";
import ConfirmModal from "../modals/ConfirmModal";

const ActionButtons = ({ actions, data }) => {
  const [modalVisible, setmodalVisible] = useState(0);

  const handleClickAction = (action) => {
    const actionIndex = actions.indIndex((e) => e.name === action.name);
    setmodalVisible(actionIndex);
  };

  return (
    <>
      <div className="flex">
        {actions.map((action, i) => (
          <div className="mx-2">
            <Button
              key={i}
              size={action.size}
              color={action.color}
              onClick={() => handleClickAction(action)}
            >
              {action.name}
            </Button>
          </div>
        ))}
      </div>
      <ConfirmModal
        isVisible={modalVisible === false ? false : true}
        setConfirmModalVisible={setmodalVisible}
        onConfirm={actions[modalVisible]?.click}
      />
    </>
  );
};

export default ActionButtons;
