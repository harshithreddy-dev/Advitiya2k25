"use client";
import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";

const EventSchedule: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const events = [
    {
      day: "14-10-2025",
      events: [
        {
          title: "Workshop",
          time: "Full Day",
          studentOrganizers: [
            "Vamsi Charan",
            "Sunitha",
            "Naga Harshitha",
            "Vara Prasad",
            "Sreevani",
          ],
          facultyOrganizers: ["Dr. Smith", "Prof. Johnson"],
          details: "Hands-on workshop covering various technical topics.",
        },
      ],
    },
    {
      day: "15-10-2025",
      events: [
        {
          title: "Inauguration",
          time: "9:00 AM - 10:30 AM",
          studentOrganizers: ["Event Team"],
          facultyOrganizers: ["Dr. Johnson"],
          details: "Official opening ceremony with keynote speakers.",
        },
        {
          title: "Poster Presentation ",
          time: "11:00 AM - 01:00 PM",
          studentOrganizers: ["W.Pranay Kumar Reddy", "M.Sai Lakshmi"],
          facultyOrganizers: ["Penchal Prasad", "YP Srinath Reddy"],
          details: "Poster Presentations exclusively for all year students.",
        },
         {
          title: "Paper Presentation",
          time: "11:00 AM - 01:00 PM",
          studentOrganizers: ["Design Team"],
          facultyOrganizers: ["Dr. Art", "Prof. Design"],
          details: "Participants present innovative Paper Presentations.",
        },
         {
          title: "Web Development Contest",
          time: "11:00 AM - 01:00 PM",
          studentOrganizers: ["Research Team"],
          facultyOrganizers: ["Dr. Scholar"],
          details: "Create a functional and innovative web application.",
        },
        {
          title: "Graphic Design Contest",
          time: "11:00 AM - 01:00 PM",
          studentOrganizers: ["Web Dev Team"],
          facultyOrganizers: ["Prof. Web"],
          details: "Replicate the provided Design.",
        },
         {
          title: "Technical Quiz",
          time: "1:00 PM - 03:30 PM",
          studentOrganizers: ["Quiz Masters"],
          facultyOrganizers: ["Dr. Knowledge"],
          details: "Test your technical knowledge in this quiz competition.",
        },
      
      ],
    },
  ];

  return (
    <div>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          padding: "20px",
          color: "#E0E0E0",
          background: "linear-gradient(135deg, #1E1E2F, #121212)",
          overflowY: "auto",
          overflowX: "hidden",
          boxShadow: "inset 0 0 10px #000",
        }}
      >
        <Tabs
          value={value}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="event tabs"
          sx={{
            borderBottom: "1px solid #444",
            marginBottom: "20px",
          }}
        >
          {events.map((event, index) => (
            <Tab
              key={index}
              label={event.day}
              sx={{
                fontSize: { xs: "0.9rem", md: "1rem" },
                color: value === index ? "#ffeb3b" : "#bbb",
              }}
            />
          ))}
        </Tabs>

        {events.map((event, index) => (
          <div
            key={index}
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {event.events.map((eventItem, idx) => (
                <Card
                  key={idx}
                  sx={{
                    margin: "10px 0",
                    backgroundColor: "#1e1e1e",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.4)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: "#ffc107",
                        fontSize: { xs: "1rem", md: "1.2rem" },
                      }}
                    >
                      {eventItem.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "0.9rem", md: "1rem" },
                        color: "#80cbc4",
                        marginBottom: "8px",
                      }}
                    >
                      {eventItem.time}
                    </Typography>
                    <Divider
                      sx={{ marginBottom: "16px", backgroundColor: "#444" }}
                    />
                    <Typography
                      sx={{
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                        color: "#e0e0e0",
                      }}
                    >
                      {eventItem.details}
                    </Typography>
                    {/* <Typography
                      sx={{ 
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                        color: "#90caf9",
                        marginTop: "8px",
                      }}
                    >
                      <strong>Student Organizers: </strong>
                      {eventItem.studentOrganizers?.map((organizer, idx) => (
                        <span
                          key={idx}
                          style={{
                            color: idx % 2 === 0 ? "#ff8a65" : "#81c784",
                            marginLeft: "4px",
                          }}
                        >
                          {organizer}
                        </span>
                      ))}
                    </Typography> */}
                    {/* <Typography
                      sx={{
                        fontSize: { xs: "0.85rem", md: "0.95rem" },
                        color: "#90caf9",
                        marginTop: "8px",
                      }}
                    >
                      <strong>Faculty Organizers: </strong>
                      {eventItem.facultyOrganizers?.map((organizer, idx) => (
                        <span
                          key={idx}
                          style={{
                            color: idx % 2 === 0 ? "#ff8a65" : "#81c784",
                            marginLeft: "4px",
                          }}
                        >
                          {organizer}
                        </span>
                      ))}
                    </Typography> */}
                  </CardContent>
                </Card>
              ))}
            </Box>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default EventSchedule;
