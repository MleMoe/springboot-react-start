import React, { useState, useEffect } from 'react';
import getUsers from '../api';
import { Table } from 'antd';

interface User {
  uid: number;
  name: string;
  age: string;
  telephone: string;
  email: string;
  job: string;
}

export function UsersTable() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    getUsers().then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  }, []);

  const columns = [
    {
      title: 'id',
      dataIndex: 'uid',
    },
    {
      title: '名字',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '电话',
      dataIndex: 'telephone',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '工作',
      dataIndex: 'job',
    },
  ];

  const dataSource = users.map((user, index) => {
    return {
      key: index,
      ...user,
    };
  });

  return <Table dataSource={dataSource} columns={columns} pagination={false} />;
}
