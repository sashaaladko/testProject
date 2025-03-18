import React, { useState, useEffect } from 'react';
import { Form, Avatar, Button, Input, Row, Col, message, Upload, Spin } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsersRequest } from "../../../redux/actions/Users";
import {
  LoadingOutlined,
} from "@ant-design/icons";

const EditProfile = () => {
  const [avatarUrl, setAvatarUrl] = useState('/img/avatars/thumb-6.jpg');
  const { id } = useParams();
  const dispatch = useDispatch()
  const history = useHistory();
  const [form] = Form.useForm();
  const users = useSelector(state => state.user.users);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76';

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  useEffect(() => {
    const user = users.find(user => user.id === parseInt(id));
    if (user) {
      setUserData(user);
      form.setFieldsValue({
        name: user.name,
        email: user.email,
        username: user.username,
        phone: user.phone,
        website: user.website,
        city: user.address?.city,
        street: user.address?.street,
        company: user.company?.name,
      });
    }
  }, [id, users, form]);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const onFinish = values => {
    const key = 'updatable';
    setLoading(true);
    message.loading({ content: 'Updating...', key });
    setTimeout(() => {
      setLoading(false);
      console.log(values)
      message.success({ content: 'Done!', key, duration: 2 });
      history.push('/app/clients/list');
    }, 1000);

  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onUploadAvatar = info => {
    const key = 'updatable';
    if (info.file.status === 'uploading') {
      message.loading({ content: 'Uploading...', key, duration: 1000 });
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl => setAvatarUrl(imageUrl));
      message.success({ content: 'Uploaded!', key, duration: 1.5 });
    }
  };

  const onRemoveAvatar = () => {
    setAvatarUrl('');
  };

  return (
    <Spin
    indicator={<LoadingOutlined spin />}
    size="large"
    spinning={loading}
  >
      <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
        <Avatar size={90} src={avatarUrl} icon={<UserOutlined />} />
        <div className="ml-md-3 mt-md-0 mt-3">
          <Upload onChange={onUploadAvatar} showUploadList={false} action={avatarEndpoint}>
            <Button type="primary">Change Avatar</Button>
          </Upload>
          <Button className="ml-2" onClick={onRemoveAvatar}>
            Remove
          </Button>
        </div>
      </Flex>
      <div className="mt-4">
        <Form
          form={form}
          name="basicInformation"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row>
            <Col xs={24} sm={24} md={24} lg={16}>
              <Row gutter={ROW_GUTTER}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your name!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: 'email',
                        message: 'Please enter a valid email!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Phone Number" name="phone">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Website" name="website">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <Form.Item label="City" name="city">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Street" name="street">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Company" name="company">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Button type="primary" htmlType="submit">
                Save Change
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Spin>
  );
};

export default EditProfile;