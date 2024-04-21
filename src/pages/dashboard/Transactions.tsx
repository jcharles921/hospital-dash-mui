import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Title from "./Title";

// Generate Transaction Data
function createTransaction(
  id: number,
  date: string,
  name: string,
  serviceName: string,
  paymentMethod: string,
  amount: number
) {
  return { id, date, name, serviceName, paymentMethod, amount };
}

const transactions = [
  createTransaction(
    0,
    "16 Mar, 2024",
    "John Doe",
    "Emergency Room",
    "Cash",
    50000 // Amount in Rwandan Francs
  ),
  createTransaction(
    1,
    "16 Mar, 2024",
    "Jane Smith",
    "Radiology",
    "MOMO",
    75000 // Amount in Rwandan Francs
  ),
  createTransaction(
    2,
    "17 Mar, 2024",
    "Michael Johnson",
    "Pharmacy",
    "VISA ⠀•••• 7572",
    30000 // Amount in Rwandan Francs
  ),
  createTransaction(
    3,
    "17 Mar, 2024",
    "Alice Jones",
    "Laboratory",
    "Cash",
    40000 // Amount in Rwandan Francs
  ),
  createTransaction(
    4,
    "18 Mar, 2024",
    "Robert Brown",
    "Emergency Room",
    "MOMO",
    55000 // Amount in Rwandan Francs
  ),
  createTransaction(
    5,
    "18 Mar, 2024",
    "Emily Johnson",
    "Radiology",
    "VISA ⠀•••• 3563",
    80000 // Amount in Rwandan Francs
  ),
  createTransaction(
    6,
    "19 Mar, 2024",
    "William Taylor",
    "Pharmacy",
    "Cash",
    32000 // Amount in Rwandan Francs
  ),
  createTransaction(
    7,
    "19 Mar, 2024",
    "Sarah Clark",
    "Laboratory",
    "MOMO",
    42000 // Amount in Rwandan Francs
  ),
  createTransaction(
    8,
    "20 Mar, 2024",
    "David Wilson",
    "Emergency Room",
    "Cash",
    60000 // Amount in Rwandan Francs
  ),
  createTransaction(
    9,
    "20 Mar, 2024",
    "Emma Anderson",
    "Radiology",
    "MOMO",
    85000 // Amount in Rwandan Francs
  ),
  createTransaction(
    10,
    "21 Mar, 2024",
    "James Brown",
    "Pharmacy",
    "VISA ⠀•••• 5639",
    35000 // Amount in Rwandan Francs
  ),
  createTransaction(
    11,
    "21 Mar, 2024",
    "Olivia Harris",
    "Laboratory",
    "Cash",
    48000 // Amount in Rwandan Francs
  ),
  createTransaction(
    12,
    "22 Mar, 2024",
    "Liam Martinez",
    "Emergency Room",
    "MOMO",
    57000 // Amount in Rwandan Francs
  ),
  // Add more transactions as needed
];


export default function Transactions() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5); // Default rows per page

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page when changing rows per page
  };

  return (
    <React.Fragment>
      <Title>Recent Transactions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Service Name</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Amount (RWF)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Slice the transactions array based on pagination */}
          {transactions
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.name}</TableCell>
                <TableCell>{transaction.serviceName}</TableCell>
                <TableCell>{transaction.paymentMethod}</TableCell>
                <TableCell align="right">
                  {transaction.amount.toLocaleString()} RWF
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]} // Options for rows per page
        component="div"
        count={transactions.length} // Total number of transactions
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-15px",
        }}
      >
        <Link
          color="primary"
          href="#"
          onClick={(event) => event.preventDefault()}
          sx={{ mt: 3 }}
        >
          See more transactions
        </Link>
      </div>
    </React.Fragment>
  );
}
