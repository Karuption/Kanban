import React, { FC, useState } from "react";
import { Card } from "antd";
import { Lane } from "./LaneComponent";

const TaskItem = ({ task }: { task: Task }) => {
  return (
    <Card
      title={task.Title}
      key={task.id}
      hoverable
      draggable="true"
      onDragOverCapture={(e) => console.log(e)}
    >
      {task.Description}
    </Card>
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
