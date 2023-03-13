import React from "react";
import DashboardLayout from "@/components/layout/dashboard";
//import Overview from "@/components/overview";
import { DataType, Table } from 'ka-table';
import { Column } from 'ka-table/models';
import { FilteringMode, SortDirection } from 'ka-table/enums';
import { CSVLink } from 'react-csv';

import useSWR from 'swr';
import Link from "next/link";
const apiUrl = process.env.API;


const columns: Column[] = Array(15).fill(undefined).map(
  (_, index) => ({
    key: 'column' + index,
    width: 200,
    title: 'Column ' + index,
    type: DataType.String,
  }),
);

const columnsNew: Column[] = [{
    key: 'id',
    width: 200,
    title: 'Column ID',
    //type: DataType.String,
  },
  {
    key: 'firstName',
    width: 200,
    title: 'First name',
    //type: DataType.String,
  }
];

const dataArray = Array(30).fill(undefined).map(
  (_, index) => columns.reduce((previousValue: any, currentValue) => {
    previousValue[currentValue.key] = `${currentValue.key} row:${index}`;
    return previousValue;
  }, { id: index }),
);

const usersFetcher = async (args:any) => {
  const dataResponse = await fetch(args.url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      "X-Authorization": `Bearer ${args.jwt}`,
      "Cache-Control": "no-cache"
    }
  });

  const data = await dataResponse.json();
  return data;
}


export default function Dashboard(props:any) {
  const site: any = props.site;
  const user:any = props.user;

  let usersResponse = useSWR({
    url: `/api/site/${site.id}/user`, 
    jwt: user.jwt
  }, usersFetcher);

  console.log('apiUrlapiUrlapiUrl', apiUrl, process.env);
  console.log('propspropspropsprops', props);

  console.log('usersResponse', usersResponse.data);

/*
  useEffect(() => {
    const user = getResources('user');
  }, []);
*/
  return (
    <DashboardLayout user={props.user} user={props.user} site={props.site}  meta={{
      title: "Dashboard",
    }}>
      <h1>Overview</h1>
      <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
        <div className="card-body">
          <div class="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3"><i class="ai-card text-primary lead pe-1 me-2"></i>
            <h2 class="h4 mb-0">Statistics </h2>
          </div>
          <div className="row g-3 g-xl-4">
            <div className="col-md-4 col-sm-6">
              <div className="h-100 bg-secondary rounded-3 text-center p-4">
                <h2 className="h6 pb-2 mb-1"> Active Users</h2>
                <div className="h2 text-primary mb-2">430</div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="h-100 bg-secondary rounded-3 text-center p-4">
                <h2 className="h6 pb-2 mb-1"> Stripe Subscriptions</h2>
                <div className="h2 text-primary mb-2">30</div>
                <p className="fs-sm text-muted mb-0">To be paid on 8/15/2022</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="h-100 bg-secondary rounded-3 text-center p-4">
                <h2 className="h6 pb-2 mb-1">Apple Subscriptions</h2>
                <div className="h2 text-primary mb-2">40</div>
                <p className="fs-sm text-muted mb-0">Based on list price</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="h-100 bg-secondary rounded-3 text-center p-4">
                <h2 className="h6 pb-2 mb-1">Google Subscriptions</h2>
                <div className="h2 text-primary mb-2">230</div>
                <p className="fs-sm text-muted mb-0">Based on list price</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="h-100 bg-secondary rounded-3 text-center p-4">
                <h2 className="h6 pb-2 mb-1">Products Purchased</h2>
                <div className="h2 text-primary mb-2">230</div>
                <p className="fs-sm text-muted mb-0">Based on list price</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="h-100 bg-secondary rounded-3 text-center p-4">
                <h2 className="h6 pb-2 mb-1">Manual Active Users</h2>
                <div className="h2 text-primary mb-2">230</div>
                <p className="fs-sm text-muted mb-0">Based on list price</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
        <div className="card-body">
          <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-0 mb-lg-1 mb-xl-3"><i className="ai-cart text-primary lead pe-1 me-2" />
            <h2 className="h4 mb-0">Newest Users</h2>
            <Link className="btn btn-sm btn-secondary ms-auto" href="/dashboard/users">View all</Link>
          </div>
        </div>
      </section>
      {/* Address*/}
      <section className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4 mb-4">
        <div className="card-body">
          <div className="d-flex align-items-center mt-sm-n1 pb-4 mb-1 mb-lg-2"><i className="ai-map-pin text-primary lead pe-1 me-2" />
            <h2 className="h4 mb-0">Latest Activity</h2>
          </div>
          
        </div>
      </section>
    </DashboardLayout>    
  );
}
