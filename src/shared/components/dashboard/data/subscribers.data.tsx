'use client';

import useSubscribersData from "@/shared/hooks/useSubscribersData";
import { format } from "timeago.js";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const SubscribersData = () => {
  const { data, loading } = useSubscribersData();

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "email", headerName: "Email", flex: 2 },
    { field: "createdAt", headerName: "Subscribed At", flex: 1.5 },
    { field: "source", headerName: "Source", flex: 1 },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      renderCell: (params: any) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            params.row.status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {params.row.status}
        </span>
      ),
    },
  ];

  const rows =
    data?.map((item: subscribersDataTypes) => ({
      id: item._id,
      email: item.email,
      createdAt: format(item.createdAt),
      source: item.source,
      status: item.status,
    })) || [];

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden card hover:border-[#22D3EE]/20">
      <Box sx={{ height: "75vh", width: "100%" }}>
        <DataGrid
          loading={loading}
          rows={rows}
          columns={columns}
          checkboxSelection
          pageSizeOptions={[10, 25, 50]}
          sx={{
            border: "none",

            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#F8FAFC",
              fontWeight: 600,
              fontSize: "0.875rem",
              color: "#0A1628",
              borderBottom: "2px solid #f1f5f9",
            },

            "& .MuiDataGrid-cell": {
              borderBottom: "1px solid #f1f5f9",
              color: "#1E3A5F",
              fontSize: "0.875rem",
            },

            "& .MuiDataGrid-row:hover": {
              backgroundColor: "#F8FAFC",
            },

            "& .MuiDataGrid-footerContainer": {
              borderTop: "1px solid #e5e7eb",
              backgroundColor: "#F8FAFC",
            },

            "& .MuiCheckbox-root": {
              color: "#3B82F6",
            },

            "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-cell:focus": {
              outline: "none",
            },
          }}
        />
      </Box>
    </div>
  );
};

export default SubscribersData;