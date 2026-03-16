export const initSocket = (io) => {

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("taskUpdated", (taskData) => {
      io.emit("taskUpdated", taskData);
    });

    socket.on("newTimeEntry", (timeEntry) => {
      io.emit("newTimeEntry", timeEntry);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });

  });

};