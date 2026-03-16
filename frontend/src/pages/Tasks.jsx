import { useEffect, useState } from "react";
import api from "../api/axios";
import { Table, Button, Modal, Form, Input, Popconfirm, message } from "antd";

export default function Tasks() {

  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const [form] = Form.useForm();

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  const saveTask = async (values) => {
    try {

      if (editingTask) {
        await api.put(`/tasks/${editingTask._id}`, values);
        message.success("Task updated");
      } else {
        await api.post("/tasks", values);
        message.success("Task created");
      }

      setOpen(false);
      setEditingTask(null);
      form.resetFields();
      loadTasks();

    } catch {
      message.error("Operation failed");
    }
  };

  const deleteTask = async (id) => {
    try {
      await api.delete(`/tasks/${id}`);
      message.success("Task deleted");
      loadTasks();
    } catch {
      message.error("Delete failed");
    }
  };

  const editTask = (task) => {

    setEditingTask(task);

    form.setFieldsValue({
      title: task.title,
      status: task.status
    });

    setOpen(true);
  };

  const columns = [
    { title: "Task Title", dataIndex: "title" },
    { title: "Status", dataIndex: "status" },
    {
      title: "Actions",
      render: (_, record) => (
        <div className="flex gap-2">

          <Button type="primary" onClick={() => editTask(record)}>
            Edit
          </Button>

          <Popconfirm title="Delete task?" onConfirm={() => deleteTask(record._id)}>
            <Button danger>
              Delete
            </Button>
          </Popconfirm>

        </div>
      )
    }
  ];

  return (
    <div className="p-10">

      <div className="flex justify-center mb-8">
        <Button
          type="primary"
          onClick={() => {
            setEditingTask(null);
            form.resetFields();
            setOpen(true);
          }}
        >
          Add Task
        </Button>
      </div>

      <Table columns={columns} dataSource={tasks} rowKey="_id" />

      <Modal
        open={open}
        title={editingTask ? "Edit Task" : "Add Task"}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <Form form={form} onFinish={saveTask} layout="vertical">

          <Form.Item name="title" label="Task Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item name="status" label="Status">
            <Input placeholder="Pending / Completed" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            {editingTask ? "Update Task" : "Create Task"}
          </Button>

        </Form>
      </Modal>

    </div>
  );
}