import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const conn = io("http://localhost:2244");
    setSocket(conn);

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, []);

  return socket;
};

export default useSocket;
