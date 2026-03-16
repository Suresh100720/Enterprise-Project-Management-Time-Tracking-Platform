import { Layout, Dropdown, Avatar } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

const { Header } = Layout;

export default function Navbar() {

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const items = [
    {
      key: "1",
      icon: <LogoutOutlined />,
      label: "Logout",
      onClick: logout
    }
  ];

  return (
    <Header
      className="flex justify-between items-center px-6 shadow-md"
      style={{
        background: "#1e293b",
        color: "white"
      }}
    >

      {/* Title */}
      <h1 className="text-lg font-semibold text-white">
        Enterprise Project Management
      </h1>

      {/* User Profile */}
      <Dropdown menu={{ items }} placement="bottomRight">

        <div className="flex items-center cursor-pointer gap-2">

          <Avatar icon={<UserOutlined />} />

          <span className="text-white">
            Admin
          </span>

        </div>

      </Dropdown>

    </Header>
  );
}