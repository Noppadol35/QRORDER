import React, { useContext } from 'react';
import Link from 'next/link';

export default function Home() {

  return (
    <>
      <div className="row my-5">
        <div className="col-md-4">
          <div className="card shadow border-0 m27-mb-3">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="icon-pencil text-primary float-left" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <div className="media-body text-right">
                    <p>All Product List</p>
                    <span><a className="btn btn-primary">View Details</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow border-0 m27-mb-3">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="icon-speech text-warning float-left" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <div className="media-body text-right">
                    <p>Scan In</p>
                    <span><a className="btn btn-warning">View Details</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow border-0 m27-mb-3">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="icon-graph  text-info float-left" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <div className="media-body text-right">
                    <p>Scan Out</p>
                    <span><a className="btn btn-info">View Details</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-md-4">
          <div className="card shadow border-0 m27-mb-3">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="icon-rocket  text-success float-left" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <div className="media-body text-right">
                    <p>Cart List</p>
                    <span><a className="btn btn-success">View Details</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card shadow border-0 m27-mb-3">
            <div className="card-content">
              <div className="card-body">
                <div className="media d-flex">
                  <div className="align-self-center">
                    <i className="icon-pie-chart text-danger float-left" style={{ fontSize: '3rem' }}></i>
                  </div>
                  <div className="media-body text-right">
                    <p>Orders History</p>
                    <span><a className="btn btn-danger">View Details</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 ">
            <div className="card shadow border-0 m27-mb-3">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex">
                    <div className="align-self-center">
                      <i className="icon-user   text-primary float-left" style={{ fontSize: '3rem' }}></i>
                    </div>
                    <div className="media-body text-right">
                      <p>User List</p>
                      <span><a className="btn btn-primary">View Details</a></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
