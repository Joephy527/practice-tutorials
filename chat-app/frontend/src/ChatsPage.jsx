import { MultiChatSocket, useMultiChatLogic } from "react-chat-engine-advanced";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  const chatprops = useMultiChatLogic(
    "37f36d5d-483b-4e32-ae0f-9d566dd3be22",
    props.user.username,
    props.user.secret
  );

  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...chatprops} />
      <PrettyChatWindow {...chatprops} style={{ height: "100vh" }} />
    </div>
  );
};

export default ChatsPage;
