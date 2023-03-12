import React from "react";
import DashboardLayout from "@/components/layout/dashboard";
//import Overview from "@/components/overview";
import { DataType, Table } from 'ka-table';
import { Column } from 'ka-table/models';
import { FilteringMode, SortDirection } from 'ka-table/enums';
import { CSVLink } from 'react-csv';

import useSWR from 'swr';
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



/*
  useEffect(() => {
    const user = getResources('user');
  }, []);
*/
  return (
    <DashboardLayout user={props.user} user={props.user} site={props.site}  meta={{
      title: "Dashboard",
    }}>
      
      <h1>All users</h1>
      <div className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
        {Array.isArray(usersResponse.data) && <CSVLink
          data={usersResponse.data}
          className="btn btn-sm btn-secondary ms-auto"
          headersBKP={Array.isArray(usersResponse.data) ? usersResponse.data.map(c => ({ id: c.id!, key: c.key! })) : []}
          filename='users.data.csv'
          enclosingCharacter={''}
          separator={';'}>
          Download .csv
        </CSVLink>
        }

        {usersResponse.error && <div>Failed to load users..</div>}
        {!usersResponse.data && <div>Loading users...</div>}

        {Array.isArray(usersResponse.data)  && <Table
          columns={[
            { key: 'id', field: 'id', title: 'Column 1', dataType: DataType.String },
            { key: 'firstName', field: 'firstName', title: 'First Name', dataType: DataType.String },
            { key: 'lastName', field: 'lastName', title: 'Last Name', dataType: DataType.String },
            { key: 'email', title: 'Email', dataType: DataType.String },
            { key: ':delete', width: 70, style: { textAlign: 'center' } },
          ]}
          data={usersResponse.data}
          rowKeyField={'id'}
          filteringMode={FilteringMode.FilterRow}
          childComponents={{
            headCellContent: {
              content: ({ column }) => {
                return (
                  <>
                    <span>{column.title}</span>
                  </>
                );
              }
            }
          }}
        />}
      </div>
    </DashboardLayout>    
  );
}
