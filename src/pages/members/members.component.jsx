import React from "react";
import Member from "../../components/member/member.component"

import MEMBERS_DATA from "./DataMembers.js"

class MembersPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      members: MEMBERS_DATA
    };
  }
  render(){
    const { members } = this.state;
    return (
      <div className="ui three column grid">
        {
          members.map(({ id,...otherMembersProps }) => (
            <Member key={id} {...otherMembersProps}
            />
          ))
        }
      </div>
    );
  }
}

export default MembersPage;
