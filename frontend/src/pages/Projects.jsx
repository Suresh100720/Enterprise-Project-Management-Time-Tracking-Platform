import { useEffect, useState } from "react";
import api from "../api/axios";
import { Table, Button, Modal, Form, Input, Popconfirm, message } from "antd";

export default function Projects() {

  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  const [form] = Form.useForm();

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const res = await api.get("/projects");
    setProjects(res.data);
  };

  // CREATE PROJECT
  const createProject = async (values) => {
    try {

      if (editingProject) {
        await api.put(`/projects/${editingProject._id}`, values);
        message.success("Project updated successfully");
      } else {
        await api.post("/projects", values);
        message.success("Project created successfully");
      }

      setOpen(false);
      setEditingProject(null);
      form.resetFields();
      loadProjects();

    } catch (err) {
      message.error("Operation failed");
    }
  };

  // DELETE PROJECT
  const deleteProject = async (id) => {
    try {
      await api.delete(`/projects/${id}`);
      message.success("Project deleted");
      loadProjects();
    } catch {
      message.error("Delete failed");
    }
  };

  // EDIT PROJECT
  const editProject = (project) => {

    setEditingProject(project);

    form.setFieldsValue({
      name: project.name,
      budget: project.budget,
      status: project.status
    });

    setOpen(true);
  };

  const columns = [
    {
      title: "Project Name",
      dataIndex: "name",
    },
    {
      title: "Budget",
      dataIndex: "budget",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Actions",
      render: (_, record) => (
        <div className="flex gap-2">

          <Button type="primary" onClick={() => editProject(record)}>
            Edit
          </Button>

          <Popconfirm
            title="Delete this project?"
            onConfirm={() => deleteProject(record._id)}
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

      {/* CREATE BUTTON */}
      <div className="flex justify-center mb-8">
        <Button
          type="primary"
          onClick={() => {
            setEditingProject(null);
            form.resetFields();
            setOpen(true);
          }}
        >
          Create Project
        </Button>
      </div>

      {/* TABLE */}
      <Table columns={columns} dataSource={projects} rowKey="_id" />

      {/* MODAL */}
      <Modal
        open={open}
        title={editingProject ? "Edit Project" : "Create Project"}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <Form form={form} onFinish={createProject} layout="vertical">

          <Form.Item
            name="name"
            label="Project Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="budget"
            label="Budget"
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="status"
            label="Status"
          >
            <Input placeholder="Active / Completed" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            {editingProject ? "Update Project" : "Create Project"}
          </Button>

        </Form>
      </Modal>

    </div>
  );
}