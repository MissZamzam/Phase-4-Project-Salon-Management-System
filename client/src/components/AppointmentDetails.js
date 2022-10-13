import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';

function AppointmentDetails({allAppointments, deleteAppointment}){
    
    const navigate = useNavigate();

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    }));

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Appointment_id</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Appointment_Date</StyledTableCell>
            <StyledTableCell align="right">Appointment_Time</StyledTableCell>
            <StyledTableCell align="right">Edit</StyledTableCell>
            <StyledTableCell align="right">Cancel</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allAppointments.map((appointment) => (
            <StyledTableRow 
            key={appointment.id}
            onClick={() => navigate(`/appointments/${appointment.id}`)}
            style={{cursor: "pointer"}}
            >
              <StyledTableCell align="left">{appointment.id}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {appointment.name}
              </StyledTableCell>
              <StyledTableCell align="right">{appointment.email}</StyledTableCell>
              <StyledTableCell align="right">{appointment.appointment_date}</StyledTableCell>
              <StyledTableCell align="right">{appointment.appointment_time}</StyledTableCell>
              <StyledTableCell align="right">
              <Box
                m={1}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
                onClick={() => navigate(`/appointments/${appointment.id}`)}
              >
                <Button 
                variant="outlined" 
                
                >
                  EDIT
                </Button>
              </Box>
              </StyledTableCell>
              <StyledTableCell align="right">
              <Box
                m={1}
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-end"
              >
                <Button 
                variant="contained" 
                color="error"
                onClick={() => {
                  deleteAppointment(appointment.id);
                }}
                >
                  Delete
                </Button>
              </Box>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AppointmentDetails;