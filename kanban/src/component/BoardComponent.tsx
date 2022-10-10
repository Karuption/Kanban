import React, { FC, SetStateAction, useState, Dispatch } from "react";
import { Button, Input, Form, Popover } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import LaneComponent, { Lane, LaneProps } from "./LaneComponent";
import "../App.css";

const BoardComponent: FC<any> = ({ board, setBoard }: BoardProps) => {
  const [open, setOpen] = useState(false);
  const [newLane, setNewLane] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row",
        padding: "5px",
      }}
    >
      {board.lanes.map((lane) => (
        <span style={{ padding: "5px" }} key={lane.id}>
          <LaneComponent lane={lane} />
        </span>
      ))}
      <Popover
        placement="bottomLeft"
        open={open}
        onOpenChange={(x) => {
          setOpen(x);
          setNewLane("");
        }}
        content={
          <Form
            initialValues={{ remember: false }}
            autoComplete="off"
            autoSave="off"
            onFinish={() => {
              handleLaneAdd({ lane: newLane }, { board, setBoard });
              setOpen(false);
              setNewLane("");
            }}
            layout="inline"
            fields={[{ name: ["lane"], value: newLane }]}
            onValuesChange={(changedValues, values) => {
              changedValues?.lane && setNewLane(changedValues.lane);
            }}
          >
            <Form.Item
              name="lane"
              rules={[
                {
                  required: true,
                  message: "Please input the name for your new lane",
                },
              ]}
              initialValue=""
            >
              <Input placeholder="Add a new lane" />
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
        <Button
          icon={<PlusCircleFilled />}
          type="primary"
          style={{ marginTop: "5px" }}
        />
      </Popover>
    </div>
  );
};

const handleLaneAdd = (
  { lane }: { lane: string },
  { board, setBoard }: BoardProps
) => {
  setBoard({
    BoardName: board.BoardName,
    UserID: board.UserID,
    lanes: [
      ...board.lanes,
      {
        id: "43b76a08-075e-47d8-ac4c-1792f81b8c74",
        Archived: false,
        CreatedBy: "e2d28c04-a4b3-4474-b502-4d1fe082540c",
        CreatedDateTime: Date.UTC.toString(),
        Title: lane,
        Tasks: [],
      },
    ],
  });
};

export interface BoardProps {
  board: Board;
  setBoard: Dispatch<SetStateAction<Board>>;
}

export declare interface Board {
  UserID: string;
  lanes: Lane[];
  BoardName: string;
}

export default BoardComponent;
