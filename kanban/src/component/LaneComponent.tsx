import React, { FC } from "react";
import { List, Card } from "antd";
import "../App.css";
import { TypeOfExpression } from "typescript";

const LaneComponent: FC<LaneProps> = ({ lane }: LaneProps) => {
  return (
    <List
      bordered
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
          <Card
            title={item.Title}
            key={item.id}
            hoverable
            draggable="true"
            onDragOverCapture={(e) => console.log(e)}
          >
            {item.Description}
          </Card>
        </List.Item>
      )}
    />
  );
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
  Tasks: task[];
}

export declare interface task {
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

export default LaneComponent;
