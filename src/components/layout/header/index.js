import React from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";

const dateRangeOptions = [
  {
    label: "Last Week",
    value: "1",
  },
  {
    label: "Last 2 Weeks",
    value: "2",
  },
  {
    label: "Last Month",
    value: "3",
  },
];

export const Header = ({ dateRange, onRangeChange }) => (
  <Navbar className="py-3" collapseOnSelect expand="lg" variant="dark">
    <Container>
      <Navbar.Brand href="/">Nasa Gallery</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav>
          <Form.Select
            aria-label="Date Range"
            value={dateRange}
            onChange={onRangeChange}
          >
            <option>Select date range</option>
            {dateRangeOptions.map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </Form.Select>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
