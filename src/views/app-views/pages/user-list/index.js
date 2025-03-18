import React, { useEffect, useState } from "react";
import { Card, Table, Tooltip, message, Button, Spin } from "antd";
import {
  EyeOutlined,
  DeleteOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import UserView from "./UserView";
import AvatarStatus from "components/shared-components/AvatarStatus";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersRequest } from "../../../../redux/actions/Users";

const UserList = () => {
  const [userProfileVisible, setUserProfileVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, users } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  const deleteUser = (userId) => {
    // setUsers(users.filter(item => item.id !== userId));
    message.success({ content: `Deleted user ${userId}`, duration: 2 });
  };

  const showUserProfile = (userInfo) => {
    setUserProfileVisible(true);
    setSelectedUser(userInfo);
  };

  const closeUserProfile = () => {
    setUserProfileVisible(false);
    setSelectedUser(null);
  };

  const handleRowClick = (record) => {
    history.push(`/app/clients/list/${record.id}`);
  };

  const tableColumns = [
    {
      title: "Клиент",
      dataIndex: "name",
      width: "150px",
      render: (_, record) => (
        <div className="d-flex">
          <AvatarStatus
            src={record.img}
            name={`${record.name} ${record.username}`}
            subTitle={record.email}
          />
        </div>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: "Телефон",
      dataIndex: "phone",
      width: "150px",
      sorter: {
        compare: (a, b) => a.phone.localeCompare(b.phone),
      },
    },
    {
      title: "Вебсайт",
      dataIndex: "website",
      sorter: {
        compare: (a, b) => {
          a = a.website.toLowerCase();
          b = b.website.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: "Компания",
      dataIndex: "company",
      width: "180px",
      render: (_, record) => (
        <span>
          {record.company?.name} <br /> {record.company?.catchPhrase}{" "}
          {record.company?.bs}
        </span>
      ),
      sorter: {
        compare: (a, b) => {
          a = a.name.toLowerCase();
          b = b.name.toLowerCase();
          return a > b ? -1 : b > a ? 1 : 0;
        },
      },
    },
    {
      title: "",
      dataIndex: "actions",
      render: (_, elm) => (
        <div className="text-right">
          <Tooltip title="View">
            <Button
              type="primary"
              className="mr-2"
              icon={<EyeOutlined />}
              onClick={() => showUserProfile(elm)}
              size="small"
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              danger
              icon={<DeleteOutlined />}
              onClick={() => deleteUser(elm.id)}
              size="small"
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <Card bodyStyle={{ padding: "0px" }}>
      <Spin
        indicator={<LoadingOutlined spin />}
        size="large"
        spinning={loading}
      >
        <Table
          columns={tableColumns}
          dataSource={users}
          rowKey="id"
          onRow={(record) => ({
            onClick: () => handleRowClick(record),
          })}
        />
        <UserView
          data={selectedUser}
          visible={userProfileVisible}
          close={closeUserProfile}
        />
      </Spin>
    </Card>
  );
};

export default UserList;
