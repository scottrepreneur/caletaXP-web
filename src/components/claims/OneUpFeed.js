import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import _ from 'lodash';

const OneUpFeed = ({ oneUps, handleNav, history }) => {
  const [sortedOneUps, setSortedOneUps] = useState([]);

  useEffect(() => {
    setSortedOneUps(
      _.sortBy(oneUps, oneUp => {
        return new Date(oneUp.fields.createdAt).getTime();
      }).reverse(),
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oneUps]);

  const renderRows = () => {
    return sortedOneUps.map(oneUp => {
      return (
        <tr key={oneUp.id} onClick={() => handleNav(oneUp.fields.username)}>
          <td>{oneUp.fields.username}</td>
          <td>{oneUp.fields.sender}</td>
          <td>{new Date(oneUp.fields.createdAt).toLocaleString()}</td>
        </tr>
      );
    });
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Sender</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </Table>
    </>
  );
};

export default OneUpFeed;