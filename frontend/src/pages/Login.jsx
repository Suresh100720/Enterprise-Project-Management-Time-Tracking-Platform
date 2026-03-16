import { Form, Input, Button, Card, message } from "antd";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const onFinish = async (values) => {

    try {

      const response = await api.post("/auth/login", values);

      localStorage.setItem("token", response.data.token);

      message.success("Login successful");

      navigate("/dashboard");

    } catch (error) {

      message.error("Invalid email or password");

    }

  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600">

      <Card title="Login" className="shadow-xl rounded-xl">

        <Form onFinish={onFinish}>

          <Form.Item name="email" rules={[{ required: true }]}>
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Login
          </Button>

          <div className="mt-4 text-center">

            Don't have an account?

            <Link to="/register" className="ml-1 text-blue-500">
              Register
            </Link>

          </div>

        </Form>

      </Card>

    </div>
  );
}