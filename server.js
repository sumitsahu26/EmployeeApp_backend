const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

const departmentRoutes = require("./routes/departmentRoutes");
const designationRoutes = require("./routes/designationRoutes");
const employeeRoutes = require("./routes/employeeRoutes");
const employeeAttendanceRoutes = require("./routes/employeeAttendanceRoutes");
const employeeSalarySettlementRoutes = require("./routes/employeeSalarySettlementRoutes");
const employeeSalaryRoutes = require("./routes/employeeSalaryRoutes");
const salaryLedgerRoutes = require("./routes/salaryLedgerRoutes");
const menuCategoryRoutes = require("./routes/menuCategoryRoutes");
const menuItemsRoutes = require("./routes/menuItemsRoutes");

dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/departments", departmentRoutes);
app.use("/designations", designationRoutes);
app.use("/employees", employeeRoutes);
app.use("/employeeAttendance", employeeAttendanceRoutes);
app.use("/employeeSalarySettlement", employeeSalarySettlementRoutes);
app.use("/employeeSalary", employeeSalaryRoutes);
app.use("/salaryLedger", salaryLedgerRoutes);
app.use("/menuCategories", menuCategoryRoutes);
app.use("/menuItems", menuItemsRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Employee API is running",
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
