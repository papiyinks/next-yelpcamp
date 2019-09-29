import React from 'react';
import Router from 'next/router';
import Link from 'next/link';
import axios from '../../../axios-order';
import { useRouter } from 'next/router';

const Table = props => {
  const router = useRouter();
  const { id } = router.query;

  const deleted = () => {
    const token = localStorage.getItem('token');

    axios
      .delete(`/campgrounds/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        Router.push('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-9">
          <div className="thumbnail">
            <img
              style={{ width: '100%' }}
              alt=""
              className="img-responsive"
              src={props.obj.image}
            />
            <div className="caption-full">
              <h4 className="pull-right">₦{props.obj.price}</h4>
              <h4>{props.obj.name}</h4>
              <p>{props.obj.description}</p>

              {props.userId === props.obj.owner && (
                <p>
                  <Link
                    href={`/edit/[${props.obj._id}]`}
                    as={`/edit/${props.obj._id}`}
                  >
                    <a className="btn btn-primary">Edit</a>
                  </Link>
                  <button
                    onClick={deleted}
                    style={{ marginLeft: '10px' }}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
