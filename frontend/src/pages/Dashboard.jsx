import { useEffect, useState } from "react";
import api from "../api/axios";
import { Card, Row, Col } from "antd";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { Layout } from "antd";

const { Content } = Layout;

export default function Dashboard() {

  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [time, setTime] = useState([]);

  useEffect(() => {
    api.get("/projects").then(res => setProjects(res.data));
    api.get("/tasks").then(res => setTasks(res.data));
    api.get("/time").then(res => setTime(res.data));
  }, []);

  const totalHours = time.reduce((sum, t) => sum + t.hours, 0);

  return (
    <Layout>
      <Sidebar/>

      <Layout>
        <Navbar/>

        <Content className="p-10">

          <Row gutter={20}>

            <Col span={8}>
              <Card title="Projects">{projects.length}</Card>
            </Col>

            <Col span={8}>
              <Card title="Tasks">{tasks.length}</Card>
            </Col>

            <Col span={8}>
              <Card title="Hours Logged">{totalHours}</Card>
            </Col>

          </Row>

        </Content>
      </Layout>
    </Layout>
  );
}