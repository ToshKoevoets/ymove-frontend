import React from "react";
import DashboardLayout from "@/components/layout/dashboard";
//import Overview from "@/components/overview";
import { DataType, Table } from 'ka-table';
import { Column } from 'ka-table/models';
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
  
  console.log('argsgsgsg', args)

  const dataResponse = await fetch(args.url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      "X-Authorization": `Bearer ${args.jwt}`,
      "Cache-Control": "no-cache"
    }
  });

  const data = await dataResponse.json();
  console.log('DAADDAADAA', data)
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


/*
  useEffect(() => {
    const user = getResources('user');
  }, []);
*/
  return (
    <DashboardLayout user={props.user} user={props.user} site={props.site}  meta={{
      title: "Dashboard",
    }}>
      <h1>Users: {props.site.title}</h1>
      <div className="card border-0 py-1 p-md-2 p-xl-3 p-xxl-4">
        {usersResponse.error && <div>Failed to load users..</div>}
        {!usersResponse.data && <div>Loading users...</div>}

        {usersResponse.data  && <Table
          columns={[
            { key: 'id', field: 'id', title: 'Column 1', dataType: DataType.String },
            { key: 'firstName', field: 'firstName', title: 'First Name', dataType: DataType.String },
            { key: 'lastName', field: 'lastName', title: 'Last Name', dataType: DataType.String },
            { key: 'email', title: 'Email', dataType: DataType.String },
            { key: 'column4', title: 'Column 4', dataType: DataType.String },
            { key: ':delete', width: 70, style: { textAlign: 'center' } },
          ]}
          data={usersResponse.data}
          rowKeyField={'id'}
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
