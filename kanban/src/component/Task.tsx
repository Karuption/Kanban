import React, { FC, SetStateAction, useState } from "react";
import { Card, Checkbox, Drawer, Comment, List } from "antd";
import { Lane } from "./LaneComponent";
import ChecklistItem, { ClItem } from "./ChecklistItem";

const TaskItem = (
  {
    task,
  }: {
    task: Task;
  } /*,{setTask}: {setTask:React.Dispatch<React.SetStateAction<Task>}*/
) => {
  const [expanded, setExpanded] = useState(false);
  const [taskState, setTask] = useState(task);
  const archiveStrike = {
    textDecoration: taskState.Archived ? "line-through" : "none",
  };
  return (
    <div>
      <Card
        title={<h4>{taskState.Title}</h4>}
        hoverable
        draggable="true"
        onDragOverCapture={(e) => console.log(e)}
        onClick={() => setExpanded(!expanded)}
        style={archiveStrike}
      >
        {taskState.Description}
      </Card>
      <Drawer
        title={<h2 style={archiveStrike}>{taskState.Title}</h2>}
        placement="right"
        closable={true}
        onClose={() => setExpanded(false)}
        open={expanded}
      >
        <span style={archiveStrike}>
          <p>{taskState.Description}</p>
        </span>
        <Checkbox onChange={(e) => archiveChange(e, taskState, setTask)}>
          Archive
        </Checkbox>

        <List
          header={<h4>Checklist</h4>}
          dataSource={taskState.Checklist}
          renderItem={(item) => (
            <li>
              <ChecklistItem clItem={item} />
            </li>
          )}
        />

        <List
          className="comment-list"
          dataSource={taskState.Comments}
          renderItem={(item) => (
            <li>
              <Comment
                author={item.UserID}
                content={item.Comment}
                datetime={item.CreatedDateTime}
                style={archiveStrike}
              />
            </li>
          )}
        ></List>
      </Drawer>
    </div>
  );
};

const archiveChange = (
  e: any,
  task: Task,
  setTask: React.Dispatch<React.SetStateAction<Task>>
) => {
  setTask({ ...task, Archived: e.target.checked });
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
