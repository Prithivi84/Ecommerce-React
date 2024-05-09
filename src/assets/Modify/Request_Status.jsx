import React from "react";
import StatusList from "./Status_asset/StatusList";
import ModifyNav from "./ModifyNav";

export default function Request_Status() {
  return (
    <div>
      <ModifyNav page="Modify" />

      <div className="m-20">
        <StatusList />
      </div>
    </div>
  );
}
