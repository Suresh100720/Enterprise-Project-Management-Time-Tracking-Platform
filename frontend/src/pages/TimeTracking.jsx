import { useEffect, useState } from "react";
import api from "../api/axios";
import { Table, Button, Modal, Form, TimePicker, Popconfirm, message } from "antd";
import dayjs from "dayjs";

export default function TimeTracking() {

  const [entries, setEntries] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);

  const [form] = Form.useForm();

  useEffect(() => {
    loadEntries();
  }, []);

  const loadEntries = () => {
    api.get("/time").then(res => setEntries(res.data));
  };

  const saveEntry = async (values) => {

    const data = {
      fromTime: values.from.format(),
      toTime: values.to.format()
    };

    try {

      if (editingEntry) {

        await api.put(`/time/${editingEntry._id}`, data);
        message.success("Log updated");

      } else {

        await api.post("/time", data);
        message.success("Log added");

      }

      setOpen(false);
      setEditingEntry(null);
      form.resetFields();
      loadEntries();

    } catch {
      message.error("Operation failed");
    }
  };

  const editEntry = (entry) => {

    setEditingEntry(entry);

    form.setFieldsValue({
      from: dayjs(entry.fromTime),
      to: dayjs(entry.toTime)
    });

    setOpen(true);
  };

  const deleteEntry = async (id) => {

    try {

      await api.delete(`/time/${id}`);
      message.success("Log deleted");
      loadEntries();

    } catch {

      message.error("Delete failed");

    }
  };

  const columns = [
    {
      title: "From",
      dataIndex: "fromTime",
      render: (t) => dayjs(t).format("HH:mm")
    },
    {
      title: "To",
      dataIndex: "toTime",
      render: (t) => dayjs(t).format("HH:mm")
    },
    { title: "Hours", dataIndex: "hours" },

    {
      title: "Actions",
      render: (_, record) => (
        <div className="flex gap-2">

          <Button type="primary" onClick={() => editEntry(record)}>
            Edit
          </Button>

          <Popconfirm
            title="Delete this log?"
            onConfirm={() => deleteEntry(record._id)}
          >
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

      {/* Button */}
      <div className="flex justify-center mb-8">
        <Button
          type="primary"
          onClick={() => {
            setEditingEntry(null);
            form.resetFields();
            setOpen(true);
          }}
        >
          Log Hours
        </Button>
      </div>

      {/* Table */}
      <Table columns={columns} dataSource={entries} rowKey="_id" />

      {/* Modal */}
      <Modal
        open={open}
        title={editingEntry ? "Edit Work Log" : "Log Work Hours"}
        footer={null}
        onCancel={() => setOpen(false)}
      >

        <Form form={form} onFinish={saveEntry} layout="vertical">

          <Form.Item name="from" label="From Time" rules={[{ required: true }]}>
            <TimePicker format="HH:mm" style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item name="to" label="To Time" rules={[{ required: true }]}>
            <TimePicker format="HH:mm" style={{ width: "100%" }} />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            {editingEntry ? "Update Log" : "Save Log"}
          </Button>

        </Form>

      </Modal>

    </div>
  );
}