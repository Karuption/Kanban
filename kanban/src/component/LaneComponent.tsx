import React, { FC, useState } from "react";
import { List, Input, Form, Popover, Button, Modal } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import "../App.css";
import TaskItem, { Task } from "./Task";

const LaneComponent: FC<LaneProps> = ({ lane }: LaneProps) => {
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        padding: "5px",
      }}
    >
      <List
        header={<h4>{lane.Title}</h4>}
        dataSource={lane.Tasks}
        renderItem={(item) => (
          <List.Item
            draggable="true"
            className="draggable"
            onDragEnter={(e) => console.log(e)}
            onDrop={(e) => {
              console.log("dropping");
              console.log(e);
            }}
          >
            <TaskItem task={item} />
          </List.Item>
        )}
      />
      <Popover
        style={{ alignItems: "right" }}
        placement="topLeft"
        open={open}
        onOpenChange={(x) => {
          setOpen(x);
          setNewTask("");
        }}
        content={
          <Form
            initialValues={{ remember: false }}
            autoComplete="off"
            autoSave="off"
            onFinish={() => {
              handleTaskAdd({ taskName: newTask }, { lane: lane });
              setOpen(false);
              setNewTask("");
            }}
            layout="inline"
            fields={[{ name: ["taskName"], value: newTask }]}
            onValuesChange={(changedValues, values) => {
              changedValues?.taskName && setNewTask(changedValues.taskName);
            }}
          >
            <Form.Item
              name="taskName"
              rules={[
                {
                  required: true,
                  message: "Please input the name for your new Task",
                },
              ]}
              initialValue=""
            >
              <Input placeholder="Add a new task" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add
              </Button>
            </Form.Item>
          </Form>
        }
        trigger="click"
      >
        <span style={{ margin: "1px" }}>
          <Button
            icon={<PlusCircleFilled />}
            type="primary"
            style={{ marginTop: "5px" }}
          />
        </span>
      </Popover>
    </div>
  );
};

const handleTaskAdd: any = (
  { taskName }: { taskName: string },
  { lane }: { lane: Lane }
) => {
  lane.Tasks.push({
    id: "1",
    laneID: lane.id,
    CreatedBy: "me",
    CreatedDateTime: Date.now().toString(),
    Archived: false,
    Tags: ["new"],
    Title: taskName,
    Description: "new task",
    DueDate: "null",
    Assignee: "me",
    TimeEstimate: 0,
    Checklist: [],
    TimeEntries: [],
    Comments: [],
  });
};

export interface LaneProps {
  lane: Lane;
}

export declare interface Lane {
  id: string;
  Title: string;
  CreatedDateTime: string;
  CreatedBy: string;
  Archived: Boolean;
  Tasks: Task[];
}

export default LaneComponent;
