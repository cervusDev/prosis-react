import copyImg from "../assets/copy.svg";

import "../styles/room-code.scss";

export function RoomCode(props) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>#{props.code}</span>
    </button>
  );
}
