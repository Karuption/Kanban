import React, { FC, SetStateAction, useState } from "react";
import { Card, Drawer } from "antd";
import { Lane } from "./LaneComponent";

const TaskItem = ({ task }: { task: Task }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <Card
        title={task.Title}
        key={task.id}
        hoverable
        draggable="true"
        onDragOverCapture={(e) => console.log(e)}
        onClick={() => setExpanded(!expanded)}
      >
        {task.Description}
      </Card>
      <Drawer
        title={task.Title}
        placement="right"
        closable={true}
        onClose={() => setExpanded(false)}
        visible={expanded}
      >
        {task.Description}
      </Drawer>
    </div>
  );
};

export default TaskItem;
export declare interface Task {
  id: string;
  laneID: string;
  CreatedBy: string;
  CreatedDateTime: string;
  Archived: Boolean;
  Tags: Array<any>;
  Title: string;
  Description: string;
  DueDate: string;
  Assignee: string;
  TimeEstimate: Number;
  Checklist: Array<any>;
  TimeEntries: Array<any>;
  Comments: Array<any>;
}
