import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  ProjectOutlined,
  ProfileOutlined,
  ClockCircleOutlined
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Sider } = Layout;

export default function Sidebar() {

  const location = useLocation();

  return (
    <Sider
      width={220}
      className="h-screen shadow-lg"
      style={{ background: "#0f172a" }}
    >

      {/* Logo */}
      <div className="text-white text-2xl font-bold text-center py-5 border-b border-gray-700">
        EPM
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        className="mt-3"
      >

        <Menu.Item
          key="/dashboard"
          icon={<DashboardOutlined />}
        >
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>

        <Menu.Item
          key="/projects"
          icon={<ProjectOutlined />}
        >
          <Link to="/projects">Projects</Link>
        </Menu.Item>

        <Menu.Item
          key="/tasks"
          icon={<ProfileOutlined />}
        >
          <Link to="/tasks">Tasks</Link>
        </Menu.Item>

        <Menu.Item
          key="/time"
          icon={<ClockCircleOutlined />}
        >
          <Link to="/time">Time Tracking</Link>
        </Menu.Item>

      </Menu>

    </Sider>
  );
}