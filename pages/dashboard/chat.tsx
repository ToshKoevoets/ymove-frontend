import DashboardLayout from "@/components/layout/dashboard";
import Form from '@rjsf/core';
import ChatApp from '@/components/chat/App';
import React from "react";

export default function Dashboard(props) {
  const [formData, setFormData] = React.useState(null);

  const {user, site} = props;

  return (
    <DashboardLayout user={props.user} site={props.site} meta={{
      title: "Dashboard",
    }}>
      <h3>Chat</h3>
      <ChatApp 
        apiKey={site.streamApiKey}
        userToken={user.chatToken}
        userId={`user-${user.id}`}
        user={{
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
        }}
      />
    </DashboardLayout>
  );
}
