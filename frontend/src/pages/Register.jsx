import { Form, Input, Button, Card, Select, message } from "antd";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const onFinish = async (values) => {

    try {

      await api.post("/auth/register", values);

      message.success("Registration successful");

      navigate("/");

    } catch (error) {

      message.error("Registration failed");

      console.log(error);

    }

  };

  return (
    <div className="flex justify-center items-center h-screen">

      <Card title="Register" style={{ width: 350 }}>

        <Form onFinish={onFinish}>

          <Form.Item name="name" rules={[{ required: true }]}>
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item name="email" rules={[{ required: true }]}>
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item name="role">

            <Select placeholder="Select Role">

              <Select.Option value="ORG_ADMIN">
                Organization Admin
              </Select.Option>

              <Select.Option value="PROJECT_MANAGER">
                Project Manager
              </Select.Option>

              <Select.Option value="TEAM_MEMBER">
                Team Member
              </Select.Option>

              <Select.Option value="CLIENT">
                Client
              </Select.Option>

            </Select>

          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Register
          </Button>

        </Form>

      </Card>

    </div>
  );
}
