import { Checkbox } from "antd";
import React, { FC } from "react";

const ChecklistItem: FC<any> = ({ clItem }: { clItem: ClItem }) => {
  const [completed, setCompleted] = React.useState(clItem.Completed);
  return (
    <Checkbox
      checked={completed}
      style={{ textDecoration: completed ? "strike-through" : "" }}
      onChange={(e) => setCompleted(e.target.checked)}
    >
      {clItem.Description}
    </Checkbox>
  );
};
export default ChecklistItem;

export declare interface ClItem {
  id: number;
  Completed: boolean;
  Description: string;
}
